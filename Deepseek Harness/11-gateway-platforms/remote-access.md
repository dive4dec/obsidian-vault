---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Remote Access

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The web profile is built for being reached over a network: startup prints an authenticated URL, and SSH sessions or `--no-open` simply leave the URL for manual opening. Because the GUI is a pure browser app speaking to the host over HTTP, a remote client behaves the same as a local one — including using the in-app directory browser instead of a native OS chooser.

## Concrete Example

`dsh --profile web --no-open --port 8080` on a server, then open the printed authenticated URL from your laptop.

## Analogy

A cockpit you can walk into from another building.

## Related Concepts

- [[web|Web Platform]]
- [[directory-picker|Directory Picker]]
- [[base-url|Base URL]]
- [[client-connection|Client Connection]]
