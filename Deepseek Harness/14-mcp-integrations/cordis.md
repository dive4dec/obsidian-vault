---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Cordis

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Cordis is the TypeScript plugin framework and config/patch layering system dsh is built on. It provides explicit dependency injection, scoped services, lifecycle-managed cleanup, and optional configuration-driven loading. Plugins are started with `ctx.plugin()`, which returns a `Fiber`, and `inject` declares which services must exist first — the same mechanism that composes an integration into a profile.

## Concrete Example

`const root = new Context(); await root.plugin(Counter); root.emit('app/ready', 'started'); await root.fiber.dispose()` shows the inject/service/lifecycle model used across dsh.

## Analogy

It is the engine block and wiring harness the whole car is assembled around.

## Related Concepts

- [[cordis-runner|Cordis Runner]]
- [[cosmokit|Cosmokit]]
- [[plugin-integration|Plugin Integration]]
