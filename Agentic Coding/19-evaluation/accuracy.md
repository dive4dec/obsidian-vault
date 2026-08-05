---
tags: [Evaluation]
domain: Evaluation
---

# Accuracy

> **Domain:** [[_evaluation-moc|Evaluation]]

## 🎯 Motivation

The simplest metric: what percentage of predictions are correct. Good for balanced data, misleading for imbalanced data.

## 📋 Concrete Example

100 questions, 90 correct. Accuracy = 90%. But if 90 questions are `yes` and the model always says `yes`, it gets 90% accuracy without being smart. Use other metrics too.

## 🔗 Analogy

A student's grade percentage - 90/100 correct = 90%. Simple and intuitive. But it does not tell you where they struggled. Accuracy alone can be misleading.

## Related Concepts

- [[metric|Metric]]
- [[precision-and-recall|Precision and Recall]]
- [[f1-score|F1 Score]]
