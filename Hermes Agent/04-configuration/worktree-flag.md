---
tags: [Configuration]
domain: Configuration
---

# Worktree Flag

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

A global flag that runs Hermes in a git worktree. Useful for isolated work on a branch.

## Concrete Example

hermes --worktree feature-x chat. Hermes creates a git worktree for feature-x. All file changes happen there, isolated from the main repo.

## Analogy

A separate desk for a specific project - you work there without cluttering your main desk. The worktree flag gives Hermes a separate desk.

## Related Concepts

- [[global-flags|Global Flags]]
- [[config-yaml|Config YAML]]
- [[git-worktrees|Git Worktrees]]
