---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# custom-kernel

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

A kernel you write yourself by subclassing `ipykernel.kernelbase.Kernel`. It defines how code execution and completion work.

## 📋 Concrete Example

Create a class `class MyKernel(Kernel)` implementing `do_execute()` and register it with a `kernel.json`.

## 🔗 Analogy

A custom kernel is a custom interpreter — you decide exactly how each line of input is processed.

## Related Concepts

- [[jupyter-kernelspec|jupyter-kernelspec]]
- [[kernel-spec-json|kernel-spec-json]]
- [[ipython-extensions|ipython-extensions]]
