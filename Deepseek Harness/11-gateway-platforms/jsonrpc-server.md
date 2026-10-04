---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# JSON-RPC Server

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-sdk-jsonrpc-server` serves the SDK wire protocol over stdio so out-of-process clients can drive harness agents: it opens one session per `sessionId`, queues user prompts, and streams every session event and agent status transition back to the client. Stdout carries only JSON-RPC frames, so a deployment must not compose a stdout logger.

## Concrete Example

Mount it as the `jsonrpc` plugin in a Loader composition; it answers `shutdown` by disposing the root runtime and exiting 0.

## Analogy

A dispatch desk that takes orders, tracks each one, and reports back on every status change.

## Related Concepts

- [[sdk|SDK]]
- [[sdk-app|SDK App]]
- [[sdk-protocol|SDK Protocol]]
- [[gateway|API Gateway]]
