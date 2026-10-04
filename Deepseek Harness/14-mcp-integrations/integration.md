---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Integration

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

An integration is any connection between dsh and an external system — an MCP server, a web backend, a webhook adapter, or an office conversion engine. dsh exposes these as scoped packages mounted in a profile, so an integration is added by configuration rather than by forking the runtime. The shared goal is to extend what the model can do without rewriting the harness.

## Concrete Example

Adding `dsh-mcp-client` with a `github` server, or `dsh-office-to-pdf` for `ctx.officeToPdf.convert()`, are both integrations mounted through the profile composition.

## Analogy

It is plugging an accessory into the agent — each one extends it without modifying the body.

## Related Concepts

- [[adapter|Adapter]]
- [[connector|Connector]]
- [[extending-dsh|Extending dsh]]
