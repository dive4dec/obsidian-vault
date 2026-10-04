---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Core Tools

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The core tools are the always-available set in the dsh base bundle: bash, file read/write/edit, glob and grep search, todo, and the goal surface. They cover the minimum an agent needs to work on a workspace: run commands, read and change files, find things, and track a plan. Specialty tools (web, workflow, subagents, present, ask-user) are added by extra packages a profile composes in.

## Concrete Example

Even a minimal profile gets bash and the dsh-tool-fs suite; dsh-tool-todo and dsh-tool-goal come along with the base agent surface.

## Analogy

The default toolbox that comes with every workstation.

## Related Concepts

- [[toolsets|Toolsets]]
- [[tools|Tools]]
- [[bash-tool|Bash Tool]]
- [[fs-tool|Filesystem Tool]]
