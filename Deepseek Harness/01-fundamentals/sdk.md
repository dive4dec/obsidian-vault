---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# SDK

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The SDK profile serves SDK clients over JSON-RPC stdio until shutdown or disconnect. It is a profile over `dsh-base`, not a separate public bin: the `@deepseek-ai/dsh-sdk-app` bundle mounts an app-owned zero-option command provider and starts the JSON-RPC server only after that provider accepts the invocation, so `dsh --profile sdk --help` prints help and exits without claiming stdin or stdout. Developers care because it is the programmatic entry point for embedding the harness.

## Concrete Example

`dsh --profile sdk` starts the JSON-RPC stdio server for SDK clients.

## Analogy

It is a restaurant's drive-thru speaker — a protocol-only channel for machines, no lobby required.

## Related Concepts

- [[acp|ACP]]
- [[entry-modes|Entry Modes]]
- [[headless|Headless]]
