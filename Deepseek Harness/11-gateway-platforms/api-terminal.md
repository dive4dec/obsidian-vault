---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Terminal Controller

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-terminal-controller` opens the execution environment's default shell in a Session workspace from the web sidebar. It reconnects to existing processes and closes their complete provider-owned process ranges, and terminal output stays outside the Agent transcript. Keeping a terminal open retains its process and a bounded screen buffer.

## Concrete Example

Opening a terminal in the sidebar gives you a live shell in the session's workspace; closing it tears down the whole provider-owned process range.

## Analogy

A guest workbench in the workshop: it's yours while you're at the bench, and nothing on it is filed into the case notes.

## Related Concepts

- [[api-session|Session Controller]]
- [[sidebar|Sidebar]]
- [[gateway|API Gateway]]
- [[api-workspace|Workspace Controller]]
