---
tags: [Real-Packages]
domain: Real Packages
---

# jupyter-cpp-tutor

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyter-cpp-tutor` provides step-by-step C++ code visualization inside JupyterLab. Students see variable values, memory layout, pointer arrows, and execution flow at each line — like a debugger but designed for learning, not just debugging. It uses GDB to trace C++ code and renders an interactive visualization inspired by [OPT_CPP](https://dive4dec.github.io/OPT_CPP/) and [Python Tutor](https://pythontutor.com/).

## 📋 Concrete Example

```python
%%cpptutor
int x = 3;
int y = x + 4;
cout << y;
```

Install with `pip install jupyter-cpp-tutor`, then load with `%load_ext jupyter_cpp_tutor`. Use the `%%cpptutor` cell magic — the extension compiles with `g++ -g`, traces with GDB's Python API, and renders an interactive step-through view showing variables, call stack, and pointer arrows.

## 🔗 Analogy

Like a slow-motion replay in sports — instead of watching the whole play at full speed (running the program), you step through frame by frame to understand exactly what happened at each moment. The slider is your slow-motion dial.

## 🔗 Connection to OPT_CPP

[OPT_CPP](https://github.com/dive4dec/OPT_CPP) is the companion web app — a serverless C++ visualizer that runs entirely in the browser using WebAssembly (xeus-cpp / clang-repl). Visit [https://dive4dec.github.io/OPT_CPP/](https://dive4dec.github.io/OPT_CPP/) to try it without installing anything. While `jupyter-cpp-tutor` runs inside JupyterLab using GDB, OPT_CPP runs in any browser using WASM — both produce the same style of step-by-step visualization.

## 📦 Links

- **GitHub:** https://github.com/dive4dec/jupyter-cpp-tutor
- **PyPI:** https://pypi.org/project/jupyter-cpp-tutor/
- **Install:** `pip install jupyter-cpp-tutor`
- **Companion app (OPT_CPP):** https://github.com/dive4dec/OPT_CPP
- **OPT_CPP live site:** https://dive4dec.github.io/OPT_CPP/

## Related Concepts

- [[jupyter-python-tutor|jupyter-python-tutor]]
- [[cppmanlite|cppmanlite]]
- [[jupyter-magic|Jupyter Magic]]
- [[rich-display|Rich Display]]
- [[ipywidget|ipywidget]]
- [[jupyterlab-extension|JupyterLab Extension]]
