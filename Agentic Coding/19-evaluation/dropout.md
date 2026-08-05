---
tags: [Evaluation]
domain: Evaluation
---

# Dropout

> **Domain:** [[_evaluation-moc|Evaluation]]

## 🎯 Motivation

Randomly turning off neurons during training. Forces the network to be robust, not dependent on any single neuron.

## 📋 Concrete Example

Dropout rate 0.2: during training, 20% of neurons are randomly turned off each step. The network learns redundant paths. At test time, all neurons are on. More robust.

## 🔗 Analogy

A basketball team practicing with players sitting out - the team learns to play well even when a player is missing. Dropout makes the network robust to missing neurons.

## Related Concepts

- [[regularization|Regularization]]
- [[overfitting|Overfitting]]
- [[neural-network-training|Neural Network Training]]
