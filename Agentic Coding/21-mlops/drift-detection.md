---
tags: [MLOps]
domain: MLOps
---

# Drift Detection

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Detecting when real-world data changes from training data. The model performs worse because the world changed.

## 📋 Concrete Example

Drift: model trained on 2023 data. In 2025, slang has changed. Model does not understand new slang. Data drift detected. Retrain with new data.

## 🔗 Analogy

A map becoming outdated - new roads are built, old ones closed. The map (model) no longer matches reality (drift). Retrain with new data.

## Related Concepts

- [[model-monitoring|Model Monitoring]]
- [[data-distribution|Data Distribution]]
- [[retraining|Retraining]]
