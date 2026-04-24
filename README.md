# Savvy Recruiter

Free public website for Brendan Williams — newsletters, playbooks, methodology.
Proof of Work Sourcing for ML and robotics hiring.

**Stack:** Eleventy (static site generator) + Netlify (hosting) + markdown files (content). No backend, no database, no auth. Pure static. Free forever.

---

## Publishing a new newsletter (the workflow)

Every Wednesday:

1. Go to your GitHub repo on github.com
2. Click into the `newsletters/` folder
3. Click **"Add file" → "Create new file"**
4. Name it like: `002-title-of-issue.md` (number it, dash-separated slug)
5. Paste this template at the top:

```markdown
---
title: Your headline here
issue: 2
date: 2026-05-06
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

6. Click **"Commit new file"** at the bottom
7. Netlify auto-rebuilds. Site updates in ~60 seconds.
8. Post the link on LinkedIn.

**Pillar values** (used on archive for tagging): `Methodology`, `Automation`, `Tools`, `Contrarian`, `Training`, `Hidden Platforms`, `Proof of Work`.

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
