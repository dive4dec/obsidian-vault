---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# PowerShell Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-pwsh lets the agent run PowerShell commands through a mounted executor, with a fresh process per call and the same job semantics as the bash tool. Commands use native Windows paths and $env:NAME variables without dialect translation. Choose it when commands must be written in PowerShell or the deployment is Windows-native; there is no translation to bash.

## Concrete Example

Compose @deepseek-ai/dsh-pwsh-local, dsh-shell-env, and dsh-tool-pwsh; the pwsh tool appears once the executor and environment registry are mounted.

## Analogy

The Windows dialect twin of the bash tool.

## Related Concepts

- [[pwsh-persistent|Persistent PowerShell]]
- [[bash-tool|Bash Tool]]
- [[bash-persistent|Persistent Bash]]
