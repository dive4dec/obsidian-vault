---
tags: [Real-Packages]
domain: Real Packages
---

# cppmanlite

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`cppmanlite` is a lightweight, serverless C++ documentation lookup tool written in pure Python. No C++ compiler or dependencies needed — students search for `std::vector`, `std::sort`, or any C++ standard library function and get clean documentation instantly.

## 📋 Concrete Example

```python
from cppmanlite import lookup
result = lookup("std::vector")
print(result["summary"])
```

Pure Python, no compiled dependencies. Works on any platform. Optional `pytest` for development testing.

## 🔗 Analogy

Like a pocket dictionary for C++ — instead of opening a heavy reference book (browser + cppreference.com), you look up a word (function name) and get the definition immediately, right where you are coding.

## 📦 Links

- **GitHub:** https://github.com/dive4dec/cppmanlite
- **GitHub Pages:** https://dive4dec.github.io/cppmanlite/
- **PyPI:** https://pypi.org/project/cppmanlite/
- **Install:** `pip install cppmanlite`

## Related Concepts

- [[jupyter-cpp-tutor|jupyter-cpp-tutor]]
- [[pure-python|Pure Python]]
- [[no-compile-deps|No Compile Dependencies]]
- [[single-module-package|Single Module Package]]
- [[console-scripts|Console Scripts]]
- [[setuptools|setuptools]]
