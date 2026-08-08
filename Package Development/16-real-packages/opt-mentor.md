---
tags: [Real-Packages]
domain: Real Packages
---

# OPT_Mentor

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

OPT_Mentor is a serverless Python code visualizer that runs entirely in the browser using Pyodide (Python compiled to WebAssembly). Students write Python code and see step-by-step execution with variable values, call stack, and SVG pointer arrows. It also features Socratic AI hints — instead of giving direct answers, it asks guiding questions using a fine-tuned LLM.

## 📋 Concrete Example

Visit [https://dive4dec.github.io/OPT_Mentor/](https://dive4dec.github.io/OPT_Mentor/) (WebLLM mode) or [https://ccha23.github.io/OPTM/](https://ccha23.github.io/OPTM/) (API mode). Paste your Python code, click "Visualize Execution" for step-by-step tracing, or "Live Edit" for Socratic AI hints.

## 🔗 Analogy

Like having a patient tutor who never gives you the answer — instead, they ask "What do you think happens when this line runs?" and guide you to discover the answer yourself. The visualization is the whiteboard, the Socratic AI is the tutor.

## 🔗 Connection to jupyter-python-tutor

`jupyter-python-tutor` is the Jupyter-embedded version that uses CPython's `sys.settrace`. OPT_Mentor is the browser-based version using Pyodide. Both produce the same visualization style. OPT_Mentor adds Socratic AI hints (not in `jupyter-python-tutor`). Use OPT_Mentor for exams (Safe Exam Browser compatible) and quick demos, use `jupyter-python-tutor` for deeper Jupyter integration.

## 📦 Links

- **GitHub:** https://github.com/dive4dec/OPT_Mentor
- **Live site (WebLLM):** https://dive4dec.github.io/OPT_Mentor/
- **Live site (API mode):** https://ccha23.github.io/OPTM/

## Related Concepts

- [[jupyter-python-tutor|jupyter-python-tutor]]
- [[jupyter-cpp-tutor|jupyter-cpp-tutor]]
- [[rich-display|Rich Display]]
- [[pure-python|Pure Python]]
