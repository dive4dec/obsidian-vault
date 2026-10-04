---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# SDK App

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-sdk-app` is the SDK stdio application as a `dsh` profile bundle over `dsh-base`. Its patch sets the coding-agent persona, mounts an app-owned zero-option command provider, and starts `dsh-sdk-jsonrpc-server` only after that provider accepts the invocation. The standalone `sdk-minimal` bundle reuses the same startup provider with its own profile name.

## Concrete Example

Bundles named in `dsh.profile.bundles` resolve `@deepseek-ai/dsh-sdk-app` from the dsh installation first, so `dsh --profile sdk` boots without any extra install step.

## Analogy

The pre-wired chassis that turns a bare engine into a drivable machine.

## Related Concepts

- [[sdk|SDK]]
- [[sdk-minimal|SDK Minimal]]
- [[jsonrpc-server|JSON-RPC Server]]
- [[sdk-protocol|SDK Protocol]]
