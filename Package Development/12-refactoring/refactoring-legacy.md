---
tags: [Refactoring]
domain: Refactoring
---

# Refactoring Legacy

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

Legacy code cannot be rewritten overnight. Safe refactoring strategies — seeding tests, wrapping, and incremental extraction — let you improve it without freezing development.

## 📋 Concrete Example

Before touching a legacy `InvoiceProcessor`, write characterization tests recording its current outputs. Then use `Extract Function` to pull out `calculate_total()` with tests guarding behavior.

## 🔗 Analogy

Restoring a classic painting: you do not paint over it. You clean a small corner, check the result, and proceed section by section, preserving the original while bringing it back to life.

## Related Concepts

- [[legacy-code|Legacy Code]]
- [[strangler-fig|Strangler Fig]]
- [[boy-scout-rule|Boy Scout Rule]]
