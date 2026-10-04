---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Persistent PowerShell

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-pwsh-persistent gives each agent a pwsh tool that preserves its current directory, environment variables, functions, and background jobs across calls, while different agents keep separate shell state. Commands for one agent run sequentially; timeout or exit discards the shell so the next call starts fresh. It is the persistent counterpart of dsh-tool-pwsh for multi-step PowerShell work.

## Concrete Example

The default shell backend starts PowerShell through a dsh-terminal-bash instance configured with shellDialect: pwsh.

## Analogy

A persistent Windows lab bench for multi-step PowerShell scripts.

## Related Concepts

- [[pwsh-tool|PowerShell Tool]]
- [[bash-persistent|Persistent Bash]]
- [[long-running-tool|Long-Running Tool]]
