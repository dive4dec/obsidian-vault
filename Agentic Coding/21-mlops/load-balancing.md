---
tags: [MLOps]
domain: MLOps
---

# Load Balancing

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Distributing requests across multiple model instances. Prevents any single instance from being overwhelmed.

## 📋 Concrete Example

Load balancer: 10,000 requests/minute. Distribute across 5 model instances: 2,000 each. No single instance is overloaded. Smooth operation.

## 🔗 Analogy

A school cafeteria with multiple lines - instead of one long line, students spread across 5 lines. Faster for everyone. Load balancing spreads requests across instances.

## Related Concepts

- [[model-serving|Model Serving]]
- [[scalability|Scalability]]
- [[throughput|Throughput]]
