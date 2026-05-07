---
title: The rules the model won't follow
issue: 4
date: 2026-05-20
pillar: Build log
dek: I spent a week telling Claude to put the save trigger in paragraph two. It put it in paragraph six. Every time. Here's what I learned about which rules belong in prompts and which belong in code.
---

There's a thing the post engine kept doing that I couldn't fix with prompting.

The five-act structure I extracted from my highest-performing posts has a specific rule: the save trigger — the line that gives readers a reason to bookmark the post — has to land in paragraph two or three. Not paragraph six. Not the conclusion. Early. The data on this is unambiguous. When the save trigger drops below the fold, dwell time collapses and the post stalls.

So I wrote it into the prompt. I wrote it in three different ways. I wrote it as a rule, as an example, as a worked counter-example. I added a structural scoring rubric that explicitly checks save-trigger position and penalises late placement.

The model nodded along and put the save trigger in paragraph six anyway. Every time.

This week I stopped trying to fix it with words and started fixing it with code. Here's what I learned.

## The rules I tried to enforce in the prompt

Three structural rules, all derived from posts that hit 30k+ impressions versus posts that stalled at 5k.

**Save trigger position.** Paragraph two or three. Never later than paragraph four.

**Paragraph density.** Maximum 40 words per paragraph. The high-performers averaged 22.

**Contractions.** "I'm" not "I am." "Don't" not "do not." Real recruiters write the way they speak. The 5k-impression posts read like LinkedIn About sections.

I had each of these in the system prompt. With examples. With a self-scoring step at the end that checked compliance before output. The structural scoring layer rated each generated post 0–10 per act and 0–10 on these three rules.

The scores came back high. The posts looked compliant on the rubric. They were not compliant in the actual text.

## What was actually happening

I instrumented the pipeline. Every generation, I logged the prompt, the response, the structural score the model assigned itself, and the structural score a programmatic checker assigned to the same text.

The gap was the story.

On a sample of 40 generations:

- The model rated its own save-trigger placement as compliant in 38 cases.
- The programmatic checker — counting paragraphs and locating the bookmark-worthy line — rated it as compliant in 11.
- The model rated paragraph density as compliant in 35 cases. The checker counted words and found compliance in 14.
- Contraction use: model said compliant in 39. Actual rate of contractions versus their expansions in the text: 31% on average. (Real human posts in my voice profile: 78%.)

The model wasn't lying. It was scoring against an internal representation of the rule that didn't match the rule. Asked "is the save trigger in paragraph two or three," it would inspect the post, find a sentence in paragraph two that *could* be a save trigger, and mark it compliant. The actual save trigger — the one a reader would bookmark — was four paragraphs later. The model couldn't tell the difference between "a line is in paragraph two" and "the load-bearing line is in paragraph two."

This is the same failure mode I keep running into. Models are good at semantic compliance, bad at structural compliance. They will follow the spirit of a rule and miss the letter every time.

## What I built instead

I stopped asking the model to enforce structural rules and built a post-processing layer that does it deterministically.

The layer runs after generation, before the post is shown to the user. It does five things, none of which require an LLM.

**One. Locate the save trigger.** A regex pass finds candidate lines — declarative sentences with a high information-density score, scored by a simple heuristic (specific number, specific name, counter-intuitive claim). The highest-scoring candidate is the trigger. If it's in paragraph one, two, or three, pass. If it's later, the layer flags it and either rewrites or rejects.

**Two. Count words per paragraph.** Splits on double-newline, counts tokens. Any paragraph over 40 words gets flagged for split. The split itself is offered to the model as a constrained rewrite — "split this paragraph at the natural break, keep both halves under 40 words" — but the *decision to split* is made in code, not in prompt.

**Three. Enforce contractions.** Pure string replace. "I am" → "I'm." "Do not" → "don't." "Cannot" → "can't." There are about 20 pairs and they cover 95% of the cases. The exceptions — places where the expanded form is intentional — are vanishingly rare in LinkedIn posts. The replace runs unconditionally.

