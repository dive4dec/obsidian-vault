---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# dsh-base

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`@deepseek-ai/dsh-base` is the shared core that every base-backed `dsh --profile` surface runs on: a model connection, the full tool set, durable session history, and workspace safety defaults. It is a static patch document — one `insert` list over the empty profile root — not a library you import; the shipped `web`, `headless`, `sdk`, and `acp` profiles already include it, and a custom base-backed profile names it as its first bundle. `dsh-sdk-minimal` deliberately uses a standalone tree instead.

## Concrete Example

```json
{ "dsh": { "profile": { "bundles": ["@deepseek-ai/dsh-base"] } } }
```

## Analogy

It is the pre-wired chassis under every car in the lineup: same drivetrain, different paint and trim.

## Related Concepts

- [[profile-stack|Profile Stack]]
- [[agent-loop|Agent Loop]]
- [[tool-calling|Tool Calling]]
