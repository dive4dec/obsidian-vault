---
tags: [DSH-Development]
domain: Development & Internals
---

# Experimental

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

The `dsh-experimental-*` packages are dsh's unstable feature surface: they are published under explicit experimental names, carry no stability promise, and are shipped switched off for users to opt into from the Web sidebar's Plugins page. Examples include agent-team, voice-input-bundle, speech-to-text, auto-review, and schedule-bundle; some are configuration-only bundles whose `cordis.patch.yml` is the runtime content.

## Concrete Example

`@deepseek-ai/dsh-experimental-schedule-bundle` is named in `OPTIONAL_BUNDLES` in `packages/boot/app-boot/src/profile.ts`, so every installation ships it off and the plugin manager offers it in the Official group; enabling it appends the bundle to `dsh.profile.bundles`.

## Analogy

It is the nightlies channel: real code, real features, no promise that the API survives a restart.

## Related Concepts

- [[agent-team|Agent Team (Exp)]]
- [[voice-input|Voice Input (Exp)]]
- [[auto-review|Auto Review (Exp)]]
- [[schedule-bundle|Schedule Bundle (Exp)]]
