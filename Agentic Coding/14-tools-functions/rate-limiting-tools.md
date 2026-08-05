---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Rate Limiting Tools

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Tools that call external APIs may have rate limits. The agent must respect these limits to avoid being blocked.

## 📋 Concrete Example

Weather API allows 60 calls/minute. Agent tracks call count: calls 55, then waits 60s before calling more. Rate limiting tools prevents getting blocked.

## 🔗 Analogy

A water tower limiting flow - the valve only lets so much water through per minute. Too much, and the pipes burst. Rate limiting tools control the flow of API calls to prevent overloading.

## Related Concepts

- [[rate-limit|Rate Limit]]
- [[retry-logic|Retry Logic]]
- [[backoff-strategy|Backoff Strategy]]
