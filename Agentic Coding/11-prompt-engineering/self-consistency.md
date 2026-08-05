---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Self-Consistency

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Run the same CoT prompt multiple times and take the majority answer. If most runs agree, the answer is more likely correct.

## 📋 Concrete Example

Ask 'What is 17 x 23?' 5 times with CoT. Results: 391, 391, 391, 392, 391. Majority is 391. The one 392 is likely an error. Self-consistency filters it out.

## 🔗 Analogy

Asking 5 classmates to solve a math problem independently - if 4 say '391' and 1 says '392', you trust 391. The majority vote (self-consistency) is more reliable than any single answer.

## Related Concepts

- [[chain-of-thought|Chain of Thought]]
- [[voting|Voting]]
- [[reasoning|Reasoning]]
- [[temperature|Temperature]]
