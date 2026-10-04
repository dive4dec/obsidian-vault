---
tags: [DSH-Development]
domain: Development & Internals
---

# Debug Internals

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Inspecting dsh internals means reading authoritative Loader state directly: `pluginInventory/list` returns a point-in-time snapshot of every non-group Loader entry with its module specifier, effective enablement, and fiber phase (`pending`, `loading`, `active`, `failed`, `unloading`, or `null`). The service reads the Loader on every call, so the answer always reflects the current composition rather than a cached view.

## Concrete Example

Call `pluginInventory/list` from the Web GUI's plugin settings to see each entry's live phase; a fiber that already failed and was removed is simply absent, and per-preset compositions show flattened plugin rows with their root-fiber phase when live.

## Analogy

It is looking into the engine bay while the engine runs, through a window that only ever shows the present.

## Related Concepts

- [[debugging|Debugging]]
- [[logs|Logs]]
- [[internals|Internals]]
