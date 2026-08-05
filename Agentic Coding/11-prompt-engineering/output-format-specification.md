---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Output Format Specification

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Telling the model exactly what format you want (JSON, table, bullet points) prevents messy, unparseable responses.

## 📋 Concrete Example

'Return your answer as JSON with keys: sentiment (positive/negative), confidence (0-1), reasoning (string).' The model outputs structured JSON instead of free text.

## 🔗 Analogy

Ordering at a restaurant with a form - instead of 'I want food', you fill out: Main: ___, Drink: ___, Dessert: ___. The form (format specification) ensures you get exactly what you ordered.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[json|JSON]]
- [[structured-output|Structured Output]]
- [[parsing|Parsing]]
