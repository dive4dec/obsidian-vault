---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Client HMR

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-hmr` keeps open Web pages in sync with the Host plugin graph and reloads rebuilt browser bundles. Ordinary plugin enable/disable changes take effect without reloading the page or restarting the Host, while code rebuilds replace the affected plugin with fresh component state. The model sees no new input or output.

## Concrete Example

Toggling a client plugin in the Host is picked up by open browser pages through the HMR event stream — no reload, no restart.

## Analogy

A stage crew that swaps props mid-performance while the show keeps running.

## Related Concepts

- [[hmr|HMR]]
- [[client-modules|Client Modules]]
- [[layout|Layout]]
- [[theme|Theme]]
