---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# dsh web

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh web` boots the Web profile — the DeepSeek Harness Web GUI. On first use it auto-initializes from a shipped template, and the invoking directory becomes the session's workspace root. It is the main interactive entry mode.

## Concrete Example

`dsh web` opens the GUI, and `dsh web --port 8080` serves it on port 8080 instead of the default.

## Analogy

Opening a browser tab into your agent — the full dashboard instead of a text box.

## Related Concepts

- [[web-launch|Web Launch]]
- [[serve-web|Serve the Web App]]
- [[port-flag|--port Flag]]
- [[interactive-mode|Interactive Mode]]
