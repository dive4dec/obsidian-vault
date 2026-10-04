---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# ACP

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-acp` is the automation-only Agent Client Protocol server: trusted programs can create or resume sessions, select a model and reasoning effort, attach MCP servers, submit or cancel work, receive semantic updates, and close sessions independently over JSON-RPC stdio. It intentionally omits DSH-specific presentation data and interactive UI features.

## Concrete Example

Run `pnpm dsh --profile acp` to start the server; `dsh-subagent-acp` acts as the repository client.

## Analogy

A service counter for robots, not humans: precise ticket in, precise result out.

## Related Concepts

- [[acp-app|ACP App]]
- [[sdk|SDK]]
- [[platforms|Platforms]]
- [[jsonrpc-server|JSON-RPC Server]]
