---
tags: [Data-&-Datasets]
domain: Data & Datasets
---

# Train-Test Split

> **Domain:** [[_data-datasets-moc|Data & Datasets]]

## 🎯 Motivation

Dividing data into training set (80%) and test set (20%). Train on one, test on the other. Prevents evaluating on training data.

## 📋 Concrete Example

Split: 10,000 examples. Train: 8,000 (learn from these). Test: 2,000 (evaluate on these). The model never sees test data during training. Honest evaluation.

## 🔗 Analogy

A teacher's practice exam vs real exam - practice (training) questions are studied, real (test) questions are new. The split ensures honest evaluation.

## Related Concepts

- [[training-data|Training Data]]
- [[validation-set|Validation Set]]
- [[model-evaluation|Model Evaluation]]
