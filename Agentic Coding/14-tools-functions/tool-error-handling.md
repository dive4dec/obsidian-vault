---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Error Handling

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

When a tool call fails (API down, invalid parameters, timeout), the agent must handle the error gracefully.

## 📋 Concrete Example

Tool call: get_weather(`Mars`) -> Error: 'City not found.' Agent handles: 'I could not find weather for Mars. Did you mean a city on Earth?' It does not crash; it adapts.

## 🔗 Analogy

A delivery driver getting a flat tire - they do not abandon the delivery. They call for help, find alternative transport, or notify the customer. Tool error handling is the agent adapting when tools fail.

## Related Concepts

- [[error-recovery|Error Recovery]]
- [[function-calling|Function Calling]]
- [[graceful-degradation|Graceful Degradation]]
