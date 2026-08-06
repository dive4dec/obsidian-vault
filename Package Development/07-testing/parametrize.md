---
tags: [Testing-Quality]
domain: Testing Quality
---

# parametrize

> **Domain:** [[_testing-moc|Testing Quality]]

## 🎯 Motivation

`parametrize` lets you run the same test logic with different inputs and expected outputs. It dramatically reduces code duplication when testing edge cases, making your suite more thorough with less effort.

## 📋 Concrete Example

You decorate a test with `@pytest.mark.parametrize("a,b,expected", [(1,1,2), (0,0,0), (-1,1,0)])` and `pytest` runs the test three times, once per input set.

## 🔗 Analogy

`parametrize` is like a printing press that stamps the same quiz with different numbers. You write one template and get many test variations automatically.

## Related Concepts

- [[pytest|pytest]]
- [[test-fixture|test fixture]]
- [[property-based-testing|property based testing]]
