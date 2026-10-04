---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Hook Protocol

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-hook-protocol` is the shared rulebook behind both hook bridges. It defines exactly what a hook can do and what happens when it runs, so the Claude Code and Codex bridges behave identically. You never install or configure it yourself — mounting `dsh-hooks-claude-code` or `dsh-hooks-codex` applies these rules to your existing `hooks.json` hooks.

## Concrete Example

A command hook matched by the protocol can block a tool call with a model-visible reason, add context to the conversation, or force another model turn — the same outcome whether it came from the Claude Code or Codex bridge.

## Analogy

It is the single set of traffic laws both bridges obey, so any vehicle runs the same way.

## Related Concepts

- [[hooks|Hooks]]
- [[hooks-claude-code|Claude Code Hooks]]
- [[hooks-codex|Codex Hooks]]
