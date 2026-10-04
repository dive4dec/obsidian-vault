---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Platform Adapter

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

Each surface of dsh is an adapter over the same core: the web profile mounts `dsh-web-app` for browsers, `dsh-sdk-app` serves JSON-RPC over stdio, `dsh-acp-app` serves ACP clients, and `dsh-headless` runs one task and exits. All share the same model access, tools, and safety defaults, so a platform adapter is about transport and presentation, not about changing the agent.

## Concrete Example

The `@deepseek-ai/dsh/profile-boot` export provides the shared profile lifecycle to the Desktop host, which keeps the harness home patch and bounded shutdown while supplying its own installation anchor.

## Analogy

Different connectors on the same engine: USB, HDMI, or serial, all feeding the same machine.

## Related Concepts

- [[platforms|Platforms]]
- [[web|Web Platform]]
- [[acp|ACP]]
- [[headless|Headless]]
