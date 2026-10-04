---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Setup Flow

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

The guided setup path takes you from a fresh install to a working agent session: install dsh, provide credentials, and boot a profile. There is no single magic command; it is the sequence of install, credentials setup, and first boot. A developer cares because it is the checklist from "just installed" to "can run a job".

## Concrete Example

Install dsh, set `DEEPSEEK_API_KEY` (or store it via the credentials service), then boot a profile such as `dsh --profile headless "hi"`.

## Analogy

Like a checklist from unboxing to first drive.

## Related Concepts

- [[prerequisites|Prerequisites]]
- [[first-session|First Session]]
- [[env-setup|Environment Setup]]
