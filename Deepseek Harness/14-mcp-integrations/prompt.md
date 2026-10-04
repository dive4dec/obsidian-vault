---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Prompt

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

An MCP prompt is a reusable prompt template a server can offer to prime the model. In dsh the treatment is limited: server instructions join the logged system prompt as literal text, but MCP prompt templates themselves are unsupported. So a configured server's instruction text influences framing, while its prompt-template feature is not wired through.

## Concrete Example

A `dsh-mcp-client` server's instructions (bounded by `maxInstructionBytes`, default 32,768) are appended as literal text to the system prompt; no separate MCP prompt template is invoked.

## Analogy

It is a prefilled memo the server tacks onto the wall, rather than a form the agent can fill in.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-client|MCP Client]]
- [[mcp-tools|MCP Tools]]
