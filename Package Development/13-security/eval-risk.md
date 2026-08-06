---
tags: [Security]
domain: Security
---

# Eval Risk

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

`eval()` and `exec()` run any Python code from a string. Using them on user input gives attackers full control of your program, so they must be avoided.

## 📋 Concrete Example

`eval(request.form["expression"])` lets a user send `__import__('os').system('rm -rf /')`. Use a safe parser like `ast.literal_eval()` for literals, or a dedicated math library for formulas.

## 🔗 Analogy

Letting a stranger type on your laptop's terminal. Whatever they type runs with your permissions — they could delete files, read secrets, or install malware. That is what `eval` does.

## Related Concepts

- [[pickle-vulnerability|Pickle Vulnerability]]
- [[command-injection|Command Injection]]
- [[input-validation|Input Validation]]
