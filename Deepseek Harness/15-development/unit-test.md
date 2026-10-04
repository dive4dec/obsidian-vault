---
tags: [DSH-Development]
domain: Development & Internals
---

# Unit Test

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Unit tests in dsh packages verify single-module behavior in isolation, often through dependency injection: `dsh-native-command` exposes the `NativeCommandRunner` type as an injectable command boundary so tests substitute a fake runner, and its path dispatch is covered by injected-runner tests.

## Concrete Example

A `dsh-native-command` test injects a fake `NativeCommandRunner`, asserts the chosen argv per platform, and checks that a rejected error carries `code`, `stdout`, and `stderr` with the original error as `cause`.

## Analogy

It is testing one gear by holding the shaft still with a mock.

## Related Concepts

- [[testing|Testing]]
- [[integration-test|Integration Test]]
- [[debugging|Debugging]]
