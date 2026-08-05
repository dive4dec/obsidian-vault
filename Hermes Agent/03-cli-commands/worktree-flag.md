---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Worktree Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --worktree flag (or -w) starts Hermes in an isolated git worktree. This means file changes happen in a copy, not your main project. Great for experiments and parallel agents.

## Concrete Example

You run hermes -w in your project. Hermes makes a worktree copy. It can edit files freely without touching the original.

## Analogy

Like photocopying a worksheet to try answers in pencil. The original stays clean.

## Related Concepts

- [[worktree-mode|Worktree Mode]]
- [[profiles|Profiles]]
- [[delegation-tool|Delegation Tool]]
