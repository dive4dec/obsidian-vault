---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Web App

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-web-app` is the browser GUI bundle: interactive chat, model and settings management, and session history, using the same model access, tools, and safety defaults as every other dsh surface. It is the right choice for interactive browser work, while `dsh-headless` covers one-shot command-line tasks.

## Concrete Example

`dsh --profile web --no-open --port 8080` starts the GUI, which you can then tune with app-owned flags such as `--port`.

## Analogy

The finished car: all the platform machinery assembled into one driveable interface.

## Related Concepts

- [[web-frontend|Web Frontend]]
- [[host-webserver|Host Webserver]]
- [[spa|SPA]]
- [[base-url|Base URL]]
