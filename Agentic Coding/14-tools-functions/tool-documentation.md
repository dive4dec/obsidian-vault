---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Documentation

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Each tool should have clear documentation: what it does, parameters, return value, errors, and examples. The agent reads this to use the tool correctly.

## 📋 Concrete Example

Docs: 'get_weather(city): Returns current weather. Parameters: city (str, required) - city name. Returns: dict with temperature, condition, humidity. Errors: CityNotFoundError, TimeoutError.'

## 🔗 Analogy

An instruction manual for a gadget - explains what it does, how to use it, what the buttons mean, and what to do if it breaks. Tool documentation is the manual for each agent tool.

## Related Concepts

- [[tool-definition|Tool Definition]]
- [[api-design|API Design]]
- [[docstring|Docstring]]
