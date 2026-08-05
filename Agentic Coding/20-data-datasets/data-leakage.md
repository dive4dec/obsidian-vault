---
tags: [Data-&-Datasets]
domain: Data & Datasets
---

# Data Leakage

> **Domain:** [[_data-datasets-moc|Data & Datasets]]

## 🎯 Motivation

When test data accidentally leaks into training data. Causes inflated scores that do not hold in real use.

## 📋 Concrete Example

Leakage: the same article appears in both train and test sets. The model memorizes it. Test score: 95%. Real-world score: 70%. The leakage caused false confidence.

## 🔗 Analogy

A student accidentally seeing the exam before the test - they score 95% but do not really know the material. Data leakage gives false high scores.

## Related Concepts

- [[train-test-split|Train-Test Split]]
- [[overfitting|Overfitting]]
- [[model-evaluation|Model Evaluation]]
