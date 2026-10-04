---
tags: [DSH-Configuration]
domain: Configuration
---

# Workspace Config

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-workspace` keeps an ordered, persistent list of project directories and the sessions run in each directory. Hosts can build project sidebars, hide sessions from grouping without deleting their histories, and remove projects without deleting folders, files, or sessions. Re-adding a removed directory creates a fresh project, while sessions whose directories cannot be validated remain ungrouped. It is invisible to models and requires session persistence and storage backends.

## Concrete Example

Remove a project from the sidebar and its sessions stay stored but ungrouped; re-adding the directory starts a fresh project.

## Analogy

It is the project-grouping layer that ties sessions to directories without owning either.

## Related Concepts

- [[sandbox-policy|Sandbox Policy]]
- [[settings|Settings]]
