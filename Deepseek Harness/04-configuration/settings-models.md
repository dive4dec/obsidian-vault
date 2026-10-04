---
tags: [DSH-Configuration]
domain: Configuration
---

# Model Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-models` is the Models settings page of the dsh web client: users configure API keys (stored write-only under the profile's credential reference), edit each provider's model list, and hand-declare custom pi-ai routes, with provider rows and one editor card at a time. The page joins the provider directory, the settings document, and the credential descriptions into one shared snapshot so a row's state stays consistent. It walks first-run users through a versioned preview notice and the conditional official-DeepSeek credential step.

## Concrete Example

Saving a DeepSeek API key from the Models page writes it through the credentials domain, so the literal never rides a response; the page shows whether the key is set via `describe`.

## Analogy

It is the provider console: rows per provider, keys stored by reference, models listed per provider.

## Related Concepts

- [[settings|Settings]]
- [[api-key-env|API Key Env]]
- [[settings-controller|Settings Controller]]
