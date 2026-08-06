---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# server-extension

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

Code that runs inside the Jupyter server process to add HTTP endpoints or modify server behavior. Loaded at startup.

## 📋 Concrete Example

Add `c.NotebookApp.server_extensions = ['mypkg.server_ext']` to `jupyter_notebook_config.py` to enable.

## 🔗 Analogy

A server extension is a kitchen renovation — it changes what the backend (kitchen) can serve to clients.

## Related Concepts

- [[nbextension|nbextension]]
- [[jupyterlab-extension|jupyterlab-extension]]
- [[comms|comms]]
