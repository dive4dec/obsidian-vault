---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Agent Client Protocol

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

The Agent Client Protocol (ACP) is the integration surface for automation clients talking to a dsh agent, and the `@agentclientprotocol` SDK packages (including `sdk`) live under `node_modules`. Unlike MCP — which extends what an agent can use — ACP defines how an external client drives the agent itself, which the `acp` profile serves over stdio until disconnect.

## Concrete Example

`dsh acp` serves automation clients over ACP stdio using the `@agentclientprotocol/sdk` for the wire protocol.

## Analogy

Where MCP is the tool drawer the agent reaches into, ACP is the door a remote operator walks through to steer the agent.

## Related Concepts

- [[mcp|MCP]]
- [[sdk-integration|SDK Integration]]
- [[integration|Integration]]
