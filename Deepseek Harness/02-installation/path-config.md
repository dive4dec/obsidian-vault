---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Path Configuration

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Path configuration is how you override where dsh keeps its home and profile paths. `dsh-home-paths` provides the resolution helpers: an explicit configured path wins over `$DSH_HOME`, which wins over `~/.dsh`, and blank env values are ignored. A developer cares because pointing `$DSH_HOME` at a custom location is how you relocate or isolate the whole install's data.

## Concrete Example

Set `DSH_HOME` to a custom directory to relocate profiles, settings, and credentials; blank values are treated as unset and fall back to `~/.dsh`.

## Analogy

Like choosing a different filing cabinet instead of the default one.

## Related Concepts

- [[config-dir-locate|Locate Config Dir]]
- [[env-setup|Environment Setup]]
- [[backup-config|Back Up Config]]
