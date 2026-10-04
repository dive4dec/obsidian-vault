---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Storage

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

Session storage is where persisted session logs physically live on disk, under a deployment-controlled root. Each session gets its own directory under a readable project directory named from the normalized cwd (or `_no-cwd/`), and each canonical generation starts with a physical header whose version equals its filename. The storage location is the one required configuration of the JSONL backend.

## Concrete Example

`dsh-session-persistence-jsonl` requires `root`; sessions are laid out as `<root>/<normalized-cwd>--/<session>/`, with the current generation written as `session.vN.jsonl`.

## Analogy

The hard drive partition where all saved games are kept.

## Related Concepts

- [[jsonl-persistence|JSONL Persistence]]
- [[format-migration|Format Migration]]
- [[session-format|Session Format]]
