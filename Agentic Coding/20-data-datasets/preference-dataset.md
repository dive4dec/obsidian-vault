---
tags: [Data-&-Datasets]
domain: Data & Datasets
---

# Preference Dataset

> **Domain:** [[_data-datasets-moc|Data & Datasets]]

## 🎯 Motivation

A dataset of preferred vs non-preferred responses. Used for RLHF to align models with human preferences.

## 📋 Concrete Example

Preference data: {`prompt`: 'What is Python?', `chosen`: 'Python is a programming language...', `rejected`: 'idk lol'}. Model learns to prefer good responses.

## 🔗 Analogy

A teacher's feedback: 'This essay is better than that one.' The student learns what makes a good essay. Preference datasets teach models what humans prefer.

## Related Concepts

- [[rlhf|RLHF]]
- [[preference-ranking|Preference Ranking]]
- [[reward-model|Reward Model]]
