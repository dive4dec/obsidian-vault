---
tags: [Data-Structures]
domain: Data Structures
---

# Skip List

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A probabilistic alternative to balanced trees that uses multiple layers of linked lists for fast search, simpler to implement than self-balancing trees.

## 📋 Concrete Example

A skip list has express lanes: the top layer skips most nodes, the bottom layer visits every node. Search hops along express lanes, then drops down.

## 🔗 Analogy

An MTR with express trains and local trains. The express train skips small stations (top layer), getting you close fast. You switch to the local train for the exact stop.

## Related Concepts

- [[linked-list|Linked List]]
- [[probabilistic-structure|Probabilistic Structure]]
- [[binary-search|Binary Search]]
- [[layered-list|Layered List]]
