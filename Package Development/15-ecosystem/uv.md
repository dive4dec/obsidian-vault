---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# uv

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

`uv` is a fast, modern Python package manager written in Rust. It replaces pip, pip-tools, and virtualenv with one tool that is dramatically faster and produces reliable lock files.

## 📋 Concrete Example

`uv pip install -r requirements.txt` installs dependencies in seconds instead of minutes. `uv lock` generates a cross-platform lock file. `uv run script.py` runs in an isolated environment automatically.

## 🔗 Analogy

Swapping a bicycle for an e-bike: same destination, far less effort and time. The route is identical, but the speed and convenience make you actually want to make the trip.

## Related Concepts

- [[pip-tools|pip-tools]]
- [[lock-file|Lock File]]
- [[requirements-txt|requirements.txt]]
