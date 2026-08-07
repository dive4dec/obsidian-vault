---
tags: [Real-Packages]
domain: Real Packages
---

# jupyterhub-litellm

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyterhub-litellm` manages LiteLLM API keys for JupyterHub users. It acts as a hub-level handler that provisions and rotates API keys, so students never see raw keys — they just use `%%hermes` and it works.

## 📋 Concrete Example

Registered via the `jupyterhub.hub` entry point. The handler intercepts requests to LiteLLM proxy, injects the correct API key per user, and logs usage. Depends on `aiohttp`, `pyyaml`, `jupyterhub`, and `tornado`.

## 🔗 Analogy

Like a school ID card system — each student has one card (API key handler), and it works at the library, cafeteria, and gym (different AI providers). The student does not need to carry cash (raw API keys) for each service.

## Related Concepts

- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[jupyter-ai-hermes-magics|jupyter-ai-hermes-magics]]
- [[entry-points-pattern|Entry Points Pattern]]
- [[server-extension|Server Extension]]
- [[authentication-patterns|Authentication Patterns]]
- [[secrets-in-code|Secrets in Code]]
