---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# DSH Home

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`$DSH_HOME` is where profiles, settings, credentials, and session data live. An explicit configured path wins over `$DSH_HOME`, which wins over the default `~/.dsh`; an empty or whitespace-only `$DSH_HOME` is treated as unset, so a blank override never resolves the home to the current working directory. Developers care because backing up or migrating a DSH home moves the user's entire harness state.

## Concrete Example

Profiles boot from `$DSH_HOME/profiles/<name>`, and the home-level patch is `$DSH_HOME/cordis.patch.yml`.

## Analogy

It is the user's dot-folder for the harness — one directory that holds every preference and record.

## Related Concepts

- [[home-paths|Home Paths]]
- [[profile|Profile]]
- [[dsh-brand|Brand]]
