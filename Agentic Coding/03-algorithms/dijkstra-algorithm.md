---
tags: [Algorithms]
domain: Algorithms
---

# Dijkstra Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Find the shortest path from a source node to all other nodes in a graph with non-negative weights. Uses a priority queue.

## 📋 Concrete Example

From Central Station, Dijkstra finds the shortest MTR route to every other station. It processes stations in order of increasing distance, always extending the shortest known path first.

## 🔗 Analogy

Exploring a city: you always walk to the nearest unvisited intersection from your current known distances. This guarantees you find the shortest route to every point.

## Related Concepts

- [[shortest-path|Shortest Path]]
- [[weighted-graph|Weighted Graph]]
- [[priority-queue|Priority Queue]]
- [[a-star-algorithm|A-Star Algorithm]]
- [[bellman-ford-algorithm|Bellman-Ford Algorithm]]
