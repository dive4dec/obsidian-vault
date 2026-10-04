---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Web Launch

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh web` boots the Web profile and serves the GUI, with `--port` (an app flag) moving the host off its default port. The invoking directory is the workspace root for the session it serves.

## Concrete Example

`dsh web --port 8080` serves the GUI at port 8080, rooted at the directory you ran it from.

## Analogy

Firing up the shopfront and choosing which street corner it sits on.

## Related Concepts

- [[web-command|dsh web]]
- [[serve-web|Serve the Web App]]
- [[port-flag|--port Flag]]
