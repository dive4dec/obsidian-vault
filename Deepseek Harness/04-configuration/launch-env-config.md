---
tags: [DSH-Configuration]
domain: Configuration
---

# Launch Environment Config

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-launch-environment` resolves launch-time environment values without trusting the flattened `process.env`. It freezes inherited process values, the invocation directory's `.env`, and the Harness home's `.env`, then returns the winning value and its source in a fixed trust order; callers can exclude layers for sensitive lookups. The snapshot is immutable, but every layer is still copied into `process.env`, so it does not isolate subprocesses. It is a library, not a Cordis plugin, and cannot be mounted from `cordis.yml`.

## Concrete Example

`DEEPSEEK_API_KEY=… dsh` wins over the stored file because the launcher's environment snapshot is frozen at launch.

## Analogy

It is a frozen, ranked snapshot of the environment taken the moment dsh starts.

## Related Concepts

- [[shell-env|Shell Environment]]
- [[env-vars|Environment Variables]]
- [[dsh-home-env|$DSH_HOME]]
