---
tags: [Refactoring]
domain: Refactoring
---

# Strangler Fig

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Rewriting a legacy system all at once is risky and slow. The strangler fig pattern incrementally replaces old functionality with new code, allowing safe, gradual migration.

## 📋 Concrete Example

Wrap an old monolith with a new routing layer. Move one route at a time to a new microservice, and once all routes are migrated, the old monolith can be deleted.

## 🔗 Analogy

A strangler fig vine grows around an old tree, slowly taking over its role until the tree is no longer needed. The forest stays shaded throughout the transition, never bare.

## Related Concepts

- [[legacy-code|Legacy Code]]
- [[refactoring-legacy|Refactoring Legacy]]
- [[technical-debt|Technical Debt]]
