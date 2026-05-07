# Savvy Recruiter

Free public website for Brendan Williams — newsletters, playbooks, methodology.
Proof of Work Sourcing for ML and robotics hiring.

**Stack:** Eleventy (static site generator) + Netlify (hosting) + markdown files (content). No backend, no database, no auth. Pure static. Free forever.

---

## Branches

This repo uses two branches:

- **`main`** — what Netlify deploys. Anything merged here is live.
- **`drafts`** — staging. Posts sit here until Wednesday morning.

You write drafts on the `drafts` branch. Every Wednesday at 10am London a GitHub Action merges `drafts` into `main`, which triggers Netlify to deploy. That's it.

You can also publish manually any time — see "Publishing immediately" below.

---

## Publishing a new newsletter (the workflow)

Any day of the week:

1. Go to your GitHub repo on github.com
2. **Switch to the `drafts` branch** using the branch dropdown (top-left of the file list)
3. Click into the `newsletters/` folder
4. Click **"Add file" → "Create new file"**
5. Name it like: `005-title-of-issue.md` (number it, dash-separated slug)
6. Paste this template at the top:

```markdown
---
title: Your headline here
issue: 5
date: 2026-05-27
pillar: Automation
dek: One or two sentence summary shown in archive listings and social cards.
---

Write your newsletter here in markdown.

## Headings work like this

Lists work like this:

- Point one
- Point two

**Bold** and *italic* work. Links like this: [Hung Lee's newsletter](https://recruitingbrainfood.substack.com).

> Pull quotes in blockquotes like this.

---

Sign off with your name, same pattern as issue #1.
```

7. At the bottom, **make sure "Commit directly to the `drafts` branch" is selected** (not main). Click "Commit new file".
8. The post is now staged. It will go live automatically at 10am London on the next Wednesday.

**Pillar values** (used on archive for tagging): `Methodology`, `Automation`, `Tools`, `Contrarian`, `Training`, `Hidden Platforms`, `Proof of Work`.

### Previewing a draft before it ships

If Netlify branch deploys are enabled (Netlify dashboard → Site settings → Build & deploy → Branches), every push to `drafts` builds a preview URL like `drafts--savvyrecruiternewsletter.netlify.app`. Use that to read the post in its rendered form before Wednesday.

If branch deploys aren't on, you can still preview locally — see "Local preview" below.

---

## Publishing immediately (skipping the schedule)

When you want a post live right now and don't want to wait for Wednesday:

**Option A — via GitHub UI:**
1. Go to the **Actions** tab in the repo
2. Click "Scheduled publish" in the left sidebar
3. Click "Run workflow" → "Run workflow" (default branch `main` is fine)
4. The action merges `drafts` into `main` immediately and Netlify deploys

**Option B — via terminal:**
```bash
git checkout main
git pull
git merge origin/drafts --no-ff -m "Manual publish"
git push origin main
```

Either way, anything currently on `drafts` goes live.

---

## How the schedule works

The workflow file lives at `.github/workflows/scheduled-publish.yml`. Two cron entries fire it:

- `0 9 * * 3` — 09:00 UTC Wednesday (10:00 London during BST, March-October)
- `0 10 * * 3` — 10:00 UTC Wednesday (10:00 London during GMT, October-March)

The second run is a no-op if the first already merged, so we don't have to remember to swap the cron at clock changes. If `drafts` has no new commits, the action does nothing and exits cleanly.

GitHub cron is best-effort and can drift 5-15 minutes under peak load. Don't promise readers exactly 10:00 — "Wednesday morning" is the honest framing.

---

## Publishing a new playbook

Same process, different folder: `playbooks/your-playbook-name.md`

```markdown
---
title: The Boolean-to-AI Prompt Transition Guide
date: 2026-06-15
status: Available
readingTime: 25 min
dek: Short description shown on library card.
---

# Introduction

Your playbook content in markdown. Playbooks are long — use H2 headings to break up sections.

## Section 1

...
```

**Status values**: `Available` (shows green badge), `Coming Q2 2026`, `Coming Q3 2026`, etc.

---

## Local preview (optional)

If you want to preview changes before pushing to GitHub:

```bash
npm install
npm run serve
```

Opens at `http://localhost:8080`. Live-reloads on file changes.

If you're not comfortable with terminals, skip this — just edit via GitHub web interface and watch Netlify rebuild.

---

## Deployment setup (one-time, already done)

1. Push this repo to GitHub
2. Connect repo to Netlify at netlify.com
3. Netlify reads `netlify.toml` and builds automatically
4. Each commit → site rebuilds in ~60 seconds
5. Custom domain: Netlify → Domain settings → Add custom domain when ready

---

## Adding email signup later (optional)

When you're ready to build a subscriber list:

1. Sign up for [Beehiiv](https://beehiiv.com) (free to 2,500 subscribers)
2. Create publication
3. Settings → Embeds → copy iframe code
4. Open `_includes/base.njk`
5. Find the `.footer-embed` div (has a placeholder right now)
6. Replace the `<div class="footer-embed-placeholder">...</div>` with your Beehiiv iframe
7. Commit the change

The site stays pure free-resource for readers but captures emails for people who want them in their inbox.

---

## File structure

```
savvy-site/
├── index.njk              ← homepage
├── about.njk              ← about page
├── newsletters/
│   ├── index.njk          ← archive list
│   ├── newsletters.json   ← sets default layout for this folder
│   └── 001-*.md           ← individual newsletters
├── playbooks/
│   ├── index.njk          ← library list
│   ├── playbooks.json     ← sets default layout for this folder
│   └── *.md               ← individual playbooks
├── _includes/
│   ├── base.njk           ← shared layout (nav, footer)
│   ├── newsletter.njk     ← individual newsletter template
│   └── playbook.njk       ← individual playbook template
├── css/
│   └── site.css           ← Signal Intelligence design system
├── .eleventy.js           ← build config
├── netlify.toml           ← Netlify deploy config
└── package.json           ← dependencies
```

---

## If something breaks

Most likely cause: malformed frontmatter (the `---` block at the top of markdown files).

- Every field must be on its own line
- Dates in `YYYY-MM-DD` format
- Quotes around values that contain colons
- Closing `---` must be present

Check the Netlify deploy log if a build fails — it'll tell you which file and what went wrong.

---

**Built April 2026.** Free forever. Always will be.
