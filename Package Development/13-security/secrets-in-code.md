---
tags: [Security]
domain: Security
---

# Secrets in Code

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Hardcoding API keys or passwords in source code exposes them to anyone with repo access. Secrets must live in environment variables or secret managers, never in `.py` files.

## 📋 Concrete Example

Do not write `API_KEY = "sk-abc123"` in `config.py`. Instead, read `os.environ["API_KEY"]` and store the real value in a `.env` file that is gitignored, or use a vault service.

## 🔗 Analogy

You do not write your locker combination on the locker door. You memorize it. Code should "memorize" nothing — it should ask the environment for the secret at runtime.

## Related Concepts

- [[sensitive-data-exposure|Sensitive Data Exposure]]
- [[authentication-patterns|Authentication Patterns]]
- [[dependency-vulnerability|Dependency Vulnerability]]
- [[jupyterhub-litellm|jupyterhub-litellm]]
