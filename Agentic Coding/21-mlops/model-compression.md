---
tags: [MLOps]
domain: MLOps
---

# Model Compression

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Making models smaller and faster: quantization, pruning, distillation. Essential for edge deployment.

## 📋 Concrete Example

Compression: 175B parameter model -> 7B parameter model (via distillation). 95% smaller, 85% of original accuracy. Can run on a phone.

## 🔗 Analogy

Compressing a large file into a zip - much smaller, same content. Model compression makes models smaller while keeping most of their capability.

## Related Concepts

- [[quantization|Quantization]]
- [[pruning|Pruning]]
- [[knowledge-distillation|Knowledge Distillation]]
