---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# The dsh Command

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh <name>` or `dsh --profile <name>` boots the named profile from `$DSH_HOME/profiles/<name>`. Before anything starts, the launcher resolves the DSH home, composes the profile's bundle and patch layers, enforces version peer ranges, and loads only the selected runner. The launcher parses only its own flags; the first token it does not recognize starts the booted app's arguments.

## Concrete Example

`dsh --profile web --port 8080` — `--port` is not a launcher flag, it belongs to the web app, and `dsh --help` shows the launcher's own help.

## Analogy

It is a receptionist who handles only its own forms and hands the rest of your paperwork to the specialist you named.

## Related Concepts

- [[app-arguments|App Arguments]]
- [[profiles|Profiles]]
- [[cmdline|cmdline (dsh-cmdline)]]
