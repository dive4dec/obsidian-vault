---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# Hermes Sessions

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

The CLI command for managing sessions. Subcommands: list, browse, export, rename, delete, prune, stats.

## Concrete Example

hermes sessions list: show all sessions. hermes sessions export --id 123: export to JSON. hermes sessions delete --id 123: delete. All session management in one command.

## Analogy

A photo album manager - you browse, export, rename, and delete photo albums. hermes sessions manages conversation albums.

## Related Concepts

- [[sessions|Sessions]]
- [[session-store|Session Store]]
- [[session-id|Session ID]]
