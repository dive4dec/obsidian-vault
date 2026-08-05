---
tags: [Algorithms]
domain: Algorithms
---

# Bitmask

> **Domain:** [[_algorithms-moc|Algorithms]]

## 🎯 Motivation

Use an integer's bits as a compact set of boolean flags. Each bit represents on/off for one option. Efficient for small sets.

## 📋 Concrete Example

Permissions: bit 0 = read, bit 1 = write, bit 2 = execute. `7` (binary 111) means all permissions. `5` (101) means read + execute. Checking: `if mask & 1: has_read()`.

## 🔗 Analogy

A remote control where each button is a bit. Press combinations to activate features. 'Play + Record' (bits 0 and 1 on) is mask 3. Checking a feature is checking its bit.

## Related Concepts

- [[bit-manipulation|Bit Manipulation]]
- [[flag|Flag]]
- [[set-representation|Set Representation]]
- [[permissions|Permissions]]
