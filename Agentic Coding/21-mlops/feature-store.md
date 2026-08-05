---
tags: [MLOps]
domain: MLOps
---

# Feature Store

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

A centralized store for features (input variables). Ensures consistency between training and serving.

## 📋 Concrete Example

Feature store: `user_age`, `purchase_history`, `click_rate.` Training uses these features. Serving uses the same features. Consistent.

## 🔗 Analogy

A pantry in a restaurant - ingredients are stored centrally. Both the prep kitchen (training) and the cooking line (serving) use the same pantry. A feature store ensures consistency.

## Related Concepts

- [[mlops|MLOps]]
- [[data-pipeline|Data Pipeline]]
- [[consistency|Consistency]]
