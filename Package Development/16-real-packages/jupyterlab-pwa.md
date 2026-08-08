---
tags: [Real-Packages]
domain: Real Packages
---

# jupyterlab-pwa

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyterlab-pwa` adds Progressive Web App support to JupyterLab — students can install JupyterLab on their phone or tablet home screen, work offline, and get push notifications. Built with `hatchling`, depends on `jupyter-server>=2.0` and `jupyterlab>=4.0`.

## 📋 Concrete Example

Install with `pip install jupyterlab-pwa`. The package registers shared data (JSON config) via hatch's `shared-data` target. JupyterLab then serves a `manifest.json` and service worker, making it installable as a PWA.

## 🔗 Analogy

Like turning a website into a native app — instead of opening Chrome and typing a URL every time, you tap an icon on your home screen and it opens full-screen, works offline, and feels like a real app.

## 📦 Links

- **GitHub:** https://github.com/dive4dec/jupyterlab-pwa
- **PyPI:** https://pypi.org/project/jupyterlab-pwa/
- **Install:** `pip install jupyterlab-pwa`

## Related Concepts

- [[jupyterlab-extension|JupyterLab Extension]]
- [[jupyterlab-frontend|JupyterLab Frontend]]
- [[server-extension|Server Extension]]
- [[hatch|hatch]]
- [[entry-points-pattern|Entry Points Pattern]]
- [[jupyter-hermes-proxy|jupyter-hermes-proxy]]
