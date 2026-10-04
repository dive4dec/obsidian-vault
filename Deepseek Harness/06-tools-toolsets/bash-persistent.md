---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Persistent Bash

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-bash-persistent gives an agent a bash tool whose cwd, exported variables, functions, and background jobs persist across calls, each agent in its own isolated shell. Choose it for long build sessions, activated environments, or scripts that export variables for later steps; use dsh-tool-bash when every command should start clean. Timeout or explicit exit resets the shell, and interactive stdin commands are not supported.

## Concrete Example

Mount @deepseek-ai/dsh-terminal-bash then dsh-tool-bash-persistent; the default timeoutMs is 300,000 and maxOutputChars is 16,000.

## Analogy

A lab bench you leave set up between experiments instead of packing it away.

## Related Concepts

- [[bash-tool|Bash Tool]]
- [[long-running-tool|Long-Running Tool]]
- [[tool-timeout|Tool Timeout]]
- [[tool-output|Tool Output]]
