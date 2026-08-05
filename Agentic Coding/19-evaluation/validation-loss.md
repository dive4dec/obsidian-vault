---
tags: [Evaluation]
domain: Evaluation
---

# Validation Loss

> **Domain:** [[_evaluation-moc|Evaluation]]

## 🎯 Motivation

Loss measured on validation data (not used for training). If training loss drops but validation loss rises, the model is overfitting.

## 📋 Concrete Example

Training loss: 0.3 (low). Validation loss: 2.1 (high and rising). The model memorized training data but cannot generalize. Overfitting detected.

## 🔗 Analogy

Practice exam (training) score: 95%. Real exam (validation) score: 60%. You memorized practice answers but cannot solve new problems. Validation loss detects overfitting.

## Related Concepts

- [[training-loss|Training Loss]]
- [[overfitting|Overfitting]]
- [[generalization|Generalization]]
