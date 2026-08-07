---
tags: [Real-Packages]
domain: Real Packages
---

# jupyter-ai-persona-manager

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyter-ai-persona-manager` is the framework that Jupyter AI uses to discover and load AI personas. `jupyter-ai-hermes` registers itself as a persona via entry points, and the persona manager loads it when a student selects Hermes in the JupyterLab AI panel.

## 📋 Concrete Example

In `pyproject.toml`: `[project.entry-points."jupyter_ai.personas"]` maps `hermes = "jupyter_ai_hermes.persona:HermesPersona"`. When Jupyter AI starts, it scans all installed persona entry points and lists them in the UI.

## 🔗 Analogy

Like a talent agency for AI assistants — the agency (persona manager) keeps a roster of performers (personas). When a show needs a specific act (student selects Hermes), the agency books the right performer automatically.

## Related Concepts

- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[entry-points-pattern|Entry Points Pattern]]
- [[entry-points|Entry Points]]
- [[plugin-architecture|Plugin Architecture]]
- [[registry-pattern|Registry Pattern]]
