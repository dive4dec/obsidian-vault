---
tags: [Computer-Systems]
domain: Computer Systems
---

# CPU Core

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

A physical processing unit in the CPU. More cores = more parallel work. Modern CPUs have 4-16 cores.

## 📋 Concrete Example

4-core CPU: can run 4 threads simultaneously. 16-core: 16 threads. Your Python program can use multiprocessing to use all cores: 16x faster for CPU-intensive tasks.

## 🔗 Analogy

A CPU core is like a chef. 1 core = 1 chef. 16 cores = 16 chefs. More chefs = more dishes cooked simultaneously. But coordination overhead means it is not always perfectly 16x faster.

## Related Concepts

- [[parallelism|Parallelism]]
- [[cpu|CPU]]
- [[multiprocessing|Multiprocessing]]
