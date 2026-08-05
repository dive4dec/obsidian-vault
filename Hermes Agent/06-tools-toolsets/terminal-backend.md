---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Terminal Backend

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The backend used by the terminal tool. Options: local (direct shell), SSH (remote shell). Configured in terminal section.

## Concrete Example

terminal.backend: local. Commands run on the local machine. terminal.backend: ssh. Commands run on a remote server via SSH. Flexible.

## Analogy

A kitchen at home vs a restaurant kitchen - you can cook locally or remotely. The terminal backend chooses where commands run.

## Related Concepts

- [[terminal-config|Terminal Config]]
- [[terminal-toolset|Terminal Toolset]]
- [[config-yaml|Config YAML]]
