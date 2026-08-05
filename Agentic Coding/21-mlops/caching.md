---
tags: [MLOps]
domain: MLOps
---

# Caching

> **Domain:** [[_mlops-moc|MLOps]]

## 🎯 Motivation

Storing recent results so identical requests do not need to be re-processed. Much faster for repeated queries.

## 📋 Concrete Example

Cache: user asks 'What is Python?' Model answers. Another user asks the same. Return cached answer instantly. No re-processing needed.

## 🔗 Analogy

A shortcut on your desk - the document you use most often is on your desk (cache), not in the filing cabinet. Instant access. Caching stores frequent results.

## Related Concepts

- [[inference|Inference]]
- [[latency|Latency]]
- [[efficiency|Efficiency]]
