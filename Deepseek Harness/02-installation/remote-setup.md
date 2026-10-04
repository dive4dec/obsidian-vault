---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Remote Setup

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Remote setup is standing up dsh on a remote or headless server you connect to, rather than on a desktop. It follows the same prerequisites (Node runtime, registry access, credentials) but typically uses the headless or web profile. A developer cares because the entry mode and how you reach the UI differ from local desktop use.

## Concrete Example

Install dsh on the server, set `DEEPSEEK_API_KEY`, and run `dsh web` or `dsh --profile headless` for remote/headless use.

## Analogy

Like setting up a workstation in another office and dialing into it.

## Related Concepts

- [[jupyter-integration|Jupyter Integration]]
- [[headless-install|Headless Install]]
- [[prerequisites|Prerequisites]]
