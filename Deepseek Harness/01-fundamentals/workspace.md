---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Workspace

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The workspace is the set of files and folders an agent operates on, rooted at the invoking directory, which the sandbox policy uses as the `workspace-write` boundary. `dsh-workspace` additionally keeps an ordered, persistent list of project directories and the sessions run in each, powering project sidebars and session grouping — invisible to the model and cost-free in tokens. Removing a project never deletes folders, files, or sessions.

## Concrete Example

`ctx.workspaceRegistry.create('/path/to/dir', 'My Project')` registers a durable project that survives restart.

## Analogy

It is the workbench with a drawer for each project and a log of which jobs happened at which bench.

## Related Concepts

- [[workspace-root|Workspace Root]]
- [[sandbox|Sandbox]]
- [[session|Session]]
