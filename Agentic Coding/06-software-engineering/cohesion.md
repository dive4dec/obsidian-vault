---
tags: [Software-Engineering]
domain: Software Engineering
---

# Cohesion

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

How focused a module is on one task. High cohesion = does one thing well. Good.

## 📋 Concrete Example

High cohesion: auth.py only does authentication - login, logout, token verification. Focused. Low cohesion: utils.py does authentication, database, formatting, and email. Unfocused. High cohesion is better.

## 🔗 Analogy

Cohesion is like a specialist doctor vs a generalist - a cardiologist (high cohesion) focuses on hearts. A general practitioner (low cohesion) handles everything. Specialists are better at their one thing. Modules should be specialists.

## Related Concepts

- [[coupling|Coupling]]
- [[modular-design|Modular Design]]
- [[single-responsibility|Single Responsibility]]
