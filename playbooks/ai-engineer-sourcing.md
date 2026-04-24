---
title: The AI Engineer Sourcing Playbook
date: 2026-04-24
status: Live · Vol. 01
readingTime: 15 min
dek: How to find ML engineers who aren't waiting on LinkedIn. Specific queries, filters, and proof points for GitHub, Hugging Face, and Kaggle — with a worked example of a senior LLM brief in London.
---

Every recruiter says the same thing. **AI engineers are impossible to find.** The truth is more specific: they're impossible to find on LinkedIn.

Most senior ML engineers don't keep their LinkedIn profiles current. They don't check their InMail. They build their reputations elsewhere — in places most TA teams never systematically mine.

Industry estimates suggest the global supply-demand gap in AI engineering is somewhere around **3:1** — roughly three qualified candidates for every ten open roles. The exact numbers depend on who you ask and how you define "qualified," but the direction is unambiguous. You cannot hire into that gap using LinkedIn alone. The maths doesn't work.

<div class="stat-row">
<div class="stat"><span class="stat-number">3:1</span><span class="stat-label">Demand / supply gap</span></div>
<div class="stat"><span class="stat-number">2M+</span><span class="stat-label">Models on Hugging Face</span></div>
<div class="stat"><span class="stat-number">~250</span><span class="stat-label">Kaggle Grandmasters worldwide</span></div>
</div>

This playbook is how I close it.

## How to use this

You don't need to master every platform on day one. **Start with GitHub** — it has the highest signal-to-noise ratio and the cleanest search API. Layer in Hugging Face and Kaggle when GitHub stops returning new names.

Five things are in here:

- **GitHub** — specific queries to find engineers merging PRs into foundational ML libraries. Core-maintainer peer review is a stronger signal than any résumé keyword.
- **Hugging Face** — over 2 million open-source models hosted, heading toward 3 million in 2026. Download counts and model cards give you performance and communication signals in one view.
- **Kaggle** — Grandmaster and Master tiers are verifiable by performance on real problems. Zero noise. The leaderboard doesn't lie.
- **A worked example** — senior ML engineer, London, £180k. The exact queries I'd run, what I'd filter for, and what the shortlist looks like.
- **The outreach template** — messaging candidates you found on GitHub is different from LinkedIn InMail. Get this wrong and your reply rate tanks.

---

## Platform 01 — GitHub

### The peer-review signal

GitHub is the highest-signal sourcing platform for ML engineers. You're not hunting stargazers or profile bios. You're hunting **merged PRs into canonical ML libraries**. That's peer-reviewed technical proof.

### Core query — actively-maintained ML repos

```
topic:pytorch OR topic:tensorflow
```

Returns roughly 1,200 actively-maintained ML repositories. Sort by "Recently updated" to filter out abandoned projects.

### Narrower — specific sub-domains

```
topic:large-language-models stars:>100 language:python pushed:>2025-10-01
topic:computer-vision topic:pytorch stars:>50 pushed:>2025-10-01
topic:reinforcement-learning topic:jax pushed:>2025-10-01
```

### Finding contributors (not just repo owners)

The real value isn't the repo owner — it's the people merging PRs into the repo. Navigate to:

```
github.com/{org}/{repo}/pulse/monthly
github.com/{org}/{repo}/graphs/contributors
```

The contributors graph shows everyone who's merged code in the last month. For libraries like PyTorch, TensorFlow, or Hugging Face Transformers, every name on that list has been reviewed by a staff-level engineer.

### The PR signal hierarchy

- **Tier 1 (strongest)** — merged PR into `pytorch/pytorch`, `tensorflow/tensorflow`, `huggingface/transformers`
- **Tier 2 (strong)** — merged PR into a popular derivative (`diffusers`, `accelerate`, `peft`)
- **Tier 3 (moderate)** — maintainer of their own ML repo with 100+ stars and active development
- **Tier 4 (contextual)** — frequent contributor to smaller research repos

### Filters I actually use

- **Location filter** — append `location:London`. Note this is self-reported, and in my sourcing runs a significant portion of engineers leave it blank — closer to half than a quarter
- **Followers filter** — `followers:>50` as a proxy for community recognition
- **Language filter** — `language:python` narrows the signal
- **Recency** — `pushed:>{date 6 months ago}` filters out engineers who've moved on

### What to read on a profile

Once you've identified a name, the GitHub profile tells you far more than LinkedIn. Here's what to read, in priority order:

