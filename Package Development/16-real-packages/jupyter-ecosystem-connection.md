---
tags: [Real-Packages]
domain: Real Packages
---

# Jupyter Ecosystem Connection

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

These packages extend Jupyter in different ways: personas (AI), magics (cell commands), proxies (dashboard access), extensions (UI), and tutors (visualization). Understanding the extension points helps students design their own Jupyter integrations.

## 📋 Concrete Example

Extension points used: `jupyter_ai.personas` (Hermes persona), `IPython.core.magic_actions` (cell magic), `jupyterhub.hub` (hub handler), `jupyter_server_proxy` (proxy config), and `jupyterlab.shared-data` (PWA manifest). Each is a different way to plug into Jupyter.

## 🔗 Analogy

Like a multi-purpose building with different rental spaces — the ground floor (server extension), the kiosks (magics), the offices (personas), the billboard (proxy), and the directory (shared-data). Each tenant uses a different interface to the same building.

## Related Concepts

- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[jupyter-ai-hermes-magics|jupyter-ai-hermes-magics]]
- [[jupyter-hermes-proxy|jupyter-hermes-proxy]]
- [[jupyterlab-pwa|jupyterlab-pwa]]
- [[jupyter-cpp-tutor|jupyter-cpp-tutor]]
- [[entry-points-pattern|Entry Points Pattern]]
- [[jupyterlab-extension|JupyterLab Extension]]
- [[server-extension|Server Extension]]
