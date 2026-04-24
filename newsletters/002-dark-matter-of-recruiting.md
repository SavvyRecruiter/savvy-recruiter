---
title: The dark matter of recruiting
issue: 2
date: 2026-05-06
pillar: Research
dek: Why the 180 million developers on GitHub are a bigger pool than any sourcing tool will show you — and how to find the ones your competitors can't.
---

Last month I ran the same brief through two sourcing methods in the same week.

**LinkedIn Recruiter**, with a reasonable query — *machine learning engineer, London, 5+ years, PyTorch* — returned 34 profiles. Every single one had been contacted by another recruiter within the previous 30 days.

**GitHub Search API**, with an equivalent query on language, location, and commit recency, returned 47 profiles. Twenty-three of them had no LinkedIn presence at all.

Same city. Same role. Overlapping skill sets. Two almost entirely different candidate pools.

That's what this issue is about.

## The term that explains it

Glen Cathey — the sourcer most UK recruiters know as Boolean Black Belt — has been using a specific term for this since at least 2012: **dark matter**.

The idea is borrowed from astrophysics. Dark matter is the mass astronomers know must exist because of how galaxies rotate, but which can't be directly observed. In Cathey's 2012 SlideShare deck on talent sourcing, he estimated that *dark matter candidates* — people who exist in a source but can't be found through the standard searches everyone runs — make up **at least 50% of each source searched**.

That was 2012. The estimate has aged well.

Fourteen years later the problem has sharpened, because the places where technical candidates now leave evidence of their work have multiplied. LinkedIn wasn't the only game in town in 2012. It's even less so now.

## What the numbers actually say

Three verifiable data points frame the size of the gap.

<div class="stat-row">
<div class="stat"><span class="stat-number">180M+</span><span class="stat-label">Developers on GitHub (2026)</span></div>
<div class="stat"><span class="stat-number">2M+</span><span class="stat-label">Public models on HuggingFace</span></div>
<div class="stat"><span class="stat-number">23.29M</span><span class="stat-label">Kaggle accounts globally</span></div>
</div>

GitHub's own [About page](https://github.com/about) as of 2026 reports **180 million developers** — up from the widely-cited 100 million figure at the start of 2023. That's 80 million engineers added to the platform in three years.

HuggingFace hosts **over 2 million public models** as of early 2026, per their own *State of Open Source* report. The repository doubled in the 335 days between reaching 1M and 2M models — faster than most sourcing platforms can index.

And Kaggle, per Wikipedia's cited figures as of April 2025, has **23.29 million accounts**. Of those, exactly **2,973 have achieved Master status** and **612 have achieved Grandmaster status**. That's 0.015% of the user base — a tier you can verify by performance, not self-description.

Three pools. Zero of them searchable through LinkedIn Recruiter.

## The specific search that proved it

The 34-vs-47 comparison at the top of this email wasn't a clever headline — it was the actual output of a 45-minute test I ran on a senior ML engineer brief two weeks ago.

The LinkedIn search was standard — title, location, years of experience, key skill, recent activity filter. 34 results, all within the first 100 rows of relevance.

The GitHub search was also standard — but run through a different surface:

```
https://github.com/search?q=location:London+language:Python+pushed:>2025-10-01&type=users
```

Followers above 50. Active in the last 6 months. Python as primary language. London location (self-reported, imperfect, still useful).

47 profiles. On cross-checking against LinkedIn:

- **14 had LinkedIn profiles** that would have appeared in a sufficiently broad Recruiter search
- **10 had LinkedIn profiles** but weren't appearing in the specific search I ran (different job title phrasing, different listed skills, dark matter in Cathey's original sense)
- **23 had no LinkedIn presence I could find at all**

That last group — 23 of 47, or **49%** — is the real point. Half the available pool for this specific brief, in this specific city, was invisible to anyone sourcing only on LinkedIn.

## Why this gap exists now

A generation of technical candidates has made a deliberate choice. Their LinkedIn profile is a low-effort placeholder, or doesn't exist. Their real portfolio is elsewhere — a GitHub contribution graph, a HuggingFace model page, a Kaggle ranking, an arXiv citation.

Three forces compound this:

- **Recruiter spam.** Senior engineers get approached by five recruiters a week on LinkedIn. The rational response is to stop updating the profile that attracts the spam.
- **Proof-of-work culture.** In ML and infrastructure engineering specifically, shipping is the portfolio. A merged PR into `huggingface/transformers` carries more weight than a job title on LinkedIn.
- **Private-by-default.** Many engineers hide their GitHub location, leave the README blank, use a handle that doesn't match their real name. Post-2024 this is increasingly common, and not accidental.

None of this means the candidates don't exist. It means they're dark matter.

## Three sourcing shifts to try this week

If you've read Issue #1, some of this will sound familiar. The difference is scale — below are three concrete moves, not a methodology.

**1. Run one GitHub query against a live brief.** Pick one role you're sourcing for right now. Use the search pattern above — location, language, recent activity, follower floor — and count how many results overlap with your LinkedIn shortlist for the same role. Whatever the delta is, that's your dark matter for that brief.

**2. Check HuggingFace for your ML briefs.** For any AI/ML role, navigate to `huggingface.co/models?pipeline_tag=text-generation&sort=downloads` and scan the model authors. Engineers who have published 5+ fine-tunes with meaningful download counts are, by definition, shipping. Cross-reference their HF handle with GitHub — roughly the same person uses the same handle on both.

**3. Use Kaggle for ranked signals.** For data science briefs specifically, `kaggle.com/rankings` is the cleanest ranked leaderboard in recruiting. A Master or Grandmaster tier is verified performance, not self-claimed skill. Filter by competition type to match the brief — image classification for vision roles, tabular for traditional ML.

## The question

I'd like to know what you're seeing in your own briefs. Specifically:

> **Has LinkedIn still been your strongest source in the last 90 days, or has another platform overtaken it for at least one role type?**

Reply and tell me. I'll include the pattern in a future issue (anonymised if you prefer).

Next Wednesday: a head-to-head of Juicebox vs SeekOut on an identical ML research scientist brief, with response-rate data.

---

**Brendan Williams** · AI Sourcing Specialist · Manchester
[linkedin.com/in/sourcing-strategist](https://www.linkedin.com/in/sourcing-strategist/)
