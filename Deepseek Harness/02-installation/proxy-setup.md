---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Proxy Setup

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Proxy setup configures an outbound HTTP proxy for registry and API traffic. `dsh-http-proxy` reads standard proxy env vars (`http_proxy`, `https_proxy`, `no_proxy`, `all_proxy`) once at launch and routes all of Node's `fetch` through them. A developer cares because behind a corporate proxy, both installs and model calls must go through it.

## Concrete Example

Export `HTTPS_PROXY` before launching dsh; `dsh-http-proxy` routes LLM, web-search, and MCP `fetch` traffic through it (loopback stays direct).

## Analogy

Like routing all mail through a single forwarding office.

## Related Concepts

- [[firewall|Firewall Notes]]
- [[env-setup|Environment Setup]]
- [[mirror-registry|Mirror Registry]]
