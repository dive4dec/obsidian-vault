---
tags: [Software-Engineering]
domain: Software Engineering
---

# Modular Design

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Breaking a system into independent modules. Each module does one thing well. Easier to build, test, and maintain.

## 📋 Concrete Example

Modules: auth.py (login), data.py (database), api.py (endpoints), utils.py (helpers). Each is independent, well-defined, and testable. Change auth.py without affecting data.py. Clean separation.

## 🔗 Analogy

Modular design is like a Lego city - each building (module) is separate. You can rebuild the police station without touching the hospital. Independent, interchangeable, maintainable.

## Related Concepts

- [[architecture|Architecture]]
- [[coupling|Coupling]]
- [[separation-of-concerns|Separation of Concerns]]
