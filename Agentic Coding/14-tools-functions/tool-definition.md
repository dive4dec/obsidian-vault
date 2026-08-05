---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Definition

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Before an agent can use a tool, you must define it: name, description, parameters, and return type. The model uses this to decide when and how to call it.

## 📋 Concrete Example

Define: get_weather(city: str, unit: str=`C`) -> str. Description: 'Get current weather for a city.' The model sees this definition and knows it can check weather.

## 🔗 Analogy

A tool catalog in a workshop - each tool has a label: 'Hammer - for driving nails. Input: nail + surface. Output: nail driven in.' The catalog tells workers what each tool does and how to use it.

## Related Concepts

- [[function-calling|Function Calling]]
- [[tool-registration|Tool Registration]]
- [[schema|Schema]]
