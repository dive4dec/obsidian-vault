---
tags: [Real-Packages]
domain: Real Packages
---

# Agent Client Protocol (ACP)

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

ACP is the protocol that lets external applications drive AI agents like Hermes. It defines how a client sends tasks, receives streaming events, and manages tool calls — all over standard JSON-RPC. `hermes-acp-sdk` uses ACP to talk to Hermes without Jupyter.

## 📋 Concrete Example

The `agent-client-protocol==0.9.0` package defines the message types. `hermes-acp-sdk` creates a subprocess running `hermes acp`, then exchanges JSON-RPC messages: the client sends a task, Hermes responds with streaming events (thinking, tool calls, results).

## 🔗 Analogy

Like a flight control tower protocol — the tower (client) and pilots (agents) use a standard radio language (ACP) so any tower can direct any pilot, regardless of airline (agent implementation).

## Related Concepts

- [[hermes-acp-sdk|hermes-acp-sdk]]
- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[mcp-bridge|MCP Bridge]]
- [[jupyter-ai-persona-manager|jupyter-ai-persona-manager]]
