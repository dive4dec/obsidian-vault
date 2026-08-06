---
tags: [Testing-Quality]
domain: Testing Quality
---

# test discovery

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`test discovery` is the mechanism that automatically finds and collects test files and functions. Understanding discovery rules ensures your tests actually run when you type `pytest` with no arguments.

## 📋 Concrete Example

`pytest` discovers files matching `test_*.py` or `*_test.py` and functions starting with `test_`. If you name a file `login_tests.py`, it will not be discovered unless you configure `python_files`.

## 🔗 Analogy

`test discovery` is like a metal detector scanning a beach. It only beeps for specific metals (test files), so you must label your treasures correctly for it to find them.

## Related Concepts

- [[pytest|pytest]]
- [[conftest|conftest]]
- [[unit-test|unit test]]
