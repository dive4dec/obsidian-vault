---
tags: [Computer-Systems]
domain: Computer Systems
---

# Multiprocessing

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

Using multiple processes (not threads) for parallel work. Each process has its own memory. Avoids Python's GIL.

## 📋 Concrete Example

Python multiprocessing: 4 processes, each with its own memory, running on 4 cores. True parallelism. Used for CPU-intensive tasks like data processing.

## 🔗 Analogy

Multiprocessing is like 4 separate kitchens - each has its own ingredients (memory) and chef. No sharing means no conflicts, but you cannot easily pass ingredients between kitchens.

## Related Concepts

- [[parallelism|Parallelism]]
- [[process|Process]]
- [[gil|GIL]]
