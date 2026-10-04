---
tags: [DSH-Configuration]
domain: Configuration
---

# Session Log Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-session-log` adds the **Upload Session Log when using the official model API** switch above the version number in Settings → General. It controls Session-log upload with DeepSeek API requests, shows the accepted Host setting, and saves each change immediately. The switch appears only while the Host exposes the upload setting; read-only clients cannot change it.

## Concrete Example

Toggle **Upload Session Log when using the official model API** in Settings → General; the setting saves through the settings document on change.

## Analogy

It is a privacy toggle for what telemetry ships with your model requests.

## Related Concepts

- [[settings-general|General Settings]]
- [[analytics-config|Product Analytics]]
- [[settings|Settings]]
