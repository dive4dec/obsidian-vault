---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Version

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

The session version is the format generation recorded in a session's physical header — v0 through v4 today. It tells the reader which codec to use and which migration chain, if any, applies before the session can be read in the current form. The version equals the filename of the canonical generation for that file.

## Concrete Example

A physical header of version 3 is read by the v3 codec and migrated through `dsh-session-format-v3-to-v4` to reach the current format.

## Analogy

The "file format version" stamp in a document's properties.

## Related Concepts

- [[format-migration|Format Migration]]
- [[session-integrity|Session Integrity]]
- [[session-format|Session Format]]