| Signal | What it tells you |
|---|---|
| Contribution graph | Consistency over time. A flat graph with sudden spikes suggests a hobbyist. Steady daily commits mean someone who codes for a living. |
| Pinned repos | What they're proud of. Read the README. Check code quality. A pinned repo with 5k stars and clean documentation is a portfolio piece. |
| Recent activity | Still technical, or transitioned to management? Look at the ratio of commits vs issues/comments. |
| Organisations | Current and past employers are often visible via org membership. Cross-reference with LinkedIn to verify. |
| README profile | A meaningful share of active engineers have a self-authored README. These often include hiring availability, interests, and contact details they don't put on LinkedIn. |

### The API — for scale

Manual browsing is fine for 10 candidates. For 100+, use the GitHub Search API:

```
GET https://api.github.com/search/users
  ?q=language:python+location:London+followers:>50
  &sort=followers
  &per_page=100
```

Rate-limited to 60 requests per hour unauthenticated on the core API, 5,000/hour with a token. The Search API has its own stricter cap: 30 requests per minute authenticated, 10 per minute unauthenticated. For production sourcing, always use an authenticated token.

### Common mistakes to avoid

- **Don't filter by star count on the candidate's own repos.** Most senior engineers contribute to their employer's private repos or upstream libraries. Their own starred count may be low.
- **Don't weight GitHub followers heavily.** Follower count skews toward influencers, tutorial authors, and conference speakers — not necessarily the strongest builders.
- **Don't judge on code quality in a single file.** Legacy repos, experiments, and half-finished side projects are normal. Look at recent work.
- **Don't message via GitHub issues.** Use the email in their profile (if visible) or their website. Unsolicited sourcing messages in issues are frowned on.

<aside class="callout callout-warn">
<span class="callout-label">Worth flagging</span>
Some engineers actively hide their GitHub from recruiters — private email, no location, terse READMEs. This is increasingly common post-2024. If someone's profile looks deliberately sparse, respect it. Try their conference talks, their Hugging Face, or a mutual connection instead.
</aside>

---

## Platform 02 — Hugging Face

### Models as portfolio

Hugging Face is where ML engineers demonstrate they can actually ship. Over 2 million open-source models are hosted there as of late 2025, heading toward 3 million in 2026. A published model with meaningful download counts is evidence someone can take a research idea, train it, and make it usable by others.

### Core search — models by download count

```
huggingface.co/models
  ?sort=downloads
  &direction=-1
  &pipeline_tag=text-generation
```

Available pipeline tags to filter by:

- `text-generation` — LLMs
- `image-classification`, `object-detection` — CV
- `automatic-speech-recognition` — speech
- `text-to-speech`, `text-to-image` — generative
- `sentence-similarity` — embeddings and RAG

### What the model card tells you

The model card (`README.md` on the model page) is a candidate's technical communication sample. Read it the way you'd read a cover letter — but for engineering.

| What's in it | What it means |
|---|---|
| Training data description | Understands data lineage and provenance |
| Evaluation metrics + benchmarks | Rigorous testing discipline |
| Limitations / biases section | Awareness of responsible AI considerations |
| Usage examples with runnable code | Can communicate with end-users of their work |
| Hardware requirements noted | Understands deployment constraints |

### How to read download numbers

- **>1M downloads** — model is a production fixture somewhere. Engineer is either well-known or has solved a common problem better than alternatives.
- **100k–1M** — meaningful adoption. Real users have found this model useful.
- **10k–100k** — solid proof of shipping. Engineer can go end-to-end.
- **<10k** — context-dependent. Could be a specialised model with a small audience, or unfinished work. Read the card.

### Finding the author, not the model

The model page tells you about the model. The author page tells you about the engineer. Navigate to:

```
huggingface.co/{username}
```

What to look at:

- **Model count** — 20+ published models usually means active practitioner, not one-off researcher
- **Dataset count** — engineers who also publish datasets understand the full ML pipeline, not just modelling
- **Spaces** — deployed demos (Hugging Face Spaces) show they can ship a working UI, not just a notebook
- **Organisation membership** — being on `huggingface.co/huggingface`, `huggingface.co/google`, `huggingface.co/meta-llama` etc. is a strong employer signal

### The API — programmatic search

```
GET https://huggingface.co/api/models
  ?sort=downloads
  &direction=-1
  &pipeline_tag=text-generation
  &limit=50
```

Returns JSON with model IDs, authors, download counts, tags. No authentication required for public models. Combine with the author endpoint:

```
GET https://huggingface.co/api/models?author={username}
```

### Hugging Face papers

Often overlooked. `huggingface.co/papers` lists papers the community has linked to models. Authors of highly-upvoted papers with model releases are a strong research-to-production pipeline signal.

<aside class="callout">
<span class="callout-label">Pro tip</span>
Cross-reference a Hugging Face username with their GitHub username. From what I've seen, a strong majority of active ML engineers use the same handle on both. When you find a strong HF profile, run <code>github.com/{same-username}</code> to see their public code output alongside their model output.
</aside>

