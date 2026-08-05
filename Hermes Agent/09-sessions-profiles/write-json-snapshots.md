---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Write JSON Snapshots

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

A config option: write_json_snapshots. When true, Hermes saves a JSON snapshot after each session.

## Concrete Example

config: write_json_snapshots: true. After each session, a JSON file is saved. Useful for backup and debugging.

## Analogy

An autosave feature in a game - it saves automatically. write_json_snapshots autosaves session data.

## Related Concepts

- [[json-snapshots|JSON Snapshots]]
- [[config-yaml|Config YAML]]
- [[sessions|Sessions]]
