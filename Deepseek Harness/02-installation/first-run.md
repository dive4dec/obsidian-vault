---
tags: [DSH-Installation]
domain: Installation & Setup
---

# First Run

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

The first run of a shipped profile triggers auto-initialization and then boots it, so `dsh web` or `dsh --profile headless` behaves differently the first time than later. A developer cares because the first invocation does setup work (creating the profile under `$DSH_HOME/profiles/<name>`) in addition to running.

## Concrete Example

The first `dsh --profile headless "hi"` auto-initializes the headless profile from its shipped template, then runs one fresh persisted session.

## Analogy

Like a new phone that runs setup before you can use it.

## Related Concepts

- [[init-profile|Initialize a Profile]]
- [[first-session|First Session]]
- [[setup-wizard|Setup Flow]]