### Fine-tuning vs from-scratch

Most published HF models are fine-tunes of base models (Llama, Mistral, Gemma). That's not a weakness — it's the modern ML workflow. Look for:

- Clear documentation of what was fine-tuned, on what data, with what loss
- Evaluation against the base model (proves the fine-tune added value)
- Handling of known fine-tuning pitfalls (catastrophic forgetting, alignment drift)

---

## Platform 03 — Kaggle

### The leaderboard doesn't lie

Kaggle is the only platform where ML talent is ranked by performance on real problems, with public leaderboards, against known opponents. Credentials don't matter. Job titles don't matter. Only the model's score matters.

### The tier system

| Tier | Requirement | What it means |
|---|---|---|
| Grandmaster | 5 gold medals (at least 1 solo gold) | Top ~250 worldwide. Exceptional. |
| Master | 1 gold + 2 silver medals | Top ~2,500 worldwide. Very strong. |
| Expert | 2 bronze medals | Solid practitioner. Still a strong signal. |
| Contributor | Active participation | Learning actively. Context-dependent. |

### Search — competitors by tier

```
kaggle.com/rankings
```

Filter by Competitions, Datasets, Notebooks, or Discussion — four separate ranking categories. **Competitions** is the strongest signal for modelling ability. **Notebooks** ranking is the strongest signal for communication and reproducibility.

### Profile signals — what to read

- **Competition history** — which competitions did they win? Check the competition description. Medical imaging, time series forecasting, and NLP are totally different skill sets.
- **Solo vs team** — solo golds are 2-3x harder than team golds. A solo-gold Grandmaster is exceptional.
- **Notebooks published** — read one. Can they explain their reasoning? Do they document trade-offs? This is technical writing quality you'd pay for.
- **Recency** — a Grandmaster who last competed in 2021 may have moved on. A Master still competing monthly is the better signal for hire-readiness.

<aside class="callout">
<span class="callout-label">Specialisation matters</span>
Grandmasters tend to specialise. Someone with 10 medals in tabular competitions won't necessarily be strong at computer vision. Match the competition type to the role you're sourcing. A vision role wants someone who's placed in image classification or segmentation competitions — not LightGBM tabular ones.
</aside>

### Competition quality varies

Not all Kaggle gold medals are equal. Tier the competitions themselves:

| Competition type | Signal strength |
|---|---|
| Featured / Research (host = Google, Meta, MIT) | Strongest. Often novel problems with large prize pools and sponsor technical review. |
| Community (run by Kaggle) | Strong. Standard format with strong competition. |
| Playground | Weak. Synthetic data, educational. Gold medals here shouldn't count much. |
| Getting Started | Ignore. Intended for beginners. |

### When Kaggle is less useful

Senior engineers who've been doing ML for 10+ years often stopped using Kaggle five years ago. It was their training ground, not their current practice. Kaggle is stronger for finding engineers 2–8 years into their career. Above that, GitHub and Hugging Face are more informative.

---

## The crossover technique

The highest-quality candidates usually have presence on **2+ of these platforms**. Look for:

- **Kaggle Master + GitHub contributor to PyTorch** — theoretically strong plus can contribute to core infrastructure
- **Hugging Face model author + Kaggle Notebooks Expert** — can ship plus can communicate
- **GitHub PyTorch maintainer + Hugging Face organisation member** — already part of the ML production workforce

Single-platform signals are still useful. Multi-platform signals are rare and often mean you've found someone exceptional.

### Finding crossovers programmatically

Manually checking each platform is slow. A simple crossover workflow:

1. Pull top 100 Kaggle Masters or Grandmasters in your domain from `kaggle.com/rankings`
2. For each, try their Kaggle handle on `github.com/{handle}` and `huggingface.co/{handle}`
3. Flag anyone with presence on all three with activity in the last six months
4. Deep-dive the 5–15 names that return

---

## Worked example — senior ML engineer, London, £180k

A representative brief:

- **Title** — Senior ML Engineer (LLM specialist)
- **Location** — London / hybrid 2 days a week
- **Salary** — £180k base + equity
- **Must-have** — production LLM experience, fine-tuning at scale, deployment to >1M users
- **Nice-to-have** — paper authorship, open-source contributions, distributed training experience

### Step 1 — GitHub search

```
topic:large-language-models language:python location:London followers:>50 pushed:>2025-10-01
```

Returns roughly 40–80 engineers. Filter to those who've contributed to `huggingface/transformers` or `huggingface/peft` or `huggingface/accelerate` in the last 12 months. Typically leaves 10–15 candidates.

### Step 2 — Hugging Face cross-reference

For each of the 10–15 GitHub names, check `huggingface.co/{username}`. Candidates with 5+ published fine-tuned models — particularly with documented training runs and eval metrics — rise to the top of the shortlist.

