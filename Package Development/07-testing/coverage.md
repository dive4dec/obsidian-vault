---
tags: [Testing-Quality]
domain: Testing Quality
---

# coverage

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`coverage` measures which lines of your code are executed during tests. A high coverage percentage gives confidence that most code paths are tested, though 100 percent coverage does not guarantee bug-free code.

## 📋 Concrete Example

You run `pytest --cov=mypackage` and see a report showing `models.py` has 95 percent coverage but `utils.py` only 60 percent, highlighting where to add more tests.

## 🔗 Analogy

`coverage` is like a heatmap of a museum showing which exhibits visitors actually looked at. Empty rooms tell you where to add better signage (more tests).

## Related Concepts

- [[pytest|pytest]]
- [[codecov|codecov]]
- [[tox|tox]]
