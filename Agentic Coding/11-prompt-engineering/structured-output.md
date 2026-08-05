---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Structured Output

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

When the model's response must be machine-readable (JSON, XML, CSV), structured output ensures it can be parsed by code.

## 📋 Concrete Example

Model returns: `{"temperature": 28, "condition": "sunny", "recommendation": "wear sunscreen"}`. Your code can directly parse this. Free text would require manual parsing.

## 🔗 Analogy

A packing list vs a jumbled note - a packing list (structured output) has categories: Toiletries: ___, Clothes: ___, Electronics: ___. Easy to check. A jumbled note is hard to use.

## Related Concepts

- [[output-format-specification|Output Format Specification]]
- [[json|JSON]]
- [[parsing|Parsing]]
- [[function-calling|Function Calling]]
