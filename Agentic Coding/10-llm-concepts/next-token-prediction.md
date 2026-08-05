---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Next-Token Prediction

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

The core task of LLM pre-training: given a sequence of tokens, predict what token comes next. This simple task teaches grammar, facts, and reasoning.

## 📋 Concrete Example

Given 'The sky is', the model predicts `blue` with high probability. Given '1, 1, 2, 3, 5, ', it predicts '8' (Fibonacci). It learns patterns by always guessing the next piece.

## 🔗 Analogy

Autocomplete on your phone - you type 'See you' and it suggests `tomorrow` or `soon` or `there`. The model predicts the most likely next word based on what you've typed so far.

## Related Concepts

- [[pre-training|Pre-Training]]
- [[token|Token]]
- [[probability-distribution|Probability Distribution]]
- [[language-model|Language Model]]
