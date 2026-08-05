---
tags: [Algorithms]
domain: Algorithms
---

# Sweep Line Algorithm

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Imagine a vertical line sweeping across the plane. Process events (points, intersections) as the line passes them. Used in geometry problems.

## 📋 Concrete Example

Find overlapping intervals: sort by start time, sweep from left to right, track active intervals. When a new interval starts before the previous ends, they overlap.

## 🔗 Analogy

A security guard walking along a corridor of doors. As they pass each door, they note who enters and exits. By the end, they know the maximum number of people in the corridor at any time.

## Related Concepts

- [[computational-geometry|Computational Geometry]]
- [[event-processing|Event Processing]]
- [[interval-problem|Interval Problem]]
- [[sorting|Sorting]]
