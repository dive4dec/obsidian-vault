---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Check

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Config checks validate a profile's configuration before or at boot. An invalid configured value is rejected when the plugin loads, so a typo fails loud instead of silently changing behavior — for example, an unrecognized sandbox `mode` fails at load. The config editor applies the same rule: writes that fail validation leave the file untouched.

## Concrete Example

Typoing `mode: read-onl` in the `dsh-sandbox-policy` entry makes the plugin reject the composition at load time.

## Analogy

It is the linter that runs at load: bad values never reach a running profile.

## Related Concepts

- [[config-validate|Validate Config]]
- [[config-troubleshoot|Config Troubleshooting]]
- [[sandbox-policy|Sandbox Policy]]
