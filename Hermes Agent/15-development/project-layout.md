---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Project Layout

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

The directory structure of the Hermes codebase. Each directory has a specific purpose.

## Concrete Example

hermes-agent/ -> run_agent.py (loop), model_tools.py (tools), cli.py (interface), agent/ (prompt, memory, routing), tools/ (one file per tool), gateway/ (messaging), cron/ (scheduler), tests/ (pytest).

## Analogy

A filing cabinet with labeled drawers - each drawer has a category. Project layout organizes code into labeled directories.

## Related Concepts

- [[hermes-source-code|Hermes Source Code]]
- [[agent-loop|Agent Loop]]
- [[tool-registry|Tool Registry]]
