---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Batch API

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

For non-urgent tasks, batch APIs let you submit many requests at once and get results later, at a lower cost.

## 📋 Concrete Example

Submit 10,000 product descriptions to summarize. Batch API processes them within 24 hours at half the cost. Streaming would be too expensive and slow for this volume.

## 🔗 Analogy

Bulk mail vs express delivery - express (streaming) is fast but expensive per item. Bulk mail (batch) is cheap but takes days. For large volumes that aren't urgent, batch is the smart choice.

## Related Concepts

- [[api|API]]
- [[rate-limit|Rate Limit]]
- [[cost-optimization|Cost Optimization]]
