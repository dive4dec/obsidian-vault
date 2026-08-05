---
tags: [Installation-&-Setup]
domain: Installation & Setup
---

# Env File

> **Domain:** [[_installation-setup-moc|Installation & Setup]]

## Motivation

The .env file stores your API keys and tokens. Hermes reads it at startup. Without the right keys, Hermes cannot talk to AI models or use some tools.

## Concrete Example

You open .env and add a line OPENROUTER_API_KEY=sk-your-key-here. Save it, and Hermes can now reach the model.

## Analogy

Like the battery in your phone. Without it, the phone looks fine but will not turn on.

## Related Concepts

- [[config-file|Config File]]
- [[credential-pools|Credential Pools]]
- [[setup-wizard|Setup Wizard]]
