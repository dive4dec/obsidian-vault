---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session UI

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-client-ui-session` is the Web session panel: it presents sessions, their titles, and navigation over the history. It is the user-facing layer over the query, projection, and export services, surfacing what a session contains and letting the user act on it. The Session Header's more-actions menu, for example, hosts the log-export control.

## Concrete Example

The session panel renders per-session titles and the turn-outline navigation, and its header menu offers `Download session log` from `dsh-session-log-export`.

## Analogy

The tab bar and history view of a browser for your agent conversations.

## Related Concepts

- [[session-title|Session Title]]
- [[session-list|List Sessions]]
- [[turn-outline|Turn Outline]]
