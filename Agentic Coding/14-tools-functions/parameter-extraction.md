---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Parameter Extraction

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

The model must extract the right parameters from the user's natural language request and fill them into the function call.

## 📋 Concrete Example

User: 'What is the weather like in Tokyo tomorrow?' Model extracts: city=`Tokyo`, date=`tomorrow`. It fills the schema: get_weather(city=`Tokyo`, date='2025-08-04').

## 🔗 Analogy

A barista taking an order - 'I want a large iced latte with oat milk, less sugar.' The barista extracts: size=large, temperature=iced, drink=latte, milk=oat, sugar=less. Parameter extraction fills the order form.

## Related Concepts

- [[function-calling|Function Calling]]
- [[schema|Schema]]
- [[natural-language-understanding|Natural Language Understanding]]
