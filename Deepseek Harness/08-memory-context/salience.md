---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Salience

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

Prioritizing what stays in context when space is limited. In dsh this is reflected in the order in which context is shed: `dsh-agent-instructions` omits broader files before truncating the most specific one, and `dsh-compaction-basic` keeps the recent tail while condensing the oldest span, so the most current and specific information is retained.

## Concrete Example

Under its byte budget, `dsh-agent-instructions` drops broader instruction files first and only then truncates the most specific file — the most relevant guidance survives.

## Analogy

Keeping the items you'll use in the next meeting on your desk and storing the rest in a drawer.

## Related Concepts

- [[forgetting|Forgetting]]
- [[instructions|Instructions]]
- [[dedup|Context Dedup]]
- [[repeat-reminder|Repeat Tool Reminder]]
