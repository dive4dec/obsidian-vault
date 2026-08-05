---
tags: [Configuration]
domain: Configuration
---

# Config Edit

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

Open the config file in your editor. Command: hermes config edit. Opens config.yaml in $EDITOR (vim, nano, etc.).

## Concrete Example

hermes config edit. Vim opens with config.yaml. You change model.default to gpt-4o. Save and quit. Next session uses gpt-4o.

## Analogy

Customizing your phone settings - you open the settings app and change options. hermes config edit opens the settings file for Hermes.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[config-set|Config Set]]
- [[config-sections|Config Sections]]
