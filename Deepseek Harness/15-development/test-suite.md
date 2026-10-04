---
tags: [DSH-Development]
domain: Development & Internals
---

# Test Suite

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

The dsh test suite lives in the monorepo and runs against both source and built artifacts: per-package unit tests, Loader composition tests with network fixtures, and profile-level e2e suites under `tests/profiles/`. Suites like the Web failure matrix verify startup failures, configuration HMR recovery, and process exits deterministically without calling a model API.

## Concrete Example

`web-failure-matrix.expected.e2e.ts` and `web-best-effort-startup.expected.e2e.ts` under `tests/profiles/web/tests/` cover the shipped required Web dependencies, port conflicts, and disposal.

## Analogy

It is the monorepo's quality gate: every package proves itself before a release can ship.

## Related Concepts

- [[testing|Testing]]
- [[e2e-test|E2E Test]]
- [[release|Releasing]]
