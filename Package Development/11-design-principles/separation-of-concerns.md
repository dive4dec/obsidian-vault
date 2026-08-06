---
tags: [Design-Principles]
domain: Design Principles
---

# Separation of Concerns

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Split a program into sections where each addresses a separate concern. Mixing UI, business logic, and database access in one place makes every change risky and testing difficult.

## 📋 Concrete Example

A web app separates `routes.py` (handling HTTP), `services.py` (business rules), and `models.py` (database). Each layer can be tested and updated without affecting the others.

## 🔗 Analogy

A newspaper separates news, opinion, sports, and ads into different sections. If ads appeared inside news articles, readers would distrust the reporting and navigation would be chaos.

## Related Concepts

- [[single-responsibility|Single Responsibility]]
- [[coupling-cohesion|Coupling and Cohesion]]
- [[encapsulation|Encapsulation]]
