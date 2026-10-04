---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Web Platform

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh web` (or `dsh --profile web`) boots the interactive browser GUI profile. It auto-initializes from a shipped template on first use, prints an authenticated URL, and normally opens it in the default browser; SSH sessions and `--no-open` leave the URL for manual opening. It is the human-facing entry mode alongside the SDK, ACP, and headless profiles.

## Concrete Example

`dsh --profile web --no-open --port 8080` starts the GUI on a fixed port without trying to open a browser.

## Analogy

The storefront of dsh: everything else is the back office, but this is where people see the agent work.

## Related Concepts

- [[web-app|Web App]]
- [[host-webserver|Host Webserver]]
- [[client-server|Client-Server]]
- [[remote-access|Remote Access]]
