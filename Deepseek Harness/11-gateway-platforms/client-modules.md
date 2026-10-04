---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Client Modules

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-modules` turns a plugin package's `dsh.client` declaration into a loadable browser bundle. The host half scans enabled Loader entries and composes the boot graph, an available Web carrier serves each bundle over `/plugins`, and the browser half loads bundles lazily on demand. Running a bundle only registers a factory; module side effects run at materialization, so nothing runs until a plugin is first used.

## Concrete Example

The shell-owned carrier dispatches the same exact bundle responses through `fetchBundle()`, keeping host and shell carriers on one response contract.

## Analogy

A parts shelf where each widget is unpacked only the first time someone actually needs it.

## Related Concepts

- [[client-store|Client Store]]
- [[client-hmr|Client HMR]]
- [[client-resources|Client Resources]]
- [[web-app|Web App]]
