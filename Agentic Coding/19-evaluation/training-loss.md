---
tags: [Evaluation]
domain: Evaluation
---

# Training Loss

> **Domain:** [[_evaluation-moc|Evaluation]]

## 🎯 Motivation

Loss measured on the training data. Should decrease during training. If it stops decreasing, the model has learned what it can.

## 📋 Concrete Example

Epoch 1: loss 4.5. Epoch 5: loss 1.2. Epoch 10: loss 0.3. Training loss decreasing = model is learning. If it plateaus, the model has converged.

## 🔗 Analogy

Your practice exam scores improving: 45% -> 65% -> 85%. Training loss decreasing means the model is learning from training data.

## Related Concepts

- [[loss|Loss]]
- [[validation-loss|Validation Loss]]
- [[convergence|Convergence]]
