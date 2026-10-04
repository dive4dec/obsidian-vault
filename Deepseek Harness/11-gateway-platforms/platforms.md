---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Platforms

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

dsh ships several surfaces over the same core: `web` for the browser GUI, `sdk` and `sdk-minimal` for programmatic JSON-RPC clients, `acp` for automation clients, `headless` for one-shot runs, plus the reserved `desktop` name for the Electron-owned profile. Each is a profile bundle — `dsh-web-app`, `dsh-sdk-app`, `dsh-sdk-minimal`, `dsh-acp-app`, `dsh-headless` — and each auto-initializes from a shipped template on first use.

## Concrete Example

`dsh --profile acp`, `dsh --profile sdk`, and `dsh web` all boot the same runtime through different app bundles named in `dsh.profile.bundles`.

## Analogy

One engine sold in four body styles: sedan, van, truck, or motorcycle.

## Related Concepts

- [[platform-adapter|Platform Adapter]]
- [[web|Web Platform]]
- [[headless|Headless]]
- [[desktop|Desktop]]
