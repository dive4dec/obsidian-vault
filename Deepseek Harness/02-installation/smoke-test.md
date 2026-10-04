---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Smoke Test

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A smoke test is the minimal run to confirm the agent loop works after install: one trivial headless job that should print a short answer and exit. A developer cares because it is the fastest way to rule out install, credential, and runtime problems in one command.

## Concrete Example

`dsh --profile headless "hi"` runs one fresh persisted session, prints the final answer, and exits.

## Analogy

Like a quick tap-test of the brakes before a long trip.

## Related Concepts

- [[first-session|First Session]]
- [[verify-install|Verify Install]]
- [[headless-install|Headless Install]]
