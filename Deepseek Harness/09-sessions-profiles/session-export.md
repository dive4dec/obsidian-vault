---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Export

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-log-export` lets the Web interface download a session's full history: a `Download session log` menu item and the `/export` slash command both hand the session tree — the session, its sub-sessions, and attachments — to the browser as a ZIP. The package owns the Host archive stream, its authenticated route, and the browser controls; the browser chooses the destination.

## Concrete Example

`/export` triggers the `api/session.export?sessionId=<id>&includeDescendants=true` route and the browser downloads `dsh-session-<id>.zip`, with `compressionLevel` (default 6) setting the DEFLATE level.

## Analogy

Zipping and emailing the whole case file for a conversation.

## Related Concepts

- [[session-list|List Sessions]]
- [[session-projection|Session Projection]]
- [[session|Session]]
