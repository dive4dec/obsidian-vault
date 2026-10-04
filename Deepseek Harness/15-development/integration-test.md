---
tags: [DSH-Development]
domain: Development & Internals
---

# Integration Test

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Integration tests verify how packages compose: the `dsh-typert-loader` README notes its integration tests observe registration and removal of generated artifacts through the Loader lifecycle, and `dsh-otel` composition tests exercise independent channels and service removal. Loader composition tests with network fixtures are part of the shared testing policy.

## Concrete Example

A `dsh-typert-loader` integration test mounts the registry plus loader, verifies a qualifying entry's reflection lands in `ctx.typert`, then unmounts it and verifies the exact `ctx.typert.register()` disposer withdrew the contribution.

## Analogy

It is testing that the gears mesh, not just that each gear spins.

## Related Concepts

- [[testing|Testing]]
- [[unit-test|Unit Test]]
- [[e2e-test|E2E Test]]
