---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Install Modes

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Install modes are the different footprints the profiles offer: `sdk`, `sdk-minimal`, `headless`, `web`, and `acp`, each auto-initializing from its own shipped template. Choosing a mode decides what you get: GUI, one-shot automation, stdio JSON-RPC, or ACP. A developer cares because you install exactly the surface you need.

## Concrete Example

The shipped profiles `web`, `headless`, `sdk`, `sdk-minimal`, and `acp` each auto-initialize from a shipped template on first use.

## Analogy

Like picking a trim level before you drive it off the lot.

## Related Concepts

- [[web-install|Web Install]]
- [[headless-install|Headless Install]]
- [[sdk-install|SDK Install]]
