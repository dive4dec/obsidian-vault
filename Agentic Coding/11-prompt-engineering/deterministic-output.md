---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Deterministic Output

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

When temperature=0 and top-k/top-p are fixed, the model always produces the same output for the same input. This is deterministic.

## 📋 Concrete Example

If you run the same prompt 100 times with temperature 0, you get the same answer 100 times. Useful for debugging, testing, and when reproducibility matters.

## 🔗 Analogy

A calculator - 2+2 always equals 4. No randomness. Deterministic output is like a calculator: same input, same output, every time. Essential for testing and reliability.

## Related Concepts

- [[temperature|Temperature]]
- [[reproducibility|Reproducibility]]
- [[testing|Testing]]
