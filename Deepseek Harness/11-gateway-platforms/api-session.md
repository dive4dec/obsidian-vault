---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Session Controller

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-session-controller` owns the Host `ctx.sessionController` service and the generated Client `session`, `skills`, and `fileReferences` Remote namespaces. It serves Session lifecycle and history, the Host-generation model catalog, human background-job kill, workspace-path opening, user-invocable skill discovery, and Agent-scoped file references. Use it through the API Gateway when a Client needs operations addressed by a Session.

## Concrete Example

The web sidebar's session list and history view are backed by the `session` Remote namespace this controller generates.

## Analogy

The front office that knows every case file, who's on duty, and where each file lives.

## Related Concepts

- [[api-remotes|Remotes API]]
- [[api-workspace|Workspace Controller]]
- [[gateway|API Gateway]]
- [[client-connection|Client Connection]]
