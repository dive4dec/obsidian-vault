---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Clarify Tool

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool for asking the user a question when the model needs clarification.

## Concrete Example

clarify(question=Which database?, choices=[PostgreSQL, MySQL, SQLite]). User picks PostgreSQL. Model proceeds with PostgreSQL.

## Analogy

Raising your hand in class to ask a question - you need more info before proceeding. The clarify tool lets the model ask the user.

## Related Concepts

- [[toolsets|Toolsets]]
- [[user-interaction|User Interaction]]
- [[agent-loop|Agent Loop]]
