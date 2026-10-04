---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Config Dump

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`--dump-config` and `--dump-default-config` print the profile's composed configuration tree without booting it, so you can see how the bundles, the profile patch, and the home patch composed together. `--dump-config-schema` prints JSON Schema for entries and patches instead of configuration values. The CLI rejects config-dump requests for the reserved `desktop` profile.

## Concrete Example

`dsh --profile web --dump-config` shows the composed tree before you pay for a full boot.

## Analogy

Reading the recipe's final combined ingredient list before turning on the oven.

## Related Concepts

- [[desktop-rejected|Desktop Rejection]]
- [[flag-reference|Flag Reference]]
- [[debug-mode|Debug Mode]]
