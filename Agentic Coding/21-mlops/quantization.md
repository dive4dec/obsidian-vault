---
tags: [MLOps]
domain: MLOps
---

# Quantization

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Reducing precision: 32-bit floats to 8-bit integers. Smaller model, faster inference, slight accuracy loss.

## 📋 Concrete Example

Quantization: 32-bit weights -> 8-bit weights. Model size: 1GB -> 250MB. Speed: 2x faster. Accuracy: 88% -> 86%. Worth the trade-off for edge deployment.

## 🔗 Analogy

Rounding numbers - 3.14159 -> 3.14. Slightly less precise but much easier to work with. Quantization rounds model weights for efficiency.

## Related Concepts

- [[model-compression|Model Compression]]
- [[inference|Inference]]
- [[efficiency|Efficiency]]
