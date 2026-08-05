---
tags: [Sessions-&-Profiles]
domain: Sessions & Profiles
---

# JSON Snapshots

> **Domain:** [[_sessions-profiles-moc|Sessions & Profiles]]

## Motivation

A session export format. Complete JSON with nested structure. Includes all metadata.

## Concrete Example

session.json: {session_id: xxx, title: Docker Fix, messages: [{role: user, content: ...}, ...], tool_calls: [...]}. Full snapshot.

## Analogy

A photograph of a room - everything is captured in one image. JSON snapshots capture everything in one file.

## Related Concepts

- [[session-export|Session Export]]
- [[sessions|Sessions]]
- [[hermes-sessions|Hermes Sessions]]
