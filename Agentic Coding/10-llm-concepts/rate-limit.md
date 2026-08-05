---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Rate Limit

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

APIs restrict how many requests you can make per time period. This prevents overload and ensures fair usage among all customers.

## 📋 Concrete Example

OpenAI might allow 60 requests per minute on a basic plan. If you send 61, you get a 429 'Too Many Requests' error and must wait before retrying.

## 🔗 Analogy

A 'one entry per person' rule at a contest - you can only submit once per day. If you try twice, you're told to wait. Rate limits prevent any single user from overwhelming the system.

## Related Concepts

- [[api-key|API Key]]
- [[api|API]]
- [[throttling|Throttling]]
- [[429-error|429 Error]]
