---
title: Proof of Work Sourcing — the manifesto
issue: 1
date: 2026-04-29
pillar: Methodology
dek: Why I find ML engineers through their code and their papers instead of their CVs. And why, after testing eight AI sourcing tools across 28 client briefs, direct technical engagement still wins on senior hires.
---

I've spent the last eighteen months running a test lab.

The question I wanted answered was simple. **Across the 2026 AI recruiting stack — hireEZ, Juicebox, SeekOut, Claude, ChatGPT, Gemini, Perplexity, LinkedIn Hiring Assistant — which tool actually places senior ML engineers?**

The answer is none of them, on their own.

What places senior ML engineers is evidence. Specifically, evidence that you have read their code, understood their paper, or used their model. The tools help you find the candidate. The tools help you draft the outreach. But the thing that converts response-to-interview-to-offer is whether the candidate believes you actually know what they do.

That's Proof of Work Sourcing.

## The numbers

Across 28 client briefs between Q2 2024 and Q1 2026, I tracked two outreach strategies on the same roles:

- **Generic InMail** from a standard sourcing platform, templated with role description and a call-back. Response rate: **10–25%** depending on role seniority.
- **Proof-based outreach** — a personalised message that referenced the candidate's specific GitHub contribution, arXiv paper, or HuggingFace model. Response rate: **30–45%**.

That's a 2x–3x response-rate delta on the same candidates, on the same briefs, in the same week. The difference was not the tool. The difference was whether the message demonstrated recognition.

## Why this works

Senior ML engineers are drowning in outreach. They know what a templated InMail looks like. They've deleted thousands of them. The mental model is simple — **a recruiter who sent a generic message doesn't know who I am. A recruiter who sent a specific message at least read my work.**

That second group is small. In the 2026 sourcing market, it's probably under 5% of outreach. Which means if you write proof-based messages, you're not competing with the 95% noise — you're competing with a tiny set of other recruiters doing the same thing.

That's the arbitrage.

## How I do it

The methodology in short:

1. **Find the candidate via signal, not keyword.** GitHub contributor graphs. arXiv paper co-authors. HuggingFace model pages. Kaggle competition leaderboards. These surface ML engineers who are actually shipping work, not engineers who have updated their LinkedIn.

2. **Read at least one thing they shipped.** Not the whole repo. Not the whole paper. The README. The abstract. The model card. Enough to know what they built and why.

3. **Write the outreach around that one thing.** Two sentences on what caught your attention, one sentence on the role you're hiring for, one sentence on why their work is relevant to the role. Close with a specific question, not a generic "interested in chatting?"

4. **Send from a real account, not a sequencer.** The 2026 LinkedIn algorithm heavily penalises templated outreach at scale. Write each message manually. You'll send fewer. They'll convert more.

## What tools actually help

After testing the full stack, here's the honest verdict:

- **Claude and ChatGPT** — useful for summarising papers when I'm working across a domain I don't know deeply. Not useful for writing the outreach itself; the AI-generated outreach is immediately identifiable.
- **Juicebox** — useful for surfacing candidates whose profiles I'd miss on keyword search. The natural-language query is genuinely better than Boolean for ambiguous searches.
- **hireEZ and SeekOut** — useful for volume, less useful for senior hires. The platform-sourced candidates I've reached tend to overlap with the ones I'd find directly.
- **LinkedIn Hiring Assistant** — actively harmful. The suggested candidates skew toward surface-level keyword matches, and the templated messages it generates will get you filtered by senior candidates immediately.
- **n8n workflows** — the highest-leverage tool in the stack. Not for outreach, but for everything around it. Automated GitHub profile enrichment, arXiv paper alerting, HuggingFace model tracking.

The full breakdown is coming as a playbook next month. This newsletter will cover the weekly updates.

## What to expect here

Every Wednesday at 10am London. Three things:

1. **An automation recipe** — one workflow I've shipped that week, in n8n or Make, copy-paste ready.
2. **A tool review** — something I tested on a live brief, with response rates and honest verdicts.
3. **A contrarian take** — where the recruiting consensus is off, and what the data says instead.

Plus the playbooks as they ship. The Proof of Work Sourcing Playbook is publishing in Q2 2026.

No sales pitches. No lead magnets disguised as content. No paid tier. Ever.

If you find this useful, the one thing that would help is sharing it with one recruiter you know who's still sending generic InMails. That's how this grows.

See you next Wednesday.

---

**Brendan Williams** · AI Sourcing Specialist · Manchester
