---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Function Calling

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

LLMs can not directly execute code or APIs. Function calling lets the model output a structured request to call a function, which the application then executes.

## 📋 Concrete Example

User: 'What is the weather in HK?' Model outputs: call get_weather(city='Hong Kong'). Application executes get_weather, returns '28C sunny'. Model uses result to answer.

## 🔗 Analogy

A restaurant customer ordering - the customer (model) says 'I want the chicken rice' (function call). The waiter (application) takes the order to the kitchen (executes). The food comes back, and the customer eats.

## Related Concepts

- [[tool-use|Tool Use]]
- [[structured-output|Structured Output]]
- [[json|JSON]]
- [[api|API]]
