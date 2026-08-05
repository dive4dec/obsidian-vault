---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# watch_patterns

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

Instead of waiting for completion, watch_patterns trigger a notification when specific text appears in the output.

## Concrete Example

You watch for Build complete in the build log. As soon as that line appears, the agent is notified.

## Analogy

Like a baby monitor that alerts you when it hears crying, not just when the baby stops sleeping.

## Related Concepts

- [[background-tasks|background tasks]]
- [[terminal-background-mode|Terminal Background Mode]]
- [[notify_on_complete|notify_on_complete]]
