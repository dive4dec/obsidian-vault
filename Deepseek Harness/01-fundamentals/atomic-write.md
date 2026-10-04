---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Atomic Write

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-atomic-write` replaces a file without ever exposing partial content or following a symlinked temp path. `writeFileAtomic` writes a random-suffix sibling opened with exclusive create, then renames it over the target on the same filesystem, so readers see either the old or the new complete content. `withFileLock` serializes read-modify-write cycles across processes with a `<filename>.lock` sibling; it is atomic but not crash-durable (no `fsync`). It backs the config editor and credentials store, replacing files like `$DSH_HOME/cordis.patch.yml`.

## Concrete Example

```ts
await writeFileAtomic('/home/u/.dsh/cordis.patch.yml', text, { mode: 0o600 })
```

## Analogy

It is swapping a book on a shelf in one motion: a reader never sees a half-torn page.

## Related Concepts

- [[storage|Storage]]
- [[dsh-home|DSH Home]]
