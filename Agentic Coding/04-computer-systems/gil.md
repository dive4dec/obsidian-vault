---
tags: [Computer-Systems]
domain: Computer Systems
---

# GIL

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

Global Interpreter Lock (Python) - only one thread can execute Python bytecode at a time. Limits true threading parallelism.

## 📋 Concrete Example

Python GIL: even with 4 threads, only 1 runs at a time. Threads switch rapidly (concurrency), but not truly parallel. Solution: use multiprocessing instead of threading for CPU work.

## 🔗 Analogy

The GIL is like a single whiteboard in a classroom - only one student can write at a time. Others must wait their turn. Even with 4 students (threads), work is not truly simultaneous.

## Related Concepts

- [[multiprocessing|Multiprocessing]]
- [[thread|Thread]]
- [[python|Python]]
