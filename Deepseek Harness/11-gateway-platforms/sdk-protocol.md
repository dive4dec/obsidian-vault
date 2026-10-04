---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# SDK Protocol

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-sdk-protocol` is the wire protocol between a Harness runtime and its SDK clients: JSON-RPC 2.0 messages over newline-delimited byte streams, one transport class plus the named request, result, and notification types both wire ends speak. It is a pure library — no plugin, no configuration, no registrations — for implementers and debuggers of either end.

## Concrete Example

Framing rules, method names, payload types, and error semantics all live in `dsh-sdk-protocol`; the serving side is the `dsh-sdk-jsonrpc-server` plugin and the clients are the TypeScript `dsh-sdk-client` and the Python SDK.

## Analogy

The published wiring diagram both the factory and its customers build from.

## Related Concepts

- [[jsonrpc-server|JSON-RPC Server]]
- [[sdk|SDK]]
- [[sdk-app|SDK App]]
- [[api-versioning|API Versioning]]
