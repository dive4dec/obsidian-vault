---
tags: [DSH-Development]
domain: Development & Internals
---

# Hot Reload

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Hot reload in dsh is dsh-hmr's ability to replace module code and recompose configuration in a running app: module replacements, Include refreshes, and profile configuration changes share one queue, and the e2e failure matrix exercises "native configuration HMR" with `awaitWriteFinish` enabled.

## Concrete Example

With `- id: hmr / disabled: false / config: root: ["."]` in the profile patch, editing a plugin source file under `root: ["."]` triggers a module replacement without a process restart; replacing an installed package version still requires a restart through the Plugin Manager.

## Analogy

It is swapping a tire while the car is rolling — mostly.

## Related Concepts

- [[hmr|HMR]]
- [[reload|Reload]]
- [[hmr-watch|HMR Watch]]