**Four. Strip the engagement-bait closer.** "Let me know in the comments" / "What are your thoughts?" / "Drop a comment if you agree." Pattern-matched and removed. The model loves these. They tank reach. Gone.

**Five. Validate paragraph count.** Five-act posts should run 5–8 paragraphs. Less than 5 means the structure collapsed. More than 8 means the model padded. Either case, the layer rejects and re-prompts with a tightened instruction.

The post-processing layer is about 200 lines of code. It catches every structural failure the prompt couldn't fix.

## The actual numbers

I ran the same 40 prompts through the engine before and after the post-processing layer.

Before: average structural score (programmatic) of 4.2 out of 10. Save trigger correctly placed in 11 of 40. Paragraph density compliant in 14. Contraction rate at 31%.

After: average structural score of 8.7 out of 10. Save trigger correctly placed in 39 of 40 (the one miss was a hard rejection — the post was regenerated). Paragraph density compliant in 40. Contraction rate at 81%.

The content quality didn't change. The prompt didn't change. The model didn't change. The thing that changed is that the rules that needed to be deterministic stopped being suggestions to the model and became guarantees in the pipeline.

## The rule I should have followed from day one

Here's the lesson, stated as a rule for anyone building anything that uses an LLM to generate structured output.

> Anything you can check in code, check in code. Anything you can fix in code, fix in code. The model is for the parts that genuinely require judgement. Everything else is post-processing.

This sounds obvious. It is obvious. The reason I didn't do it from day one is that prompt engineering feels like it's working when the model says "yes, I followed your rule." It's only when you build a checker — an actual checker that operates on the text, not a model-graded one — that you find out the model is wrong about its own compliance roughly 70% of the time on structural rules.

I had built three months of "the model is following the rules" before I built one week of "the model is not, in fact, following the rules." The week of measuring was worth the three months of prompting.

## Where this generalises

If you are building anything that generates LinkedIn posts, job adverts, Boolean strings, outreach messages, or candidate summaries with an LLM, the same pattern applies.

The model is excellent at the parts that require judgement. Voice. Tone. Whether a particular candidate's open-source contribution actually demonstrates senior-level engineering or junior-level enthusiasm. Whether a job advert's hook is genuinely interesting or just a cliché in disguise. These things require taste, and taste is exactly what the model has.

The model is bad at the parts that require counting, position, and exact-string compliance. Word counts. Paragraph counts. The presence or absence of specific phrases. The position of a specific element in a structure. These are deterministic checks. They belong in code.

The mental model I now use: when I draft a prompt, I draft a checker alongside it. If I can't write the checker, I haven't specified the rule clearly enough to enforce it. If I can write the checker, I write it, and I run it, and I do not trust the model to enforce the rule on its own.

This applies to every tool I'm building right now. The Boolean Builder validates segment structure in code, not in the LLM. The Advert Writer's craft-techniques extraction is on the to-do list — the JSON truncation issue I shipped around earlier this month is exactly this pattern, where the model was supposed to return a structured field and silently didn't. The CV platform's tenant isolation is enforced at the database query layer, not at the prompt layer, because "don't show this user data from another tenant" is not a rule you ask a model to follow. It's a rule you make impossible to violate.

## The question

What's a structural rule you've been trying to enforce with prompting that your model keeps quietly ignoring? Reply and tell me — I'll add it to the post-processing layer if it generalises, and feature the best ones in a follow-up.

Next Wednesday: the Juicebox vs SeekOut head-to-head on an identical ML research scientist brief, with response-rate data. (Drafted. Numbers are from CRM, not from an LLM.)

---

**Brendan Williams** · AI Sourcing Specialist · Manchester
[linkedin.com/in/sourcing-strategist](https://www.linkedin.com/in/sourcing-strategist/)
