---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Storage

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-storage` is the storage hub (`ctx.storage`) that keeps typed application data durable without adding it to session history — workspace records, session sidecars, or other state that must survive restarts. It is a pure registration table: backend packages (e.g. `@deepseek-ai/dsh-storage-json`) own the medium, data-form packages (e.g. `dsh-storage-domain`) own semantics, and consumers read and write validated records through `ctx.storageDomain`. Misconfiguration fails loud with a stable `StorageError` code. It is host-only and has no model-visible effect.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-storage-json'
  config:
    root: /var/lib/dsh/data
- name: '@deepseek-ai/dsh-storage-domain'
  config:
    backend: json
```

## Analogy

It is a warehouse with named shelves: the hub only holds the directory of which shelf holds what.

## Related Concepts

- [[session|Session]]
- [[atomic-write|Atomic Write]]