### Step 3 — Paper and conference layer

For the top 5–8 names, cross-reference on `arxiv.org` and `scholar.google.com`. Any first-author ML paper since 2023 is a meaningful signal for a senior LLM role.

### Step 4 — Shortlist

After these three filters, you're typically left with **3–6 named candidates**. The shortlist looks nothing like what LinkedIn would return for the same brief. Half won't have "senior ML engineer" in their profile — because that's not how they describe themselves. They describe themselves by what they've shipped.

### What this takes in real time

- **Step 1** (GitHub query and filter) — ~30 minutes
- **Step 2** (HF cross-reference, 15 names) — ~45 minutes
- **Step 3** (papers) — ~30 minutes
- **Total** — ~2 hours to produce a 3–6 person shortlist of verified builders, not keyword-matched LinkedIn profiles. Faster than most LinkedIn sourcing sessions, with a dramatically higher quality bar.

### Common shortlist profile

- 3–8 years experience, often self-taught or career-switched from physics or maths
- GitHub shows 2–3 years of consistent contribution to upstream ML libraries
- Hugging Face: 10–30 published fine-tunes, most with <100k downloads but one breakthrough model with 500k+
- Usually currently employed at a known AI lab, startup, or research org — not actively looking
- Weak LinkedIn profile, strong personal website or GitHub README

---

## The outreach

Messaging a candidate you found on GitHub is fundamentally different from LinkedIn InMail. The rules:

- **Reference specific work.** Not "your impressive profile." Name the exact PR, model, or competition result.
- **Technical credibility first.** Demonstrate you read what they shipped before you understood what you're hiring for.
- **Role detail up front.** Comp, location, stack, team size. GitHub-sourced candidates won't engage with vague "exciting opportunity" language.
- **Respect the channel.** Use the email in their profile, not GitHub issues. If no email, try their personal website, then LinkedIn.
- **Shorter than InMail.** 120–180 words. They already have your LinkedIn in a drawer. You're reaching them because LinkedIn failed.

### Template — GitHub outreach

```
Subject: Your work on {specific repo/PR} — quick question

Hi {name},

I've been reading through your contributions to {specific library/project}.
The {specific technical detail — e.g. "gradient checkpointing fix in PR #2341"}
caught my eye specifically — it's the kind of systems-level work we're
looking for.

I'm working with {company} on a Senior ML role in London. £180k + equity,
hybrid, focused on {specific technical scope}. The team has 6 engineers,
half ex-DeepMind, shipping to {specific production context}.

If you're at all open to a chat, I'd send over the full brief. No pitch,
no pressure — just a 15-min conversation about whether this is the kind
of work that moves for you.

{Your name}
{Your email / LinkedIn link}
```

### What response rates to expect

LinkedIn's own published benchmarks put **recruiting InMail averages at 18–25%**, and **SaaS/software InMail at around 4.77%** — tech candidates respond to InMail at the lowest rate of any vertical.

<div class="stat-row">
<div class="stat"><span class="stat-number">18–25%</span><span class="stat-label">Recruiting InMail avg</span></div>
<div class="stat"><span class="stat-number">4.77%</span><span class="stat-label">SaaS / software avg</span></div>
<div class="stat"><span class="stat-number">2–3×</span><span class="stat-label">Specific vs generic outreach</span></div>
</div>

In my own sourcing runs, **specificity is the variable that moves reply rates most**. A message naming a specific PR, model, or competition result outperforms generic flattery by roughly 2–3x. LinkedIn's own data also shows messages under 400 characters perform 22% better.

<aside class="callout callout-warn">
<span class="callout-label">Don't do this</span>
Don't copy their code or README text into your message. Don't pretend to have read something you haven't. Senior ML engineers spot hollow technical flattery in one sentence, and your reply rate for that candidate drops to zero — permanently. If you can't genuinely speak to their work, don't reach out yet.
</aside>

---

## Stop sourcing for profiles. Source for proof.

LinkedIn rewards self-presentation. GitHub, Hugging Face, and Kaggle reward shipped work. Both systems matter — but for AI engineers specifically, proof-of-work dominates proof-of-claim. Shift your sourcing mix accordingly.

Nothing in this playbook is proprietary. Every query, every filter, every platform is public. The edge isn't the information — it's running this systematically while most recruiters still live on LinkedIn alone.

Start with one query this week. Measure the signal quality against your LinkedIn shortlist for the same brief. The difference speaks for itself.

---

**Brendan Williams** · AI Sourcing Specialist, First2 Group · Manchester
[linkedin.com/in/sourcing-strategist](https://www.linkedin.com/in/sourcing-strategist/)

*Savvy Recruiter — Field Playbook Vol. 01. April 2026.*
