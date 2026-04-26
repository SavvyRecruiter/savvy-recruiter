---
title: I asked my own AI tool to write a LinkedIn post
issue: 3
date: 2026-05-13
pillar: Research
dek: I built a LinkedIn content tool with three layers of AI-slop and hallucination detection. Then I asked it to write a post about my own work. Here's what it produced — and what its own checkers caught.
---

I've been building a LinkedIn content platform for the last six months.

It has a Slop Sentinel that scans drafts for AI vocabulary tells. A Hallucination Sentinel that highlights every percentage, currency amount, named entity, and "studies show" phrase for verification before publishing. An Algorithm Guardrails layer that catches engagement bait, paragraph density problems, and grade-20 readability. A Voice Profile that extracts your sentence-length distribution and signature phrases from past posts and feeds them as a system prompt.

Last week I tested it on a real assignment: write a LinkedIn post about why ML engineers in £180k+ roles tend to have public portfolios.

The platform produced this:

> *I've got a confession to make - 9 out of 10 candidates I've placed in £180k+ roles had one thing in common: they didn't rely on resumes. But here's what surprised me: it's not just about having a strong GitHub or Kaggle profile - it's about showcasing tangible evidence of skills through completed assignments, portfolios, and contributions on platforms like HuggingFace, arXiv, and Stack Overflow, with a minimum of 100 followers and 5 published papers.*
>
> *I've noticed that when candidates share verified examples of their work, such as code, papers, or models on HuggingFace Papers, it signals their ability to execute and deliver results, making them more attractive to potential employers like Google, Microsoft, and Meta - in fact, I've seen a 47% increase in placement rates when candidates have a strong portfolio with 15+ projects and 200+ stars.*

Here's what's wrong with that.

## The fabrications I would have shipped

**"9 out of 10 candidates I've placed in £180k+ roles."** I haven't placed ten people in £180k+ roles. The real number is smaller and the public version of that claim should reflect it.

**"47% increase in placement rates when candidates have 15+ projects and 200+ stars."** No source. No methodology. The 47 is not a measured number — it's a number the LLM produced because percentages anchor stronger than ranges.

**"30% reduction in time-to-hire, 25% increase in response rate."** Two more stacked percentages. Same problem. The platform's own Hallucination Sentinel flagged all three of these on the verification pass.

**"A minimum of 100 followers and 5 published papers."** Presented as a threshold that means something. arXiv doesn't have followers. The threshold is fabricated.

**"Google, Microsoft, and Meta."** Name-dropped as if I've placed candidates across multiple FAANG companies. I haven't. The only FAANG name I can defend in print is Amazon, where I have placed. Google, Microsoft and Meta are not on my CV.

**"A list of 17 alternative platforms"** then later **"the next 17."** Both seventeens. Suspicious symmetry. The first seventeen doesn't exist as a real artifact.

Underneath all that is a real point — that ML engineers in senior roles tend to have public evidence of their work, and that evidence beats CVs. That sentence is true. But the post buried it under fabricated authority.

## What the checkers caught

I ran the post through my own platform. Here's what each layer said.

**Slop Sentinel** flagged it as `LOW risk · 1 flag · CLEAN`. That was wrong. The correct verdict was high risk. The vocabulary list was missing the actual high-frequency tells: confession-style hooks, "hidden gems," "like-minded individuals," "driving the conversation forward," "excited to see where it takes us," "ditch the traditional," "showcasing tangible evidence." None of those were in the wordlist.

**Algorithm Guardrails** caught the structural problems correctly. Grade-20 readability — about a 35% reach loss before any other factor. Four paragraphs over the density limit. The post was a wall of text wearing a blazer.

**Forecaster Intelligence** caught the deepest signal: 25% semantic coherence with my own LinkedIn About section. Only two of the post's top five terms matched my profile. The post wasn't arguing for anything. It was name-dropping platforms. The numerical density was high but the save signal was weak — there was nothing in it worth bookmarking.

**Hallucination Sentinel** wasn't shipped in the version I tested on. That's also a bug. Pure regex, costs nothing to run, should fire on every draft.

## What I changed in the platform this week

