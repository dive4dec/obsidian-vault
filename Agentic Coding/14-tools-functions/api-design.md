---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# API Design

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Designing APIs and tools that are easy to use, hard to misuse, and well-documented. Good design makes agents more effective.

## 📋 Concrete Example

Good: get_weather(city: str) -> WeatherResult. Clear name, simple parameter, structured return. Bad: do_thing(x, y, z, flag1, flag2) -> any. Unclear what it does or how to use it.

## 🔗 Analogy

Designing a control panel - good design: clearly labelled buttons with intuitive layouts. Bad design: unlabeled buttons in random order. API design is about making tools intuitive for agents.

## Related Concepts

- [[tool-definition|Tool Definition]]
- [[schema|Schema]]
- [[documentation|Documentation]]
