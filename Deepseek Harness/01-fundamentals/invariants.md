---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Invariants

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-invariants` runs package-owned runtime checks inside a composition while it runs. Any package can ship a `./invariant` companion that verifies its own durable relationships — authoritative event streams and mutable snapshots — and a failure reports an `InvariantError` attributed to the owning package. The registry is enabled by default with `package_allowlist`/`package_blocklist` filters; `dsh-sdk-minimal` mounts it with the four core companions (`dsh-session`, `dsh-agent`, `dsh-scope`, `dsh-agent-loop`), while loading the registry alone installs no checks.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-invariants'
  config:
    enabled: true
    package_allowlist:
      - '^@deepseek-ai/dsh-'
```

## Analogy

It is a smoke detector in each room: it sounds only when that room's own wiring breaks, and names the room.

## Related Concepts

- [[base-package|dsh-base]]
- [[dsh-brand|Brand]]
