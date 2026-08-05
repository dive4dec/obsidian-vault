---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Hash Table

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Dictionaries use a hash table internally - it converts keys to numbers (hashes) for lightning-fast lookups.

## 📋 Concrete Example

When you do `d['name']`, Python hashes `name` to a number, jumps to that slot, and finds the value. O(1) - constant time, no matter how big the dict.

## 🔗 Analogy

A coat check at a event - you give your coat, they put it on a numbered hanger (hash). When you return with your ticket (key), they go straight to that number. Very fast.

## Related Concepts

- [[dictionary|Dictionary]]
- [[hash-function|Hash Function]]
- [[collision|Collision]]
