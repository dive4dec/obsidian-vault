---
tags: [Real-Packages]
domain: Real Packages
---

# Entry Points Pattern

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

Entry points are Python's plugin discovery mechanism. Multiple packages in this ecosystem use them: `jupyter_ai.personas` (Hermes persona), `IPython.core.magic_actions` (cell magic), `jupyterhub.hub` (hub handler), and `console_scripts` (CLI tools). This pattern lets packages extend each other without importing each other.

## 📋 Concrete Example

```toml
[project.entry-points."jupyter_ai.personas"]
hermes = "jupyter_ai_hermes.persona:HermesPersona"
```

When Jupyter AI starts, it calls `importlib.metadata.entry_points(group="jupyter_ai.personas")` to find all installed personas — including Hermes.

## 🔗 Analogy

Like a bulletin board in a building — each tenant (package) pins their business card (entry point) on the board. Visitors (host applications) read the board to find who is available, without knocking on every door (importing every package).

## Related Concepts

- [[entry-points|Entry Points]]
- [[console-scripts|Console Scripts]]
- [[jupyter-ai-persona-manager|jupyter-ai-persona-manager]]
- [[ipython-magic-registration|IPython Magic Registration]]
- [[plugin-architecture|Plugin Architecture]]
- [[registry-pattern|Registry Pattern]]
