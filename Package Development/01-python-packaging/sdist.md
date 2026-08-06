---
tags: [Python-Packaging]
domain: Python Packaging
---

# sdist

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

A source distribution (`.tar.gz`) containing your raw source code. It lets users build from source when no wheel matches their platform.

## 📋 Concrete Example

Running `python -m build --sdist` creates `mypkg-1.0.tar.gz` with your source tree and metadata files.

## 🔗 Analogy

An sdist is a bag of flour and yeast — you must bake it yourself, but it works on any oven.

## Related Concepts

- [[wheel|wheel]]
- [[MANIFEST-in|MANIFEST.in]]
- [[build-system|build-system]]
