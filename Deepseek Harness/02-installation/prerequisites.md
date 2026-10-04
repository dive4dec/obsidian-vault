---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Prerequisites

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Before dsh works you need a compatible Node.js runtime, network access to the npm registry, and a way to authenticate to DeepSeek (an API key or an account). Peer ranges are enforced against the runtime, so the Node version matters. A developer cares because missing any of these surfaces as an install or boot failure.

## Concrete Example

You need the Node runtime that `dsh --version` reports, registry access for `@deepseek-ai/*` packages, and a `DEEPSEEK_API_KEY` or DeepSeek account.

## Analogy

Like having the ticket, the ID, and a seat before you board.

## Related Concepts

- [[node-runtime|Node Runtime]]
- [[npm-registry|npm Registry]]
- [[api-key-setup|API Key Setup]]
