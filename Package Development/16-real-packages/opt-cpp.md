---
tags: [Real-Packages]
domain: Real Packages
---

# OPT_CPP

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

OPT_CPP is a serverless C++ code visualizer that runs entirely in the browser. Students write C++ code, and it shows step-by-step execution with variable values, memory layout, and pointer arrows — no installation, no server, just open a URL. It uses WebAssembly (xeus-cpp / clang-repl) to execute C++ directly in the browser.

## 📋 Concrete Example

Visit [https://dive4dec.github.io/OPT_CPP/](https://dive4dec.github.io/OPT_CPP/), paste your C++ code, and click "Visualize Execution". The tool compiles the code to WebAssembly, traces each line, and renders an interactive slider-based visualization. It also works offline once loaded.

## 🔗 Analogy

Like a flight simulator for C++ — instead of actually flying (running code in a terminal), you sit in a simulator (browser) where you can pause, rewind, and examine every instrument (variable) at any moment. No risk, no setup, just learning.

## 🔗 Connection to jupyter-cpp-tutor

`jupyter-cpp-tutor` is the Jupyter-embedded version that uses GDB for tracing. OPT_CPP is the browser-based version that uses WebAssembly. Both produce the same visualization style — use OPT_CPP for quick demos and exams (no install needed), use `jupyter-cpp-tutor` for deeper integration in Jupyter notebooks.

## 📦 Links

- **GitHub:** https://github.com/dive4dec/OPT_CPP
- **Live site:** https://dive4dec.github.io/OPT_CPP/

## Related Concepts

- [[jupyter-cpp-tutor|jupyter-cpp-tutor]]
- [[cppmanlite|cppmanlite]]
- [[rich-display|Rich Display]]
- [[pure-python|Pure Python]]
