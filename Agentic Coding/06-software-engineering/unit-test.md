---
tags: [Software-Engineering]
domain: Software Engineering
---

# Unit Test

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Testing the smallest unit of code (a function) in isolation. Fast, specific, numerous.

## 📋 Concrete Example

Unit test: test_sort_empty_list(): assert sort([]) == []. test_sort_one_item(): assert sort([5]) == [5]. test_sort_duplicates(): assert sort([3, 1, 3]) == [1, 3, 3]. Each function tested separately.

## 🔗 Analogy

A unit test is like checking each ingredient before cooking - is the egg fresh? Is the flour dry? Each ingredient (function) is checked individually. If all pass, the dish (program) has a good foundation.

## Related Concepts

- [[testing|Testing]]
- [[test-coverage|Test Coverage]]
- [[test-case|Test Case]]
