---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Backup

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Backing up `$DSH_HOME` captures a profile's configuration and its shared state in one directory: profiles under `profiles/<name>`, the home-level `cordis.patch.yml`, `.env`, `.credentials.yaml`, and `.anonymous-user-id`. Because the credential file holds your stored keys and the home patch holds global settings, a copy of the home is a complete, portable restore point before an update or migration.

## Concrete Example

`cp -a $DSH_HOME $DSH_HOME.bak` before updating dsh captures profiles, patches, and stored credentials.

## Analogy

It is a snapshot of your whole dotfile directory for dsh.

## Related Concepts

- [[dsh-home-env|$DSH_HOME]]
- [[credentials-local|Local Credentials]]
