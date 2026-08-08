---
tags: [Real-Packages]
domain: Real Packages
---

# jupyter-ai-hermes-magics

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`jupyter-ai-hermes-magics` provides the `%%hermes` cell magic for IPython/Jupyter. Students write a cell starting with `%%hermes` and the entire cell content becomes a prompt sent to Hermes Agent — no API code needed.

## 📋 Concrete Example

```python
%%hermes
Explain what this notebook does and suggest improvements
```

The magic registers via the `IPython.core.magic_actions` entry point. Dependencies are minimal: `ipython>=8.0` and `nbformat>=5.0`. Optional `mcp>=1.0` enables context injection.

## 🔗 Analogy

Like a walkie-talkie button — press it (write `%%hermes`), speak your message (cell body), and Hermes responds. No need to dial a phone number (write API code) every time.

## 📦 Links

- **GitHub:** https://github.com/dive4dec/jupyter-ai-hermes-magics
- **PyPI:** https://pypi.org/project/jupyter-ai-hermes-magics/
- **Install:** `pip install jupyter-ai-hermes-magics`

## Related Concepts

- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[jupyter-magic|Jupyter Magic]]
- [[ipython-magic-registration|IPython Magic Registration]]
- [[line-magic|Line Magic]]
- [[cell-magic|Cell Magic]]
- [[ipython-extensions|IPython Extensions]]
