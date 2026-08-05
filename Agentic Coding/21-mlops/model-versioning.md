---
tags: [MLOps]
domain: MLOps
---

# Model Versioning

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Tracking model versions over time. Each retrain creates a new version with updated performance.

## 📋 Concrete Example

Versioning: v1 (Jan, 88%), v2 (Mar, 91%), v3 (Jun, 93%). If v3 has a bug, rollback to v2. Versioning enables safe updates and rollbacks.

## 🔗 Analogy

Software updates on your phone - iOS 17.1, 17.2, 17.3. Each version is tracked. If 17.3 has a bug, you can downgrade. Model versioning works the same way.

## Related Concepts

- [[model-registry|Model Registry]]
- [[mlops|MLOps]]
- [[rollback|Rollback]]
