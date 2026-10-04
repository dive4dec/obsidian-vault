---
tags: [DSH-Development]
domain: Development & Internals
---

# Testing

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

dsh testing spans unit tests, Loader composition tests, network fixtures, and e2e suites that drive the built CLI. Package READMEs routinely note that platform dispatch is covered by injected-runner tests while native desktop verification belongs to the corresponding platform, and composition tests exercise independent channels and service removal.

## Concrete Example

The dsh README points at `tests/profiles/web/tests/web-failure-matrix.expected.e2e.ts`, which runs the built CLI through startup failures and native configuration HMR with `awaitWriteFinish` enabled in `test:expected`, verifying HTTP responses, recovery, and process exits without model API calls.

## Analogy

It is a layered test pyramid where the top floors drive the real binary end to end.

## Related Concepts

- [[test-suite|Test Suite]]
- [[unit-test|Unit Test]]
- [[integration-test|Integration Test]]
- [[e2e-test|E2E Test]]
