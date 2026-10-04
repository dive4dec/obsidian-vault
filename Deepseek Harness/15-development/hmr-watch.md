---
tags: [DSH-Development]
domain: Development & Internals
---

# HMR Watch

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

dsh-hmr registers watches on the profile manifest and both the profile-level and home-level `cordis.patch.yml` files, plus module watch roots for source files. Exact configuration watches observe additions, removals, and initially missing parent directories, and default to `awaitWriteFinish: true` so Chokidar's 2-second write-stability window avoids its lossy change-event throttle.

## Concrete Example

The config fields are `root` (module watch roots, default `["."]`), `ignored` (defaults `**/node_modules`, `**/.*`, `cache`, `data`), and `debounce` (100 ms for combining module changes); watched paths use `realpathSync()` spelling so events match the module cache.

## Analogy

It is a file watcher that waits until the editor actually finishes writing before acting on the change.

## Related Concepts

- [[hmr|HMR]]
- [[reload|Reload]]
- [[hot-reload|Hot Reload]]
