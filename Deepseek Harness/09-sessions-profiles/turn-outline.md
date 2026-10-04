---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Turn Outline

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-turn-outline` gives history clients a whole-session outline of every started turn, including bounded prompt and settled-response previews. Clients can navigate turns that are not yet loaded and page backward from the exact event sequence needed to load a selected turn. Previews exclude injected context and tool results.

## Concrete Example

Mount it beside the session store and projection registry; it registers the `turnOutline` projection unit only when the registry is present.

## Analogy

The table of contents of a book, with a one-line preview per chapter.

## Related Concepts

- [[turn|Turn]]
- [[session-projection|Session Projection]]
- [[session-stats|Session Stats]]
