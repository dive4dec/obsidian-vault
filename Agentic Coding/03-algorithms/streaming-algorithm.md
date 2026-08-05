---
tags: [Algorithms]
domain: Algorithms
---

# Streaming Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Process a massive stream of data with limited memory, approximating results. You cannot store all the data, so you summarise on the fly.

## 📋 Concrete Example

Count distinct IP addresses in a web log with limited memory: use HyperLogLog to approximate the count using a few KB, even for billions of IPs.

## 🔗 Analogy

Counting different types of birds at a birdwatching spot. You cannot record every single bird (too many), so you use a tallying technique that approximates the diversity with a small notebook.

## Related Concepts

- [[online-algorithm|Online Algorithm]]
- [[approximation|Approximation]]
- [[hyperloglog|HyperLogLog]]
- [[limited-memory|Limited Memory]]
