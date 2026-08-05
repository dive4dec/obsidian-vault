# Obsidian Vault — Agentic Coding & Hermes Agent

Interconnected Obsidian notes for the Agentic Coding Workshop.

- **2,011 notes** across two vaults
- **Agentic Coding** — 1,231 concept notes, 21 domains (programming, data structures, algorithms, AI, agents...)
- **Hermes Agent** — 780 concept notes, 15 domains (fundamentals, skills, memory, MCP, gateway...)
- Notes are linked with `[[wikilinks]]` and organized by domain

## Read Online (GitHub Pages)

A read-only preview with full-text search, graph view, and tag filtering is available via GitHub Pages:

> **https://dive4dec.github.io/obsidian-vault/**

Features:
- 🔍 **Search** — full-text search across all notes
- 🕸️ **Graph view** — visual map of note connections, filterable by tags
- 🏷️ **Tags** — browse notes by tag
- 🔗 **Wikilinks** — all `[[links]]` are clickable

### Deploy / Update the Site

```bash
# One-time: install Quartz dependencies
make site-init

# Build and preview locally at http://localhost:8080
make site-serve

# Build and deploy to GitHub Pages (gh-pages branch)
make site-deploy
```

After first deploy, enable GitHub Pages:
1. Go to **Repo Settings → Pages**
2. **Source:** Deploy from branch
3. **Branch:** `gh-pages` / `(root)`
4. Save

## Read/Write Locally with Obsidian

### 1. Clone the vault

```bash
git clone git@github.com:dive4dec/obsidian-vault.git
cd obsidian-vault
```

### 2. Open in Obsidian

1. Install [Obsidian](https://obsidian.md/) (free)
2. Open Obsidian → **Open folder as vault**
3. Select the `obsidian-vault/` directory

The `.obsidian/` config (core plugins enabled) is included. Your personal state
(`workspace.json`, `graph.json`) is gitignored — no conflicts with other users.

### 3. Pull updates

```bash
git pull
```

Obsidian auto-reloads notes on file changes. If you have unsaved edits, Obsidian
may prompt to reload — click "Reload" to pick up the latest notes.

### 4. Write notes

Create new `.md` files anywhere in the vault. Use frontmatter for tags:

```markdown
---
tags: [Your-Tag]
---

# Your Note Title

Link to other notes with [[wikilinks]].
```

## Pull to JupyterHub (nbgitpuller)

Open [`nbgitpuller.html`](nbgitpuller.html) in a browser to generate a link that
pulls this vault into a JupyterHub server. Fill in your hub URL and click the
generated link — nbgitpuller clones the vault to `~/obsidian-vault/` on the server.

## Repository Structure

```
obsidian-vault/
├── Agentic Coding/          # 1,231 notes, 21 domains
├── Hermes Agent/            # 780 notes, 15 domains
├── .obsidian/               # Shared Obsidian config (plugins, settings)
├── .site/                   # Quartz static site generator (GitHub Pages)
├── Makefile                 # site-init, site-build, site-serve, site-deploy
├── nbgitpuller.html         # Generate nbgitpuller links for JupyterHub
└── .gitignore
```

## License

MIT
