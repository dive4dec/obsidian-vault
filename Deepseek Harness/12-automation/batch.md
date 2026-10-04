---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Batch

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Batch mode means running many independent headless invocations as separate one-shot processes, each with its own fresh session and exit code. Because dsh-headless is one task per invocation and exits on its own, a shell loop or CI matrix is the natural batch driver.

## Concrete Example

{ echo "Summarize these changes:"; git diff --stat; } | dsh --profile headless feeds one task via stdin; running that across many inputs in a loop, with --json for machine-readable results, is the typical batch shape.

## Analogy

A mailroom sorting letters: each letter is processed alone, and the whole batch is only the loop around it.

## Related Concepts

- [[headless|Headless]]
- [[concurrency|Concurrency]]
- [[ci|CI]]
- [[queue|Queue]]
