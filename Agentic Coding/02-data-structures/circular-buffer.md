---
tags: [Data-Structures]
domain: Data Structures
---

# Circular Buffer

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When you need a fixed-size buffer that overwrites old data when full -- audio streams, log rotation, sensor data -- a circular buffer cycles back to the start.

## 📋 Concrete Example

Buffer of size 4: positions [0,1,2,3]. After filling all 4, the next write goes back to position 0, overwriting the oldest data. A write pointer cycles around.

## 🔗 Analogy

A circular running track with 4 lanes. When the runner in lane 4 finishes, the next runner starts again in lane 1, replacing the oldest runner. The track never grows.

## Related Concepts

- [[ring-buffer|Ring Buffer]]
- [[fixed-size-buffer|Fixed-Size Buffer]]
- [[fifo|FIFO]]
- [[deque|Deque]]
