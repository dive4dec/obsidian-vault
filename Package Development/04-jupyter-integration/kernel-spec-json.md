---
tags: [Jupyter-Integration]
domain: Jupyter Integration
---

# kernel-spec-json

> **Domain:** [[_jupyter-integration-moc|Jupyter Integration]]

## 🎯 Motivation

The `kernel.json` file that Jupyter reads to discover and launch a kernel. It specifies the executable and language info.

## 📋 Concrete Example

Contents include `"argv": ["python", "-m", "mykernel", ...]`, `"display_name": "My Kernel"`, and `"language": "python"`.

## 🔗 Analogy

kernel.json is an ID card for your kernel — it shows its name, language, and how to call it.

## Related Concepts

- [[jupyter-kernelspec|jupyter-kernelspec]]
- [[custom-kernel|custom-kernel]]
- [[custom-kernel|custom-kernel]]
