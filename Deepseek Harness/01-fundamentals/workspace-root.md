---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Workspace Root

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The invoking directory is the default workspace root for a dsh session: the `dsh-sandbox-policy` row sets `workspaceRoot: !!js process.cwd()` as the boundary that `workspace-write` mode may write under. New sessions record that directory, and sandbox confinement is anchored to it. Developers care because where you run `dsh` decides where the agent is allowed to write.

## Concrete Example

A bash call under `workspace-write` succeeds for paths inside the invoking directory and is denied outside it.

## Analogy

It is the fence line of a construction site: work inside is fine, work beyond it needs a permit.

## Related Concepts

- [[sandbox|Sandbox]]
- [[workspace|Workspace]]
- [[permission|Permission]]
