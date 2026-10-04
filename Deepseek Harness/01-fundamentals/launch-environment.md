---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Launch Environment

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`@deepseek-ai/dsh-launch-environment` is an immutable snapshot of a run's environment that remembers which layer supplied each value, instead of trusting a flattened `process.env`. It freezes the inherited process environment, the invocation directory's `.env`, and the Harness home's `.env`, ranking them in a fixed trust order; `get(name)` returns the winning value and its source, and `getFrom(name, sources)` lets callers exclude layers for sensitive lookups. Developers care because credential and endpoint resolution must never silently pick up a project-directory value.

## Concrete Example

```ts
const endpoint = launchEnvironmentOf(ctx).get('DEEPSEEK_BASE_URL')?.value
```

## Analogy

It is a chain of custody for environment variables: each value carries a note on who provided it.

## Related Concepts

- [[workspace-root|Workspace Root]]
- [[dsh-home|DSH Home]]
- [[bootstrap|Bootstrap]]
