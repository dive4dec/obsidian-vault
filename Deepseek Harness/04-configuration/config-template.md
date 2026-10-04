---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Template

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Shipped templates are the starting composition for a new profile. The `web`, `headless`, `sdk`, `sdk-minimal`, and `acp` profiles auto-initialize on first use from shipped templates, and `dsh --profile <name> --from-default-profile <template>` creates another profile from a template at an unused, non-shipped name. A template supplies the base patch layer that bundles and user overrides then compose on top of.

## Concrete Example

`dsh --profile myapp --from-default-profile web` copies the web template into a new `myapp` profile, then boots it.

## Analogy

It is a starter kit: a ready profile you fork before customizing.

## Related Concepts

- [[config-file|Config File]]
- [[config-precedence|Config Precedence]]
