---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Plugin Integration

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Plugin integration is the native way to extend dsh: an integration ships as a package and is mounted into a profile's composition, which Cordis loads with its dependency injection and lifecycle. It is the mechanism behind `dsh-mcp-client`, `dsh-web`, and `dsh-office-to-pdf`. For behavior with no external counterpart, a native plugin is preferred over a hooks bridge.

## Concrete Example

Mounting `@deepseek-ai/dsh-office-to-pdf` as a `cordis.yml` row registers the `office-to-pdf` provider for `ctx.officeToPdf.convert()`.

## Analogy

It is a first-class module bolted into the engine, not a bolt-on afterthought.

## Related Concepts

- [[cordis|Cordis]]
- [[extending-dsh|Extending dsh]]
- [[integration|Integration]]
