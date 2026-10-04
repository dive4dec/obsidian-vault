---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Hooks

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Hooks run at lifecycle moments in an agent's work — when a session starts, a prompt is submitted, a tool executes, or a run stops. Through the dsh hooks subsystem a hook can block a prompt or tool call with a message the model sees, attach extra context to the conversation, or ask the run to stop. Only command hooks run; `http`, `mcp_tool`, `prompt`, and `agent` handlers are skipped with a warning.

## Concrete Example

Mount `dsh-hooks-claude-code`, point `configPath` at your existing `hooks.json`, and your existing command hooks start firing at the matching agent-run moments with no rewrite.

## Analogy

It is a set of checkpoint guards that can inspect, annotate, or stop work as it passes.

## Related Concepts

- [[hook-protocol|Hook Protocol]]
- [[hooks-claude-code|Claude Code Hooks]]
- [[hooks-codex|Codex Hooks]]
