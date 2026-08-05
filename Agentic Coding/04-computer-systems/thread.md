---
tags: [Computer-Systems]
domain: Computer Systems
---

# Thread

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

A unit of execution within a process. Multiple threads share memory. Enables concurrent work.

## 📋 Concrete Example

A web server process has 4 threads. Thread 1 handles user A, Thread 2 handles user B, etc. They share the same memory (same database connection). 4 users served simultaneously.

## 🔗 Analogy

A thread is like a worker in a kitchen - multiple workers share the same kitchen (memory) but each does a different task (chopping, cooking, plating). More workers = more dishes prepared simultaneously.

## Related Concepts

- [[process|Process]]
- [[concurrency|Concurrency]]
- [[parallelism|Parallelism]]
