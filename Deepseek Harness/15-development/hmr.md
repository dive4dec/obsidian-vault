---
tags: [DSH-Development]
domain: Development & Internals
---

# HMR

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-hmr` reloads plugin source and profile configuration while the application runs. Module replacements, Include refreshes, and profile configuration changes share one serialized queue, so a burst of edits is reconciled in order; package installation runs outside that queue. Disabling HMR means changes apply on restart instead.

## Concrete Example

The base bundle ships an `hmr` entry enabled with `root: []` (configuration watches only) when the launcher supplies profile context; headless, SDK, and ACP bundles disable it in YAML, and a profile patch with `- id: hmr / disabled: false / config: root: ["."]` turns source-module watching on.

## Analogy

Hot reload for the whole profile: one queue keeps a storm of file events from corrupting the composition.

## Related Concepts

- [[hmr-watch|HMR Watch]]
- [[reload|Reload]]
- [[hot-reload|Hot Reload]]
- [[dev-experience|Developer Experience]]
