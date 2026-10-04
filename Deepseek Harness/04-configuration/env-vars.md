---
tags: [DSH-Configuration]
domain: Configuration
---

# Environment Variables

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

Environment variables configure dsh in two families: the `DSH_*` facts injected into every model shell call (`DSH_HOME`, `DSH_SHELL=1`, `DSH_SESSION_ID`, `DSH_PROFILE`, `DSH_PROFILE_DIR`), and API keys like `DEEPSEEK_API_KEY`, which settings reference by name. The launch environment is a frozen snapshot taken at launch — a variable exported after startup is invisible to the running profile.

## Concrete Example

`DEEPSEEK_API_KEY=… dsh` supplies the key for this run only, wins over the stored file, and is reported read-only by the credentials store.

## Analogy

Env vars are the command-line layer of config: they win for the current run, but they do not persist.

## Related Concepts

- [[dsh-home-env|$DSH_HOME]]
- [[api-key-env|API Key Env]]
- [[shell-env|Shell Environment]]
- [[launch-env-config|Launch Environment Config]]
