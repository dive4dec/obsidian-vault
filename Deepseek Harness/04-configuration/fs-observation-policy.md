---
tags: [DSH-Configuration]
domain: Configuration
---

# FS Observation Policy

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-fs-observation-policy` makes filesystem tools require an agent to read a file before overwriting or editing it, and rejects a mutation when the file changed since that read. It needs no configuration and injects no service — it listens for the `fs/*` events the tools dispatch. Reading a missing path authorizes guarded creation, and a resumed session starts with no observations, so it must re-read targets again.

## Concrete Example

An edit without a prior read fails with `FS_NOT_OBSERVED` (`edit requires reading "<path>" first`); a stale edit fails with `FS_STALE_VERSION` and the remedy to re-read.

## Analogy

It is a read-before-write gate that also detects if the file moved while you were typing.

## Related Concepts

- [[sandbox-policy|Sandbox Policy]]
- [[approval-policy|Approval Policy]]
