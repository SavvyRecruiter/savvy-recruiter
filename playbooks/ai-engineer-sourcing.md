---
title: The AI Engineer Sourcing Playbook
date: 2026-04-24
status: Coming Q3 2026
readingTime: 40 min
dek: Sourcing ML research scientists and AI engineers through arXiv papers, HuggingFace model cards, GitHub contributor graphs, and conference speaker lists. The specific signals, triage methods, and outreach patterns that land interviews with candidates who don't read InMail.
---

*This playbook is in development. Publishing Q3 2026.*

Senior AI engineers and ML research scientists are the hardest cohort in recruiting. They don't read InMail. They don't update their LinkedIn profiles. They don't apply to jobs posted on LinkedIn. They're employed — usually by a FAANG, a well-funded AI lab, or a stealth startup. And they're getting approached by five recruiters a week, all writing the same templated message.

This playbook is how I found ~270 of them at Cubiq, and how I currently place them at First2 Group. It's not about tools. It's about signal.

## What will be in it

### Section 1 — The sourcing surfaces that actually work

The seven platforms where AI engineers leave evidence of their work, ranked by conversion rate:

- **arXiv.org** — the single highest-signal surface for ML research scientists. How to read author affiliations, track paper co-author graphs, identify early-career researchers before they're on LinkedIn, and use Semantic Scholar for citation-based triage
- **HuggingFace** — model pages, dataset contributors, space authors. How to read download counts as capability signal. The difference between fine-tuners and foundation model builders
- **GitHub** — contributor graphs for specific ML repos (transformers, PyTorch, JAX, vLLM, LangChain). How to distinguish drive-by PR authors from core maintainers
- **Kaggle** — grandmaster status, competition placements, and what solo-vs-team results tell you about capability
- **OpenReview** — NeurIPS, ICML, ICLR reviewer profiles. The strongest signal of senior research credibility
- **Google Scholar** — h-index is a lagging metric but useful for filtering. How to use it alongside recent paper counts
- **Twitter/X** — controversial, but the AI Twitter community is real. How to identify engineers via who they reply to and what they share

The ranked order surprises most recruiters. LinkedIn doesn't make the list.

### Section 2 — Triage in 90 seconds per candidate

You don't have time to audit every paper or read every repo. Five patterns for extracting capability signal fast:

- The arXiv-first-paper technique for early-career researchers
- How to read a HuggingFace model card and know if the person knows what they're doing
- GitHub commit cadence as a capability signal
- The conference co-author graph — why one ICML paper with a well-known lab is worth more than five workshop papers
- When to spend 30 minutes instead of 90 seconds

### Section 3 — Outreach that ML researchers actually respond to

The specific patterns that got me 35-45% response rates on PhD-level candidates:

- Why the four-sentence template that works for ML engineers fails for research scientists
- Reference-specific outreach — the single line that proves you read their paper
- The question-first open — asking something they'd want to answer, not telling them about a role
- Timing — why Tuesday 10am PT outperforms Monday morning for researchers
- The follow-up cadence that doesn't read as desperate
- The "rejection-reframe" — turning a no into a referral in one follow-up

### Section 4 — The brief-to-source translation

Where most recruiters fail on AI/ML roles. Hiring managers write vague briefs ("senior ML engineer, PyTorch, LLM experience"). Candidates are specific ("I worked on retrieval for 6 months, not generation"). Bridging that gap:

- The intake questions that force the hiring manager to be specific
- How to translate a stack requirement into a paper/repo/conference it would appear in
- When "LLM experience" means GenAI application work vs foundation model training — and why confusing them wastes everyone's time
- The red-flag briefs you should push back on before sourcing starts

### Section 5 — The scripts

12 real outreach messages from real briefs, sanitised to remove candidate details, with response rates. Organised by:

- **MLE roles** (production ML, serving, infrastructure)
- **Research Scientist roles** (PhD, publishing, conference track)
- **ML Platform roles** (MLOps, training infra, observability)
- **GenAI Application roles** (RAG, agents, product ML)
- **Research Engineer roles** (the hybrid — shipping code, reading papers)

Plus the five follow-up templates I use, and how they differ by role type.

### Section 6 — The 2026 AI tool stack for sourcing AI engineers

Honest verdicts on the tools that help specifically for AI/ML sourcing:

- **Juicebox / PeopleGPT** — when natural language search actually beats arXiv direct
- **SeekOut** — the paper-search layer and where it falls short
- **GitHub's search API** — worth learning, underused
- **Semantic Scholar API** — free, underrated, ideal for citation-based sourcing
- **Perplexity** — for researching unfamiliar research areas fast
- **n8n workflows** — the three specific recipes I use for AI engineer sourcing (arXiv alerting, HuggingFace tracking, paper co-author mapping)

The full n8n workflow JSON will ship with the playbook.

## Who this is for

- Agency recruiters working on AI/ML briefs who can't tell a Research Scientist from an MLE
- In-house TA leaders at AI startups building their first ML function
- Recruiting leaders trying to understand why their current sourcing process fails on senior AI roles
- Anyone who's been told "we need someone like [name]" and doesn't know where to start

It's not for:

- Recruiters sourcing generalist software engineers
- People looking for high-volume, low-touch sourcing playbooks
- Anyone who thinks "AI engineer" means one thing

## Why it's taking this long

Every technique in here has been tested on live briefs. The response-rate numbers come from CRM data across 60+ AI/ML engagements at Cubiq and First2 Group. The playbook will ship when I'm confident a recruiter reading it can hit 30%+ response rates on senior AI candidates in their first week using it.

If you want the research as it develops, subscribe to the [Wednesday briefing](/newsletters/) — every new finding goes in there first. The AI tool stack review in Section 6 will largely appear as weekly newsletters between now and Q3 2026.

---

**Brendan Williams** · AI Sourcing Specialist, First2 Group · Manchester
