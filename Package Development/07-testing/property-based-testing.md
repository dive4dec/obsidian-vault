---
tags: [Testing-Quality]
domain: Testing Quality
---

# property based testing

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`property-based testing` generates hundreds of random inputs to test that properties (rules) always hold, instead of writing individual examples. It finds edge cases you would never think to test manually.

## 📋 Concrete Example

Instead of `assert reverse("ab") == "ba"`, you define a property: "reversing twice returns the original" and the framework tests it with 200 random strings automatically.

## 🔗 Analogy

Property-based testing is like a stress-testing machine that hammers a chair from every angle with random force. If it never breaks, you trust it will hold up in real use.

## Related Concepts

- [[hypothesis|hypothesis]]
- [[parametrize|parametrize]]
- [[pytest|pytest]]
