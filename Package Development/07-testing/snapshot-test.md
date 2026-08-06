---
tags: [Testing-Quality]
domain: Testing Quality
---

# snapshot test

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

A `snapshot test` captures the expected output of a function the first time it runs, then compares future runs against that saved snapshot. It is ideal for testing complex outputs like JSON or HTML without writing every expected value by hand.

## 📋 Concrete Example

You run `pytest --snapshot-update` the first time, and `syrupy` saves the output of `render_template()` to a file. Next runs compare new output to the snapshot and fail if anything changed.

## 🔗 Analogy

A snapshot test is like taking a photo of a finished painting. Each time you repaint it, you hold the new version next to the photo to spot any differences.

## Related Concepts

- [[pytest|pytest]]
- [[integration-test|integration test]]
- [[parametrize|parametrize]]
