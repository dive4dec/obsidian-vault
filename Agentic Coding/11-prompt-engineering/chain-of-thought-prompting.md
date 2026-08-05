---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Chain of Thought Prompting

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

For reasoning tasks, asking the model to show its intermediate steps dramatically improves accuracy.

## 📋 Concrete Example

'If I have 3 boxes with 4 apples each and eat 5, how many left? Think step by step.' Model: '3 x 4 = 12 apples. 12 - 5 = 7. Answer: 7.' The step-by-step process prevents errors.

## 🔗 Analogy

A math teacher requiring you to show your work - instead of just writing '7', you write each calculation step. This catches mistakes and proves understanding. CoT does this for LLMs.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[reasoning|Reasoning]]
- [[step-by-step|Step-by-Step]]
- [[self-consistency|Self-Consistency]]
