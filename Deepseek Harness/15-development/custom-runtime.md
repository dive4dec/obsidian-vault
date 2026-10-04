---
tags: [DSH-Development]
domain: Development & Internals
---

# Custom Runtime

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

A custom dsh runtime is a composition that mounts the runtime packages you need — the `otel` service must be mounted before consumers that inject it, `dsh-typert-registry` before `dsh-typert-loader`, durable session storage before agent-team. The `@deepseek-ai/dsh/profile-boot` export provides the shared profile lifecycle to hosts that resolve their own installation anchor for runtime package resolution.

## Concrete Example

A low-level embedder that wants runtime package-resolution identities must mount the `PluginPackages` service before both the Loader entries and `dsh-plugin-package-inventory-deepseek`, per that package's activation contract.

## Analogy

It is assembling a car from the parts bin: the parts list (composition) decides what the car is.

## Related Concepts

- [[architecture|Architecture]]
- [[internals|Internals]]
- [[extending|Extending dsh]]
