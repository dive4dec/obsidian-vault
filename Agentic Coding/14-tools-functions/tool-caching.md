---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Caching

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Storing tool results so repeated calls with the same parameters return instantly without re-calling the tool.

## 📋 Concrete Example

First call: get_weather(`HK`) -> 28C (takes 2s, API call). Cache stores {`HK`: '28C'}. Second call: get_weather(`HK`) -> 28C (instant, from cache). Saves time and API quota.

## 🔗 Analogy

Keeping a note of bus schedules - instead of checking the app every time, you remember 'Bus 1A comes at 3:15.' Next time, you check your note (cache) instead of the app. Faster and saves data.

## Related Concepts

- [[efficiency|Efficiency]]
- [[lru-cache|LRU Cache]]
- [[token-management|Token Management]]
