---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# --port Flag

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`--port` belongs to the web app, not to the launcher — the launcher hands it through after its own flags. Use it to move the web host off its default port.

## Concrete Example

`dsh web --port 8080` serves the GUI on port 8080.

## Analogy

Telling the radio which station to play — the instruction goes to the app, not the launcher.

## Related Concepts

- [[web-launch|Web Launch]]
- [[web-command|dsh web]]
- [[app-flags|App Flags]]
