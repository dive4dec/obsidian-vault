---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Process Tool

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool for managing background processes. Actions: list, poll, log, wait, kill, write, submit, close.

## Concrete Example

process(action=list). Shows all background processes. process(action=kill, session_id=xxx). Kills a process. Full background process management.

## Analogy

A task manager on your computer - you see running processes and can stop them. The process tool manages background tasks.

## Related Concepts

- [[toolsets|Toolsets]]
- [[background-tasks|Background Tasks]]
- [[terminal-backend|Terminal Backend]]
