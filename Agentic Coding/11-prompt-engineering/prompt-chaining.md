---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Prompt Chaining

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Using the output of one prompt as input to the next, creating a pipeline that handles complex tasks step by step.

## 📋 Concrete Example

Step 1: 'Extract key points from this article' -> bullet points. Step 2: 'Write a tweet for each bullet point' -> tweets. Step 3: 'Select the best 3 tweets' -> final output. Each prompt builds on the last.

## 🔗 Analogy

An assembly line in a factory - raw material goes through Station 1 (cut), Station 2 (shape), Station 3 (paint). Each station's output is the next station's input. Prompt chaining is an assembly line for text.

## Related Concepts

- [[task-decomposition|Task Decomposition]]
- [[pipeline|Pipeline]]
- [[sequential-processing|Sequential Processing]]
