---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Theme

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-ui-theme` lets web GUI users choose `light`, `dark`, or `system` and set conversation content text from 12 to 17 px in Settings. A loopback client stores both values in the `ui-theme` settings namespace, persisted in `$DSH_HOME/cordis.patch.yml` by default, and resolves `system` through `prefers-color-scheme`. The package ships `--dsw-*` token stylesheets and injects a synchronous bootstrap so the palette applies before the shell loads.

## Concrete Example

Switching the theme in Settings writes the `ui-theme` namespace to `cordis.patch.yml`, and `dsh-client-ui-layout` applies each `ThemeSnapshot` to the document.

## Analogy

The paint and wallpaper of the office — furniture stays, the look changes.

## Related Concepts

- [[layout|Layout]]
- [[client-hmr|Client HMR]]
- [[chat-ui|Chat UI]]
- [[sidebar|Sidebar]]
