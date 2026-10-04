---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Bash Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-bash runs Bash commands and returns stdout, stderr, and exit markers. Each call uses a fresh shell — cwd, variables, and functions do not persist — so the agent passes workdir instead of cd. With a job registry composed, every command is a job from its start: run_in_background returns an id at once, and a foreground command that outlives its timeout is promoted to the same background job.

## Concrete Example

The bash tool executes bash -c <command>; a nonzero exit comes back as [exit code: N], and sandbox denials can be retried once with wider sandbox_permissions.

## Analogy

A disposable shell that runs one command and hands back the receipt.

## Related Concepts

- [[bash-persistent|Persistent Bash]]
- [[tool-timeout|Tool Timeout]]
- [[background-tool|Background Tool]]
- [[long-running-tool|Long-Running Tool]]
