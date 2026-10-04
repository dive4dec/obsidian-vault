---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Workflow Run

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-client-ui-workflow-run renders each durable top-level workflow run as an independent Chat node in the conversation. Expanding a run shows its phases, and expanding a phase shows its members; running, failed, cancelled, and interrupted levels open by default, while completed levels stay closed.

## Concrete Example

A run started through the workflow tool appears as its own node with status text; a running member that belongs to the current session can be opened to its child session.

## Analogy

A match report card: one card per game, with the lineups collapsible inside.

## Related Concepts

- [[workflow|Workflow]]
- [[workflow-ptc|Workflow PTC]]
- [[job-status|Job Status]]
- [[long-running|Long-Running]]
