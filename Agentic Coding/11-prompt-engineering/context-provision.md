---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Context Provision

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Providing relevant background context in the prompt helps the model give more appropriate, accurate responses.

## 📋 Concrete Example

Without context: 'Fix this code' + broken code. With context: 'This code should sort student grades. It fails when grades is empty. Here is the code: [code]. Fix the empty list bug.'

## 🔗 Analogy

Background info for a doctor - 'Patient: 15-year-old male, plays basketball, knee pain during games' (context) vs 'Patient has knee pain' (no context). The doctor gives better advice with context.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[rag|RAG]]
- [[background-information|Background Information]]
