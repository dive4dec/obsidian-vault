---
tags: [DSH-Development]
domain: Development & Internals
---

# E2E Test

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

E2E suites drive the built dsh CLI through real startup and reload scenarios: the Web failure matrix runs startup failures and native configuration HMR with `awaitWriteFinish` enabled, verifying authenticated HTTP responses, diagnostics, recovery, process exits, and disposal — all without model API calls.

## Concrete Example

`pnpm run build` then run `tests/profiles/web/tests/web-failure-matrix.expected.e2e.ts` in `test:expected`; the companion `web-best-effort-startup.expected.e2e.ts` covers the shipped required Web dependencies and port conflicts.

## Analogy

It is crashing the whole car on purpose in a test track and checking the airbags every time.

## Related Concepts

- [[testing|Testing]]
- [[test-suite|Test Suite]]
- [[hmr|HMR]]
