---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# HMR

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-hmr` watches the profile manifest and both profile and home patch files, then recomposes all layers through one serialized reload while the app is running. The base bundle enables HMR with `root: []` when the launcher supplies profile context; headless, SDK, and ACP bundles disable that entry in YAML. Module replacements, Include refreshes, and configuration changes share one queue, and configuration watchers default to `awaitWriteFinish: true` to survive rapid consecutive edits. Without HMR, changes apply on restart.

## Concrete Example

```yaml
- id: hmr
  disabled: false
  config:
    root: ["."]
```

## Analogy

It is live-reload for your config: save a file and the running app picks it up without a reboot.

## Related Concepts

- [[profile-manifest|Profile Manifest]]
- [[patch-layer|Patch Layer]]
- [[plugin-manager|Plugin Manager]]
