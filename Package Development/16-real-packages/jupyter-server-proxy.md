---
tags: [Real-Packages]
domain: Real Packages
---

# jupyter-server-proxy

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyter-server-proxy` is the upstream package that `jupyter-hermes-proxy` depends on. It lets JupyterServer proxy arbitrary web services, making them available under the JupyterLab URL namespace. This is how the Hermes dashboard appears inside JupyterLab.

## 📋 Concrete Example

`jupyter-server-proxy>=4.0` provides the `ServerProxy` handler. `jupyter-hermes-proxy` registers a proxy configuration pointing to the Hermes dashboard port. Students access it at `/hermes/` within JupyterLab.

## 🔗 Analogy

Like a USB hub for web services — you plug multiple devices (Hermes dashboard, code tutors, etc.) into one hub (JupyterServer), and they all appear as connected peripherals accessible from one place (JupyterLab).

## Related Concepts

- [[jupyter-hermes-proxy|jupyter-hermes-proxy]]
- [[server-extension|Server Extension]]
- [[jupyterlab-extension|JupyterLab Extension]]
