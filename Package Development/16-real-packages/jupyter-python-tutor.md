---
tags: [Real-Packages]
domain: Real Packages
---

# jupyter-python-tutor

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyter-python-tutor` brings Python Tutor-style step-by-step visualization to JupyterLab. Students see how variables change, how lists grow, how function calls stack, and SVG pointer arrows from frame variables to heap objects — all inline in the notebook cell. It is the Jupyter-embedded companion to [OPT_Mentor](https://dive4dec.github.io/OPT_Mentor/), the browser-based visualizer.

## 📋 Concrete Example

```python
%%pytutor
x = 3
y = x + 4
print(y)
```

Install with `pip install jupyter-python-tutor`, then load with `%load_ext jupyter_python_tutor`. Use the `%%pytutor` cell magic — the extension uses Python's `sys.settrace` to trace execution and renders an interactive slider-based visualization. Pure Python, no compiled extensions, works in CPython 3.8+.

## 🔗 Analogy

Like an X-ray machine for your code — you see the bones (structure), the blood flow (data moving through variables), and the heartbeat (execution loop) all at once, without cutting anything open. The slider lets you freeze time at any moment.

## 🔗 Connection to OPT_Mentor

[OPT_Mentor](https://github.com/dive4dec/OPT_Mentor) is the companion web app — a serverless Python visualizer that runs entirely in the browser using Pyodide (Python compiled to WebAssembly). Visit [https://dive4dec.github.io/OPT_Mentor/](https://dive4dec.github.io/OPT_Mentor/) to try it without installing anything. OPT_Mentor also features Socratic AI hints — instead of giving direct answers, it asks guiding questions using a fine-tuned LLM. While `jupyter-python-tutor` runs inside JupyterLab using CPython's trace, OPT_Mentor runs in any browser using Pyodide — both produce the same style of step-by-step visualization.

## 📦 Links

- **GitHub:** https://github.com/dive4dec/jupyter-python-tutor
- **PyPI:** https://pypi.org/project/jupyter-python-tutor/
- **Install:** `pip install jupyter-python-tutor`
- **Companion app (OPT_Mentor):** https://github.com/dive4dec/OPT_Mentor
- **OPT_Mentor live site:** https://dive4dec.github.io/OPT_Mentor/

## Related Concepts

- [[jupyter-cpp-tutor|jupyter-cpp-tutor]]
- [[jupyter-magic|Jupyter Magic]]
- [[rich-display|Rich Display]]
- [[ipywidget|ipywidget]]
- [[display-publishing|Display Publishing]]
