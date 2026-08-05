---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Chain of Thought

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

For complex reasoning, asking the model to think step by step produces better answers than asking for a direct answer.

## 📋 Concrete Example

Direct: 'What is 15% of 240?' might give wrong answer. CoT: 'Let me calculate: 10% of 240 = 24, 5% = 12, so 15% = 36.' Breaking it into steps leads to the correct answer.

## 🔗 Analogy

Showing your work on a math exam - instead of writing just the final answer, you show each step. This helps the teacher (and you) catch mistakes. CoT makes the model show its work.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[reasoning|Reasoning]]
- [[step-by-step|Step-by-Step]]
- [[self-consistency|Self-Consistency]]
