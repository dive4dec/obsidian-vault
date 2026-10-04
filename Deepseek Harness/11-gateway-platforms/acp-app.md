---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# ACP App

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-acp-app` is the automation-only ACP stdio application as a `dsh` profile bundle over `dsh-base`. Its patch sets the coding-agent persona and default model route, mounts an app-owned zero-option command provider, and starts `dsh-acp` only after that provider accepts the invocation.

## Concrete Example

`dsh --profile acp --help` writes help and exits without claiming stdin or stdout, because the command provider handles the invocation before the ACP server starts.

## Analogy

The pre-wired cabinet that powers up the automation counter at open.

## Related Concepts

- [[acp|ACP]]
- [[platforms|Platforms]]
- [[sdk-app|SDK App]]
- [[headless|Headless]]
