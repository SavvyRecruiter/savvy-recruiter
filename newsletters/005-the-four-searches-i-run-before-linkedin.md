---
title: The four searches I run before I open LinkedIn
issue: 5
date: 2026-05-27
pillar: Hidden Platforms
dek: When the brief is for a senior ML engineer, LinkedIn is the last place I look — not the first. Four specific searches across GitHub, arXiv, and HuggingFace get me a stronger longlist in less time. Here they are, copy-pasteable.
---

The brief lands on Tuesday. Senior ML engineer, transformer fine-tuning experience, willing to talk to a Series B. By Friday the client wants ten profiles. Most recruiters working that brief open LinkedIn Recruiter, type "machine learning engineer" and a location filter, and start scrolling.

I do four searches first. None of them are on LinkedIn. By the time I open Recruiter, I already have my longlist — I'm using LinkedIn to find contact details for people I've already identified, not to discover people in the first place.

This is what those four searches actually look like. Copy-paste them, swap the parameters for your brief, and you'll be doing this faster than the next person on the desk by the end of the week.

## Search 1 — GitHub: contributors to the libraries the role uses

The trick most people miss on GitHub is that you don't search for *people*. You search for *projects*, then look at the contributor list.

If the brief says "transformer fine-tuning," the relevant project is `huggingface/trl`. If it says "diffusion models for video," it's `huggingface/diffusers`. If it says "LLM agents," it's `huggingface/smolagents` or `langchain-ai/langchain`. You're not guessing what library a candidate uses — you're going to the library and asking who's been merging code into it.

Step by step:

1. Go to the repo on github.com
2. Click the **Insights** tab
3. Click **Contributors** in the left sidebar
4. You get a ranked list of contributors by commits

The top 50 names are almost always currently-employed senior ML engineers. The middle of the list — contributors with 5 to 30 merged PRs over the last year — is the gold zone. They're technical enough to have made it through code review on a major library, not so famous that every recruiter on the planet has already messaged them this month.

Click into a profile. The bio usually names their employer. The pinned repositories show what they actually care about. The contribution graph tells you whether they're actively coding or whether they've gone managerial. Three signals from one page, no resume needed.

If the role is in a specific geography, run this in the GitHub search bar instead:

```
location:"London" language:Python topic:machine-learning followers:>50
```

Then in the results, click **Users**. You're looking at developers who've self-tagged London, write Python, work in ML, and have enough peer recognition to clear 50 followers. The results aren't ranked by relevance — you're going to evaluate them by hand — but the longlist is already 80% on-target before you open a single profile.

## Search 2 — arXiv: who's published in the last 18 months

If the role wants research-adjacent ML — anyone who'd describe themselves as an ML researcher, ML scientist, or research engineer — arXiv is the master list. Every paper has authors. Every author has a name and usually an institutional affiliation. The papers tell you exactly what they work on.

The trick is searching by topic *and* by recency. Anyone who published a relevant paper in 2019 may have moved on. Anyone who published one in the last 18 months is currently working in that area.

Go to arxiv.org/search/advanced. Set:

- **Subject:** Computer Science → Machine Learning (cs.LG) for general ML, or cs.CL for NLP, or cs.CV for computer vision, or cs.RO for robotics
- **Date range:** last 18 months
- **Search term:** the specific technique from the brief — "RLHF," "constitutional AI," "diffusion video," "MoE routing," whatever the role is actually about

You get a list of papers. Click into one. The author list is your shortlist. The first author is usually a PhD student or junior researcher; the last author is usually the supervisor or principal scientist. Middle authors are the working hands — often the most placeable, often the most overlooked.

The author's institutional affiliation is on the paper itself. Their email is on the paper. Their personal homepage is usually one click away. None of this requires LinkedIn.

A trick worth knowing: HuggingFace has integrated with arXiv. Go to huggingface.co/papers, find a paper relevant to your role, and you'll see a "Models" and "Datasets" section beneath it linking to that author's actual artifacts. You're now looking at code they've written, not just claims they've made.

## Search 3 — HuggingFace: model uploaders, not just model users

