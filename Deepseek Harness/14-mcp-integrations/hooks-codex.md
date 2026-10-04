---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Codex Hooks

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-hooks-codex` runs command hooks from an existing Codex `hooks.json` during dsh agent runs, so prompt and tool gates work without being rewritten. It supports five Codex hook points: session start, prompt submission, before and after tool execution, and stop. Hooks can block prompts or tool calls with model-visible reasons, add context, or force another agent step.

## Concrete Example

Mount the package, point `configPath` at your Codex `hooks.json`, and your existing command hooks start firing at the matching agent-run moments.

## Analogy

It adapts a Codex alarm panel to the new house so its doors and gates keep triggering.

## Related Concepts

- [[hooks|Hooks]]
- [[hook-protocol|Hook Protocol]]
- [[hooks-claude-code|Claude Code Hooks]]
