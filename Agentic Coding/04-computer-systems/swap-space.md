---
tags: [Computer-Systems]
domain: Computer Systems
---

# Swap Space

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

Disk space used for virtual memory. When RAM is full, inactive data is `swapped` here.

## 📋 Concrete Example

Swap space: 8GB on SSD. When RAM fills up, the OS writes inactive memory pages to swap. Reading from swap is 100x slower than RAM, but it prevents crashes.

## 🔗 Analogy

Swap space is like an overflow storage room - when your desk (RAM) and backpack are full, you put items in the storage room (swap). Getting them back takes longer, but you do not lose anything.

## Related Concepts

- [[virtual-memory|Virtual Memory]]
- [[memory|Memory]]
- [[storage|Storage]]
