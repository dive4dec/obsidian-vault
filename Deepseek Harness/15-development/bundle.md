---
tags: [DSH-Development]
domain: Development & Internals
---

# Bundling

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

A bundle groups packages loaded as one layer in a profile; the profile manifest's `dsh.profile.bundles` list orders them, and the launcher resolves bundle names from the dsh installation first, then the profile's `node_modules`. Enabling a bundle appends it at the end of the list, which can change configuration precedence, and disabling retains the dependency.

## Concrete Example

`@deepseek-ai/dsh-experimental-schedule-bundle` is one bundle: its `package.json` depends on the row packages and its `cordis.patch.yml` inserts the `time-context`, `schedule`, and `ui-schedule` rows; `dsh plugin --profile web add <bundle>` appends it to `dsh.profile.bundles`.

## Analogy

It is a boxed set of puzzle pieces that snaps onto the profile's stack as a single layer.

## Related Concepts

- [[plugin-authoring|Author a Plugin]]
- [[schedule-bundle|Schedule Bundle (Exp)]]
- [[plugin-manager|Plugin Manager]]
