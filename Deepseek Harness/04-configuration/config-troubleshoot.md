---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Troubleshooting

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Configuration problems in dsh surface at load, where invalid values are rejected instead of silently changing behavior: a typoed sandbox `mode` fails at load, an untrusted credential file fails at startup, and an unknown top-level key in `.credentials.yaml` is refused loudly. Diagnostics carry only error codes and positions — a key name is safe to print, a value is not. Use `--dump-config` to inspect the composed tree and `--dump-config-schema` to see the accepted keys without booting.

## Concrete Example

A `chmod 600`-error on the credential file, or an `FS_NOT_OBSERVED`-style policy denial, points at a specific config or permission cause.

## Analogy

It is the error log that names the offending key, never its secret value.

## Related Concepts

- [[config-check|Config Check]]
- [[config-validate|Validate Config]]
