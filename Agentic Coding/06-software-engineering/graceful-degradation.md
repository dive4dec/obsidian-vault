---
tags: [Software-Engineering]
domain: Software Engineering
---

# Graceful Degradation

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

When something fails, the system continues to work with reduced functionality instead of crashing.

## 📋 Concrete Example

Graceful: API is down. Instead of crashing, the app shows cached data with a 'Offline mode' banner. Reduced functionality, but still usable. Better than a blank screen.

## 🔗 Analogy

Graceful degradation is like a restaurant running out of chicken - instead of closing, they offer beef and pork. Reduced menu, but still serving. The system degrades gracefully instead of failing completely.

## Related Concepts

- [[error-handling|Error Handling]]
- [[robustness|Robustness]]
- [[fallback|Fallback]]
