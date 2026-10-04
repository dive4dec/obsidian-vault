---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Jupyter Integration

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Jupyter integration is running dsh alongside a JupyterHub server, so the agent shares the same environment as your notebooks. dsh still uses the Node runtime and its own `$DSH_HOME`; Jupyter simply co-hosts it. A developer cares because both can run in one environment and you manage the same credentials for both.

## Concrete Example

Run dsh in the same environment as a JupyterHub server, sharing the `DEEPSEEK_API_KEY` and `$DSH_HOME` the notebooks use.

## Analogy

Like sharing one desk with a colleague who has the same tools.

## Related Concepts

- [[remote-setup|Remote Setup]]
- [[env-setup|Environment Setup]]
- [[headless-install|Headless Install]]
