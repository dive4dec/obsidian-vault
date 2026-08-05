---
tags: [Memory-&-State]
domain: Memory & State
---

# External Memory

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

Storing memories outside the agent - in files, databases, or knowledge bases. The agent queries them when needed.

## 📋 Concrete Example

The agent stores user history in a SQLite database. When the user returns, it queries: 'SELECT * FROM interactions WHERE user_id = 123 ORDER BY date DESC LIMIT 10.' External memory = database.

## 🔗 Analogy

A filing cabinet - your desk (internal memory) holds current documents. The filing cabinet (external memory) holds archived ones. When you need an old document, you go to the cabinet. External memory works the same way.

## Related Concepts

- [[long-term-memory|Long-Term Memory]]
- [[vector-database|Vector Database]]
- [[persistent-state|Persistent State]]
