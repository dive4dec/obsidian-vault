---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Notify On Complete

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A flag for background tasks. When true, Hermes notifies the user when the task finishes.

## Concrete Example

terminal(command=pytest, background=true, notify_on_complete=true). Tests run in background. When done: notification sent. You know without polling.

## Analogy

A delivery notification - you get a text when your package arrives. notify_on_complete tells you when a background task finishes.

## Related Concepts

- [[background-tasks|Background Tasks]]
- [[process-tool|Process Tool]]
- [[toolsets|Toolsets]]
