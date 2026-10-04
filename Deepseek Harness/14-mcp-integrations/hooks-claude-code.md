---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Claude Code Hooks

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-hooks-claude-code` runs command hooks from your existing Claude Code `hooks.json` or settings file during dsh agent runs, without a rewrite. Supported hooks fire when sessions, prompts, tools, stops, or subagents reach matching moments, and can block prompts or tool calls with model-visible reasons, add context, or force another model turn.

## Concrete Example

Mount the package, point `configPath` at your Claude Code `hooks.json`, and the hooks you already have start firing at the corresponding moments in dsh runs — nothing else to set up before the first hook works.

## Analogy

It re-plugs an old alarm system into the new house so the existing sensors keep working.

## Related Concepts

- [[hooks|Hooks]]
- [[hook-protocol|Hook Protocol]]
- [[hooks-codex|Codex Hooks]]
