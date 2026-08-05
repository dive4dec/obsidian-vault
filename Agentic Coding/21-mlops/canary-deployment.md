---
tags: [MLOps]
domain: MLOps
---

# Canary Deployment

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Releasing a new model to a small percentage of users first. If no problems, gradually increase to 100%.

## 📋 Concrete Example

Canary: new model to 5% of users. Monitor for 24 hours: no errors, good feedback. Increase to 25%, then 50%, then 100%. Safe rollout.

## 🔗 Analogy

Testing a new dish at a restaurant - offer it as a special to a few customers first. If they like it, put it on the full menu. Canary deployment tests new models safely.

## Related Concepts

- [[model-deployment|Model Deployment]]
- [[ci-cd|CI-CD]]
- [[rollback|Rollback]]
