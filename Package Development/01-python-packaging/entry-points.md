---
tags: [Python-Packaging]
domain: Python Packaging
---

# entry-points

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

Entry points advertise callable functions inside your package so other tools can discover and invoke them without importing everything.

## 📋 Concrete Example

In `[project.scripts]` you write `mytool = "mypkg.cli:main"` so `pip install` creates a `mytool` command.

## 🔗 Analogy

Entry points are a phone directory — other programs look up your function's number and call it by name.

## Related Concepts

- [[console-scripts|console-scripts]]
- [[plugin-architecture|plugin-architecture]]
- [[metadata|metadata]]
