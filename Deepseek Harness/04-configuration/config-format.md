---
tags: [DSH-Configuration]
domain: Configuration
---

# Config Format

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

dsh configuration has a fixed shape: a profile's `package.json` carries the `dsh.profile` manifest (ordered `bundles` list) beside out-of-tree dependencies, and each patch layer is YAML keyed by plugin entry id (e.g. `ui-settings`, `shell`). Secrets never appear as values — entries name credential keys instead, such as `apiKeyEnv: DEEPSEEK_API_KEY`, which `dsh-credentials` resolves per request.

## Concrete Example

A settings entry for an LLM adapter writes `apiKeyEnv: DEEPSEEK_API_KEY` rather than the key itself, and a patch layer addresses the plugin by its profile entry id.

## Analogy

The config document is a manifest plus named patch layers, and secrets are references, not values — like environment-variable names in your YAML.

## Related Concepts

- [[config-file|Config File]]
- [[cordis-config|Cordis Config]]
- [[api-key-env|API Key Env]]
- [[config-schema|Config Schema]]
