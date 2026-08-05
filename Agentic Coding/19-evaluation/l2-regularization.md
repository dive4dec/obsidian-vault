---
tags: [Evaluation]
domain: Evaluation
---

# L2 Regularization

> **Domain:** [[_evaluation-moc|Evaluation]]

## 🎯 Motivation

Adds a penalty proportional to the square of weights. Encourages small, distributed weights. Also called weight decay.

## 📋 Concrete Example

L2 penalty: 0.01 * sum(weights^2). Large weights are penalized. The model uses many small weights instead of a few large ones. More robust, less overfitting.

## 🔗 Analogy

Packing a backpack - distribute weight evenly (L2) instead of putting everything in one pocket. Even distribution is more stable and robust.

## Related Concepts

- [[regularization|Regularization]]
- [[weight-decay|Weight Decay]]
- [[overfitting|Overfitting]]
