---
tags: [Real-Packages]
domain: Real Packages
---

# Hermes Agent Connection

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

The packages in this domain all connect to the Hermes Agent ecosystem. Understanding how they fit together helps students see the full picture: Hermes is the brain, Jupyter is the interface, and these packages are the bridges between them.

## 📋 Concrete Example

The dependency chain: `jupyterhub-litellm` provides API keys → `jupyter-ai-hermes` uses keys to talk to Hermes via ACP → `hermes-acp-sdk` implements the ACP protocol → `jupyter-ai-hermes-magics` gives students the `%%hermes` shortcut → `jupyter-hermes-proxy` shows the Hermes dashboard in JupyterLab.

## 🔗 Analogy

Like a school's communication system — the admin office (LiteLLM) manages credentials, the intercom (ACP SDK) defines the protocol, the classroom phone (jupyter-ai-hermes) connects to the system, the speed-dial button (magics) makes it one-click, and the display screen (proxy) shows what is happening.

## Related Concepts

- [[hermes-acp-sdk|hermes-acp-sdk]]
- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[jupyter-ai-hermes-magics|jupyter-ai-hermes-magics]]
- [[jupyter-hermes-proxy|jupyter-hermes-proxy]]
- [[jupyterhub-litellm|jupyterhub-litellm]]
- [[mcp-bridge|MCP Bridge]]
