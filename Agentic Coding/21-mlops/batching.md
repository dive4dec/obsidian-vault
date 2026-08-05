---
tags: [MLOps]
domain: MLOps
---

# Batching

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Processing multiple requests together instead of one at a time. Much more efficient for GPUs.

## 📋 Concrete Example

Batching: 32 requests arrive. Process all 32 in one forward pass (batch size 32). 10x faster than processing one at a time. GPU optimized for batches.

## 🔗 Analogy

A bus vs individual cars - a bus carries 40 people at once (batch). More efficient than 40 individual cars. Batching carries multiple requests at once.

## Related Concepts

- [[inference|Inference]]
- [[throughput|Throughput]]
- [[efficiency|Efficiency]]
