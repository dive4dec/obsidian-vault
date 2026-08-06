---
tags: [Python-Packaging]
domain: Python Packaging
---

# setup.py

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

The classic build script for Python packages. It tells `setuptools` how to build and install your project, though modern projects prefer `pyproject.toml`.

## 📋 Concrete Example

A minimal `setup.py` just calls `setuptools.setup()`: `from setuptools import setup; setup(name='mypkg', version='1.0')`.

## 🔗 Analogy

Think of `setup.py` as a recipe card you hand to the builder — it lists ingredients and steps so the kitchen knows what to make.

## Related Concepts

- [[pyproject-toml|pyproject.toml]]
- [[setup-cfg|setup.cfg]]
- [[setuptools|setuptools]]
