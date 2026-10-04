---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Environment Setup

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Environment setup means exporting the variables dsh needs to run: the DeepSeek API key and, optionally, an alternate `$DSH_HOME`. The launcher reads these from the launch environment or `$DSH_HOME/.env`. A developer cares because the launcher takes a snapshot of the environment at launch, so values set after startup are not seen.

## Concrete Example

Set `DEEPSEEK_API_KEY` (and optionally `DSH_HOME`) in the shell, or via `$DSH_HOME/.env`, before launching `dsh`.

## Analogy

Like setting the address labels on every envelope before you start mailing.

## Related Concepts

- [[prerequisites|Prerequisites]]
- [[api-key-setup|API Key Setup]]
- [[path-config|Path Configuration]]
