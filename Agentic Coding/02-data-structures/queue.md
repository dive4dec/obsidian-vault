---
tags: [Data-Structures]
domain: Data Structures
---

# Queue

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you need first-in-first-out behaviour -- printer jobs, customer service lines, task scheduling -- a queue is the right structure.

## 📋 Concrete Example

Python: `from collections import deque; q = deque(); q.append('a'); q.append('b'); q.popleft()` returns `a` (first added).

## 🔗 Analogy

A queue at a bubble tea shop. The first person to line up is the first to get their drink. New people join at the back.

## Related Concepts

- [[fifo|FIFO]]
- [[enqueue|Enqueue]]
- [[dequeue|Dequeue]]
- [[stack|Stack]]
- [[deque|Deque]]
