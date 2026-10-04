---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# SDK

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The SDK profile is for programmatic use: `dsh --profile sdk` serves SDK clients over JSON-RPC stdio until shutdown or disconnect. It is a profile, not a separate public bin, and the TypeScript `dsh-sdk-client` and the Python SDK are the wire clients. Choose it when your code needs to open sessions and drive harness agents out of process.

## Concrete Example

`dsh --profile sdk --help` writes help and exits without claiming stdin or stdout, because the app-owned command provider accepts the invocation first.

## Analogy

A factory's external API port: machines outside the building can place and track orders.

## Related Concepts

- [[sdk-app|SDK App]]
- [[sdk-protocol|SDK Protocol]]
- [[jsonrpc-server|JSON-RPC Server]]
- [[acp|ACP]]
