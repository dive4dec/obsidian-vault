---
tags: [Real-Packages]
domain: Real Packages
---

# Submodule Management

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

The dive-deploy repository uses git submodules to manage multiple related packages (`jupyter-ai-hermes`, `jupyter-ai-hermes-magics`, `jupyter-hermes-proxy`, `cppmanlite`, etc.). Submodules let you keep each package in its own repo while developing them together in a monorepo-like structure.

## 📋 Concrete Example

```bash
git submodule add https://github.com/dive4dec/jupyter-ai-hermes.git
git submodule add https://github.com/dive4dec/cppmanlite.git
```

Clone with submodules: `git clone --recurse-submodules repo_url`. Update all: `git submodule update --remote`.

## 🔗 Analogy

Like a strip mall — each shop (submodule/package) is independently owned and managed (separate git repo), but they share the same lot (parent repo) so customers (developers) can visit all of them in one trip.

## Related Concepts

- [[submodule|Git Submodule]]
- [[monorepo|Monorepo]]
- [[git|Git]]
- [[github|GitHub]]
- [[clone|Clone]]
- [[remote|Remote]]
