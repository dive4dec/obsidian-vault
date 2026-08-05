---
tags: [Evaluation]
domain: Evaluation
---

# Cross-Entropy Loss

> **Domain:** [[_evaluation-moc|Evaluation]]

## 🎯 Motivation

The standard loss function for classification. Measures the difference between predicted probabilities and true labels.

## 📋 Concrete Example

True label: cat (1.0). Predicted: cat (0.7), dog (0.2), bird (0.1). Cross-entropy = -log(0.7) = 0.357. If predicted cat was 0.99, loss = -log(0.99) = 0.01 (much lower).

## 🔗 Analogy

An archery score - hitting the bullseye (correct class with high confidence) = low loss. Hitting the wrong target = high loss. Cross-entropy measures how far from the bullseye.

## Related Concepts

- [[loss|Loss]]
- [[softmax|Softmax]]
- [[classification|Classification]]
