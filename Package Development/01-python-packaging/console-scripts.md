---
tags: [Python-Packaging]
domain: Python Packaging
---

# console-scripts

> **Domain:** [[_python-packaging-moc|Python Packaging]]

## 🎯 Motivation

A type of entry point that creates command-line commands. When installed, they generate executable scripts that call your Python functions.

## 📋 Concrete Example

Adding `mycli = "mypkg.main:run"` under `[project.scripts]` makes `mycli` available in the terminal.

## 🔗 Analogy

Console scripts are vending machine buttons — press the command name and out pops your function's output.

## Related Concepts

- [[entry-points|entry-points]]
- [[pyproject-toml|pyproject.toml]]
- [[setuptools|setuptools]]
- [[hermes-acp-sdk|hermes-acp-sdk]]
