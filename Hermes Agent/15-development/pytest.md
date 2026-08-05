---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Pytest

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

The testing framework Hermes uses. Run individual tests or the full suite. Supports parallel execution.

## Concrete Example

python -m pytest tests/tools/test_terminal.py -v. Output: test_ls, test_cd, test_rm... 12 passed. Each test function checks one behavior.

## Analogy

A quality inspector with a checklist - they check each item one by one. Pytest is the quality inspector for Hermes code. Each test is a checklist item.

## Related Concepts

- [[testing|Testing]]
- [[test-suite|Test Suite]]
- [[test-function|Test Function]]
