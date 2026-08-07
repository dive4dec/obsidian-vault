---
tags: [Real-Packages]
domain: Real Packages
---

# jupyter-ai-hermes

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyter-ai-hermes` is a persona plugin for Jupyter AI that connects Jupyter notebooks to the Hermes Agent. It lets students chat with Hermes directly in JupyterLab, with full notebook context awareness via an MCP bridge.

## 📋 Concrete Example

Install with `pip install jupyter-ai-hermes`, then in JupyterLab select the Hermes persona from the AI panel. The package registers itself via the `jupyter_ai.personas` entry point, so Jupyter AI discovers it automatically.

## 🔗 Analogy

Like adding a new language translator to a translation app — the app (Jupyter AI) already knows how to handle requests, you just plug in a new expert (Hermes) who speaks a specific language (ACP protocol).

## Related Concepts

- [[jupyter-ai-hermes-magics|jupyter-ai-hermes-magics]]
- [[hermes-acp-sdk|hermes-acp-sdk]]
- [[jupyter-ai-persona-manager|jupyter-ai-persona-manager]]
- [[mcp-bridge|MCP Bridge]]
- [[entry-points-pattern|Entry Points Pattern]]
- [[jupyterlab-extension|JupyterLab Extension]]
