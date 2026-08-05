---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Versioning

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Tools change over time. Versioning tracks which version of a tool the agent is using, preventing compatibility issues.

## 📋 Concrete Example

Tool v1: get_weather(city) -> temperature only. Tool v2: get_weather(city) -> temperature, humidity, wind. Agent must know which version it is using to parse results correctly.

## 🔗 Analogy

Software updates on your phone - v1 of an app has basic features, v2 adds more. You need to know which version you have to use it correctly. Tool versioning tracks this for agents.

## Related Concepts

- [[tool-definition|Tool Definition]]
- [[semantic-versioning|Semantic Versioning]]
- [[backward-compatibility|Backward Compatibility]]
