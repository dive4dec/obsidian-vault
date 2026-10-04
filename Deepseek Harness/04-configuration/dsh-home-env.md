---
tags: [DSH-Configuration]
domain: Configuration
---

# $DSH_HOME

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`$DSH_HOME` is the environment variable naming the DSH home directory, defaulting to `~/.dsh`. Profiles live under `$DSH_HOME/profiles/<name>`, and the home holds the home-level `cordis.patch.yml`, the `.env` fallback, the `.credentials.yaml` credential store, and the `.anonymous-user-id` telemetry identifier. It is the single place to back up or restore a dsh installation's configuration.

## Concrete Example

`$DSH_HOME/cordis.patch.yml` is the home-level patch layer that composes after every profile's own patch, and `$DSH_HOME/.credentials.yaml` holds stored keys by default.

## Analogy

`$DSH_HOME` is dsh's `~/.config` plus `~/.ssh` in one directory.

## Related Concepts

- [[env-vars|Environment Variables]]
- [[config-backup|Config Backup]]
- [[credentials-local|Local Credentials]]
- [[anonymous-user-id|Anonymous User ID]]
