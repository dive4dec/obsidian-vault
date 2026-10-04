---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Workspace Files API

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-workspace-files` lets the web client preview files readable through a Session's filesystem. It reads UTF-8 text by page, reads bounded byte windows or complete files, resolves related files from a base file's directory, and reports file metadata. File reads and watches may target paths outside the workspace, but directory listing and watches remain workspace-scoped. The service exposes no mutation operation.

## Concrete Example

The document preview pane pages through a UTF-8 file through this API, following changes to the file or its directory's direct entries.

## Analogy

A reading room with a glass case: you can inspect anything on display, but you can't touch or take anything.

## Related Concepts

- [[api-workspace|Workspace Controller]]
- [[api-session|Session Controller]]
- [[open-in-app|Open in App]]
- [[gateway|API Gateway]]
