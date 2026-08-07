---
tags: [Real-Packages]
domain: Real Packages
---

# IPython Magic Registration

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

IPython lets packages register custom magic commands via entry points. `jupyter-ai-hermes-magics` uses `IPython.core.magic_actions` to register `%%hermes` so it is available in every notebook automatically — no `load_ext` needed.

## 📋 Concrete Example

In `pyproject.toml`: `[project.entry-points."IPython.core.magic_actions"]` maps `hermes = "jupyter_ai_hermes_magics.magic:HermesMagics"`. IPython discovers this at startup and registers the magic.

## 🔗 Analogy

Like a browser extension store — you install an extension once (pip install), and every time you open the browser (Jupyter), the extension button is already there in the toolbar (magic command available).

## Related Concepts

- [[jupyter-ai-hermes-magics|jupyter-ai-hermes-magics]]
- [[jupyter-magic|Jupyter Magic]]
- [[entry-points-pattern|Entry Points Pattern]]
- [[entry-points|Entry Points]]
- [[register-magic|Register Magic]]
