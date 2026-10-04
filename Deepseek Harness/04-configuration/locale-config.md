---
tags: [DSH-Configuration]
domain: Configuration
---

# Locale

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-locale` switches the web GUI between the shipped English and Chinese locales or languages added by client plugins. User selections take effect immediately; loopback pages persist them in `$DSH_HOME/cordis.patch.yml`, while non-loopback pages keep them only for the current process. New browsers use the first supported language requested by the browser until an allowed stored preference arrives.

## Concrete Example

Switch to Chinese in the locale setting; a loopback browser persists it to `$DSH_HOME/cordis.patch.yml`.

## Analogy

It is the language picker that remembers your choice in the home patch.

## Related Concepts

- [[theme-config|Theme]]
- [[settings-general|General Settings]]
