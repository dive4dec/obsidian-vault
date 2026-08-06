---
tags: [Design-Principles]
domain: Design Principles
---

# YAGNI

> **Domain:** [[_design-principles-moc|Design Principles]]

## 🎯 Motivation

"You Aren't Gonna Need It" warns against building features for imagined future needs. Speculative code adds maintenance cost and complexity without delivering value now.

## 📋 Concrete Example

Do not add a `cache_ttl` parameter "just in case" you need caching later. When caching is actually required, add it then — with real requirements guiding the design.

## 🔗 Analogy

You do not buy a seven-seat van because you might have five children someday. You buy what fits your life now and upgrade when reality demands it.

## Related Concepts

- [[kiss|KISS]]
- [[scope-creep|Scope Creep]]
- [[minimal-viable-package|Minimal Viable Package]]
