---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Credentials Setup

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Credentials setup is about where secret values live so they stay out of configuration. `dsh-credentials` is the seam (referencing keys like `DEEPSEEK_API_KEY`), and `dsh-credentials-local` is the default file-backed store under your harness home. A developer cares because stored keys rotate without a restart and never appear in config UIs.

## Concrete Example

`dsh-credentials-local` stores keys in `<harness home>/.credentials.yaml` (owner-only, `chmod 600`); resolution precedence is launch env > stored file > project `.env` > home `.env`.

## Analogy

Like a locked safe you point references at instead of writing the secret everywhere.

## Related Concepts

- [[api-key-setup|API Key Setup]]
- [[permissions-setup|Permissions Setup]]
- [[env-setup|Environment Setup]]
