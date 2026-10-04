---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Schema

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Plugins declare the schemas of the configuration they accept, and the composition collects them. `--dump-config-schema` imports the composed tree's declared plugin schemas and prints JSON Schema for entries and patches instead of configuration values, so you can inspect the accepted keys without booting the profile. The settings forms are derived from the same plugin Configs, which is why they only expose volatile fields.

## Concrete Example

`dsh --profile web --dump-config-schema` prints the JSON Schema for the web profile's entries and patches.

## Analogy

It is the OpenAPI document for your profile's configuration keys.

## Related Concepts

- [[config-validate|Validate Config]]
- [[config-format|Config Format]]
- [[settings|Settings]]
