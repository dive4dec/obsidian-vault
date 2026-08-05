---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Watch Patterns

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A flag for background tasks. Hermes watches for specific strings in the output and notifies when they appear.

## Concrete Example

terminal(command=server.py, background=true, watch_patterns=[Startup complete]). When server prints Startup complete, you are notified.

## Analogy

A baby monitor - it alerts you when the baby cries. Watch patterns alert you when specific text appears in task output.

## Related Concepts

- [[background-tasks|Background Tasks]]
- [[process-tool|Process Tool]]
- [[notify-on-complete|Notify On Complete]]
