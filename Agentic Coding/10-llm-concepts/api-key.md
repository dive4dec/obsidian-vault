---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# API Key

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

To use an LLM via API, you need an API key - a secret string that authenticates you and tracks usage for billing.

## 📋 Concrete Example

To call OpenAI's API: `Authorization: Bearer sk-xxxx`. The key identifies your account. Each API call costs money based on tokens used. Keep your key secret!

## 🔗 Analogy

A membership card for a gym - it identifies you as a member, lets you in, and tracks your visits. If someone steals your card (API key), they can use the gym (API) at your expense.

## Related Concepts

- [[api|API]]
- [[rate-limit|Rate Limit]]
- [[authentication|Authentication]]
