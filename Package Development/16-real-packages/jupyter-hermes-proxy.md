---
tags: [Real-Packages]
domain: Real Packages
---

# jupyter-hermes-proxy

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyter-hermes-proxy` is a Jupyter server proxy that exposes the Hermes Agent dashboard inside JupyterLab. Students access Hermes controls without leaving the Jupyter interface — the proxy handles authentication and routing.

## 📋 Concrete Example

Install with `pip install jupyter-hermes-proxy`. The package depends on `jupyter-server-proxy>=4.0`, which registers a proxy endpoint. Students navigate to `/hermes/` in JupyterLab to see the Hermes dashboard.

## 🔗 Analogy

Like a hotel concierge desk inside your room — instead of going to the lobby (separate Hermes dashboard), the concierge (proxy) comes to you via the room's phone (JupyterLab URL).

## 📦 Links

- **GitHub:** https://github.com/dive4dec/jupyter-hermes-proxy
- **PyPI:** https://pypi.org/project/jupyter-hermes-proxy/
- **Install:** `pip install jupyter-hermes-proxy`

## Related Concepts

- [[jupyter-server-proxy|jupyter-server-proxy]]
- [[server-extension|Server Extension]]
- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[jupyterlab-extension|JupyterLab Extension]]
- [[jupyterlab-frontend|JupyterLab Frontend]]
