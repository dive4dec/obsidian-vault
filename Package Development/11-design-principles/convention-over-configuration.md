---
tags: [Design-Principles]
domain: Design Principles
---

# Convention Over Configuration

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

Sensible defaults reduce the number of decisions developers must make. When a framework follows conventions, you get working results with zero config and only override what you truly need.

## 📋 Concrete Example

Flask expects templates in a `templates/` folder and static files in `static/`. You do not configure paths — just follow the convention and everything works out of the box.

## 🔗 Analogy

Driving on the left in Hong Kong is a convention everyone follows. You do not vote at each intersection which side to use; the rule saves countless decisions and collisions.

## Related Concepts

- [[kiss|KISS]]
- [[yagni|YAGNI]]
- [[fail-fast|Fail Fast]]
