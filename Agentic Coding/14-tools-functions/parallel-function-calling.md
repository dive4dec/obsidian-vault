---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Parallel Function Calling

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

The model can call multiple functions at once when they are independent, speeding up execution.

## 📋 Concrete Example

User: 'Weather in HK and Tokyo?' Model calls get_weather(`HK`) and get_weather(`Tokyo`) simultaneously. Both results come back, and the model compares them.

## 🔗 Analogy

Ordering multiple items at a restaurant - you say 'I want the soup, the chicken, and the rice' all at once. The kitchen prepares them in parallel. Faster than ordering one at a time.

## Related Concepts

- [[function-calling|Function Calling]]
- [[parallel-processing|Parallel Processing]]
- [[efficiency|Efficiency]]
