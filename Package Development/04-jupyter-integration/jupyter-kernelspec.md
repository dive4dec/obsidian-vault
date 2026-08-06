---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# jupyter-kernelspec

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

A JSON file describing a kernel so Jupyter can launch it. It lives in a directory under `~/.local/share/jupyter/kernels/`.

## 📋 Concrete Example

A `kernel.json` with `argv`, `display_name`, and `language` tells Jupyter how to start your custom kernel.

## 🔗 Analogy

A kernelspec is a driver's license — it identifies which kernel you are and how to start its engine.

## Related Concepts

- [[custom-kernel|custom-kernel]]
- [[kernel-spec-json|kernel-spec-json]]
- [[jupyter-kernelspec|jupyter-kernelspec]]