I patched the Slop Sentinel wordlist. Forty-three new phrases. Re-running the same post through the patched version: **27 flags · HIGH risk.** Same content, accurate verdict.

I tightened the em-dash threshold from three-per-hundred-words to two-per-hundred-words. I added three new structural detectors:

- A **name-drop saturation** flag that catches posts stuffing 4+ brand mentions per 100 words. The test post had 22 brand mentions in 289 words. Real human posts almost never do this.
- A **stacked percentages** flag for 3+ specific percentages in one post without source attribution. Real recruiters cite one stat carefully. LLMs stack them.
- A **confession-quantitative formula** detector. The pattern "I've got a confession: 9 out of 10 of my placements..." is one of the most common AI-generated openers in recruiting. Now flagged.

The patched detector now catches the post that shipped clean before. That's the only test that matters.

## What this means for using AI to write LinkedIn content

Three observations from running this in production for six months and then trying to break my own tool.

**One.** The model is not the problem. Claude wrote that post. Claude is good. The problem is that any LLM, given a system prompt full of platform names and asked to write a confident-sounding LinkedIn post, will stuff every name into one post and invent authority numbers around them. This is not a model failure. It's a generation-without-verification failure.

**Two.** "Sounds human" is the wrong target. The post above sounds reasonably human. It uses contractions. It varies sentence length. It opens with a confession hook. It would pass a Turing test on first read. What it can't pass is a Hallucination test. The detectable AI tells are not in the prose style — they're in the *evidence shape*. Stacked precise percentages with no methodology. Brand inventory in lieu of argument. Specific thresholds that don't exist.

**Three.** Every AI content tool needs a verification pass that runs *after* generation, *before* the user has the chance to copy. Most don't. The ones that do are mostly checking grammar and SEO. The right thing to check is whether the specific claims in the draft can be defended in public.

## The 100-word version of what the post should have been

Here's what I should have written. No fabricated specifics. One real point.

> Most senior ML engineers I've worked with don't rely on a resume. They rely on a public artifact — a model on Hugging Face, a contribution to a popular open-source library, a paper on arXiv. The artifact is the case for hire. The CV is just paperwork.
>
> When I outreach to one of these candidates, the message that lands is the one that names their specific work. Not "your impressive profile." A specific PR, a specific model name, a specific eval score they shipped.
>
> The shortcut to better outreach isn't a tool. It's reading what they actually shipped, and writing as if you have.

That's the post I should have written. It is shorter, less impressive, and harder for an LLM to generate without prompting.

## What I am still working on

The Hallucination Sentinel is good at catching numerical claims. It's still weak at catching named entities that are technically real but contextually wrong — for example, an LLM saying *"I've placed candidates at Google, Microsoft, and Meta"* will flag those as named entities, but it can't know whether the claim is true. That verification still has to happen in your head.

The Slop Sentinel is now catching most of the formulas I've seen produced. It will get worse over time as LLMs adapt and produce new ones. The list will need maintenance.

The Voice Profile component is the strongest defence. When the model is grounded in your actual past phrasing, it produces less generic output. But it can't fix a hallucination — only a refusal layer can do that.

If you've been generating LinkedIn content with any AI tool over the last twelve months, this is the audit I would do on every post before publishing. Run the draft past three questions:

> 1. **Every percentage** — can I source it from a specific document, my own CRM, or a named report?
> 2. **Every named entity** — have I personally worked with this person/company in the way the post implies?
> 3. **Every specific threshold** ("100 followers", "5 papers", "20 projects") — does the threshold actually exist as a measurable thing in the world?

If the answer to any of those is no, the claim doesn't ship. That's the test.

## The question

Have you ever published an AI-generated post and wished you hadn't? Reply and tell me what gave it away — to you, or to your audience. I'm collecting patterns for the next round of detector updates.

Next Wednesday: a head-to-head of Juicebox vs SeekOut on an identical ML research scientist brief, with response-rate data. (That post is in draft. The numbers are from CRM, not from an LLM.)

---

**Brendan Williams** · AI Sourcing Specialist · Manchester
[linkedin.com/in/sourcing-strategist](https://www.linkedin.com/in/sourcing-strategist/)
