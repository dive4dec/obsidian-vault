---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Tree of Thoughts

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Extending CoT: the model explores multiple reasoning paths (branches of a tree), evaluates them, and chooses the best one.

## 📋 Concrete Example

For a chess puzzle: explore path A (move queen), path B (move knight), path C (move rook). Evaluate each: A leads to checkmate, B loses queen, C is neutral. Choose A.

## 🔗 Analogy

A decision tree for choosing a university - you explore multiple paths (Path A: study abroad, Path B: local university, Path C: vocational). You evaluate outcomes and choose the best path. ToT does this for reasoning.

## Related Concepts

- [[chain-of-thought|Chain of Thought]]
- [[self-consistency|Self-Consistency]]
- [[reasoning|Reasoning]]
- [[search|Search]]
