---
tags: [DSH-Development]
domain: Development & Internals
---

# Developer Experience

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

The dsh developer experience is built around fast iteration: HMR recomposes profile layers while the app runs, and the Web GUI's Plugins sidebar lets you install, enable, and disable bundles without editing files by hand. CLI operations like `dsh plugin --profile <name> <pnpm args>` inherit your terminal and auth environment, so an operator can interrupt long installs.

## Concrete Example

Enable HMR in a profile patch with `- id: hmr / disabled: false / config: root: ["."]`, then edit plugin source and watch the running app recompose through dsh-hmr's serialized reload queue.

## Analogy

It is Vite for agent profiles: save a file and the running harness picks it up.

## Related Concepts

- [[hmr|HMR]]
- [[hot-reload|Hot Reload]]
- [[dev-server|Dev Server]]
- [[plugin-manager|Plugin Manager]]
