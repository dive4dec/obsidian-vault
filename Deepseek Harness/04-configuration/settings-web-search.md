---
tags: [DSH-Configuration]
domain: Configuration
---

# Web Search Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-web-search` sets the provider's key, endpoint, and how many times one request may search. The page stages what you type and writes only on save; the key is written through the credentials domain rather than the settings document, so its literal never rides a response. The page exists while the Host serves the `web-search-deepseek` namespace.

## Concrete Example

Save the DeepSeek web-search API key on Plugins → Web search; it lands in the credential store, not in the settings document.

## Analogy

It is the search-provider credential form, with the key routed to the keyring.

## Related Concepts

- [[settings|Settings]]
- [[credentials|Credentials]]
