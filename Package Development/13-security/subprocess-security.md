---
tags: [Security]
domain: Security
---

# Subprocess Security

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Running external commands from Python is powerful but risky. Using `shell=True` or interpolating input opens the door to command injection, so prefer argument lists and avoid the shell.

## 📋 Concrete Example

`subprocess.run(["ls", user_dir], shell=False)` is safe. `subprocess.run(f"ls {user_dir}", shell=True)` is not — a `user_dir` like `.; rm -rf /` runs two commands. Always pass a list.

## 🔗 Analogy

Handing a recipe to a cook step by step is safe. If you hand them a free-form note, they might interpret "add salt; also leave the stove on" as two instructions — one of them dangerous.

## Related Concepts

- [[command-injection|Command Injection]]
- [[input-validation|Input Validation]]
- [[eval-risk|Eval Risk]]
