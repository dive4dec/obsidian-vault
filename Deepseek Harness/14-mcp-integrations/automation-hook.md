---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Automation Hook

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

An automation hook lets an external event or a lifecycle moment trigger agent behavior. Two mechanisms cover it: lifecycle hooks via `dsh-hooks-claude-code` / `dsh-hooks-codex` fire during runs (block, add context, force continuation), and webhook rules via `dsh-webhook` turn an external delivery into a new root Session. Both keep the trigger outside the model loop.

## Concrete Example

A `dsh-webhook` `WebhookRule` returns a `WebhookSessionRequest` to start a Session from a GitHub delivery, while a `dsh-hooks-codex` hook can force another agent step at the stop point.

## Analogy

It is a tripwire on the door that rings the bell or opens a new room when something happens.

## Related Concepts

- [[webhook|Webhook]]
- [[hooks|Hooks]]
- [[webhook-github|GitHub Webhook]]
