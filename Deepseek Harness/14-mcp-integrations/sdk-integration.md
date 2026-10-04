---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# SDK Integration

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

SDK integration uses dsh's programmatic surface to build on it rather than through the CLI or web UI. The `sdk` / `sdk-minimal` profiles serve SDK clients over JSON-RPC stdio, and dynamic Cordis packages run through the `dsh-cordis-*` runners for programmatic callers. This is how an external application embeds or drives a dsh agent.

## Concrete Example

`dsh sdk` serves SDK clients over JSON-RPC stdio, and `dsh-cordis-host-runner` keeps process-local dynamic definitions available to programmatic callers.

## Analogy

It is the engine's exposed bolt pattern — a machine can bolt itself up rather than sit in the seat.

## Related Concepts

- [[agentclientprotocol|Agent Client Protocol]]
- [[cordis-runner|Cordis Runner]]
- [[integration|Integration]]
