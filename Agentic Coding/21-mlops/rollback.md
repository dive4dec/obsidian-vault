---
tags: [MLOps]
domain: MLOps
---

# Rollback

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Reverting to a previous model version when the new version has problems. Quick recovery from bad deployments.

## 📋 Concrete Example

New model v3 deployed. Error rate jumps from 0.1% to 5%. Rollback to v2 immediately. Users are unaffected. v3 is fixed and redeployed later.

## 🔗 Analogy

Ctrl+Z in a word processor - you made a change that broke everything. Undo (rollback) to the previous version. Quick recovery.

## Related Concepts

- [[model-versioning|Model Versioning]]
- [[canary-deployment|Canary Deployment]]
- [[error-recovery|Error Recovery]]