Most recruiters who've heard of HuggingFace think of it as a place to download models. The sourcing angle is the inverse — it's a place where people upload models. Every model card has an author. Every author has a profile. Every profile has a list of every other model and dataset they've published.

The hardcore signal as of 2026 is the **Kernels** repo type. HuggingFace launched it specifically for engineers who write low-level optimised CUDA, ROCm, and Apple Silicon code — the people you'd hire as ML systems or ML infrastructure engineers. The list is short. Almost everyone publishing kernels is senior, employed, and identifiable. If your brief is for an ML systems engineer, this is the most concentrated talent pool I've found anywhere.

For more general ML, go to a major model — say `mistralai/Mistral-7B-v0.1` — and look at:

- **Authors** — the team that uploaded it
- **Community tab** — engineers who've finetuned it and uploaded their version
- **Spaces** — engineers who've built demos on top of it

The community tab is the underrated one. Someone who's taken a base model, fine-tuned it on a domain-specific dataset, and shipped the artifact has demonstrated three things: they can do the work, they choose to do it in public, and they ship. That's a stronger signal than three years of "ML Engineer" on a CV.

Filter by activity recency. A profile with their last upload in 2024 is probably out of the field or has gone closed-source at a big lab. A profile uploading models in the last six months is in the work, right now.

## Search 4 — Google site-search: the long tail of personal websites

This is the one that beats every paid sourcing tool, and it costs nothing.

Most senior ML engineers have a personal website. It's how they get hired. The website lists their papers, their projects, their employment history, and usually a contact email — all the things LinkedIn rate-limits or paywalls. The trick is finding them.

Run this in Google:

```
"machine learning engineer" site:github.io "London"
```

GitHub Pages hosts a huge proportion of researcher and engineer personal websites. The `site:github.io` filter narrows to that universe. Add a location, add a technique, and you're looking at hand-built professional homepages of people who care enough about their work to publish it themselves.

Variants:

```
"transformer" "PhD" site:github.io
"research scientist" "diffusion" -site:linkedin.com -site:medium.com
```

The negative filters at the end push out aggregator sites and surface the original homepages. I run two or three variants per brief. They take a minute each.

## Why this order

I run these four before LinkedIn for a specific reason. LinkedIn is optimised for the recruiter market — it shows you the candidates who have already declared themselves available, who tolerate InMails, who let recruiters see them. The senior ML engineers I want to place are usually not in that pool. They're employed, they're not actively looking, and they've turned off the LinkedIn signals that make them visible.

But they are visible somewhere. They're visible on GitHub because shipping code is part of their professional identity. They're visible on arXiv because publication is how they get promoted. They're visible on HuggingFace because the field's social currency runs on uploaded artifacts. They're visible on their personal site because that's where their next employer finds them.

By the time I open LinkedIn for these candidates, I'm not searching — I'm looking up the contact details of someone I've already identified. The question shifts from "who should I message" to "how do I reach this specific person." That's a much easier problem.

## The shape of the longlist

A senior ML brief, run this way, takes me about three hours of search and produces 40 to 60 names. Of those, 25 to 35 are hot — currently employed, currently shipping, currently identifiable by name and institution. From there, the outreach work begins, and that's where Proof of Work messaging comes in: messaging someone whose specific paper, model, or commit you've actually read.

I'll cover the outreach side in a future issue. For this week, the point is just that the pipeline starts before LinkedIn — and the pipeline that starts before LinkedIn produces a stronger longlist than the one that starts on it.

## The question

What's a sourcing channel you've found that doesn't show up on the standard list — Stack Overflow, Kaggle, a niche conference proceedings site, anywhere? Reply and tell me. I'm collecting them for a "Hidden Platforms playbook" and the best ones go in with attribution.

Next Wednesday: the Juicebox vs SeekOut head-to-head. (Yes, again. It's been promised twice. The data is from CRM and is taking longer to clean than expected. It's coming.)

---

**Brendan Williams** · AI Sourcing Specialist · Manchester
[linkedin.com/in/sourcing-strategist](https://www.linkedin.com/in/sourcing-strategist/)
