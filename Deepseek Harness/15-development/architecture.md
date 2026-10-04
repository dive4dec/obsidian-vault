---
tags: [DSH-Development]
domain: Development & Internals
---

# Architecture

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

dsh is a layered composition system: a launcher boots a profile, which is an ordered stack of plugin-bundle patch layers under the user's `cordis.patch.yml`, loaded by the Cordis Loader into fibers. The Host serves browser clients over a typed Remote layer (Typert), and each package reads authoritative Loader state directly rather than maintaining second caches.

## Concrete Example

`dsh-host-plugin-inventory` projects `ctx.loader.entries()` on every `pluginInventory/list` call — no second lifecycle truth — mapping fiber states onto phases `pending`, `loading`, `active`, `failed`, `unloading`, or `null`.

## Analogy

It is an orchestra with a shared score: every section reads the same sheet instead of copying each other.

## Related Concepts

- [[internals|Internals]]
- [[codebase|The Codebase]]
- [[typert|Typert]]
