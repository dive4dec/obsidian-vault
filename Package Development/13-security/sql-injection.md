---
tags: [Security]
domain: Security
---

# SQL Injection

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Building SQL queries with string concatenation lets attackers inject commands that steal or destroy data. Parameterized queries separate code from data, making injection impossible.

## 📋 Concrete Example

Never do `f"SELECT * FROM users WHERE name = '{name}'"`. Use `cursor.execute("SELECT * FROM users WHERE name = ?", (name,))` so the database treats `name` purely as a value.

## 🔗 Analogy

A form letter with blanks is safe — you fill in names without changing the letter's instructions. If you rewrite the letter for each person, a clever "name" could add new sentences.

## Related Concepts

- [[input-validation|Input Validation]]
- [[command-injection|Command Injection]]
- [[secrets-in-code|Secrets in Code]]
