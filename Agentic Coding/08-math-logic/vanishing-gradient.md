---
tags: [Math-&-Logic-for-AI]
domain: Math & Logic for AI
---

# Vanishing Gradient

> **Domain:** [[_math-logic-for-ai-moc|Math & Logic for AI]]

## 🎯 Motivation

When gradients shrink to near zero as they propagate back through layers, stopping deep networks from learning.

## 📋 Concrete Example

In a 20-layer network with sigmoid, gradients in early layers may be 0.25 to the power 20, essentially zero.

## 🔗 Analogy

Like a whisper passed through 20 people - by the end, the message has faded to nothing.

## Related Concepts

- [[sigmoid-derivative|Sigmoid Derivative]]
- [[backpropagation|Backpropagation]]
- [[deep-learning|Deep Learning]]
- [[relu|ReLU]]
