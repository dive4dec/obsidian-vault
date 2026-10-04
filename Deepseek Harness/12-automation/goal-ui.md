---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Goal UI

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-client-ui-goal is the Web GUI surface for the goal: a composer-context strip that shows the current goal and its process-local activation, and offers edit, pause, resume, or clear. Rejected changes appear inline, and durable /goal runs render as Command input bubbles.

## Concrete Example

An armed active goal offers pause on the strip; an active-but-disarmed or paused goal offers resume; clear removes the goal and the strip hides until the projection catches up.

## Analogy

A sticky note above the keyboard: it always shows what the session is working toward, and anyone can re-stick or tear it off.

## Related Concepts

- [[goal|Goal]]
- [[goal-tool|Goal Tool]]
- [[goal-round|Goal Round]]
- [[unattended|Unattended]]
