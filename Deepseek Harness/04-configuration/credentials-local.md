---
tags: [DSH-Configuration]
domain: Configuration
---

# Local Credentials

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-credentials-local` keeps API keys and other secrets in a private file, defaulting to `<harness home>/.credentials.yaml`, created with owner-only permissions (POSIX refuses to load a file readable by another user — run `chmod 600`). Lookup follows one fixed order: launch environment, stored file, project `.env` (`<invocation cwd>/.env`), then home `.env` (`$DSH_HOME/.env`), so a saved value immediately overrides older `.env` values. The file is a versioned YAML document (`version: 1`) with `refs` and `records` sections, reloaded automatically (`watch: true`, `debounceMs: 100`).

## Concrete Example

Edit `refs: DEEPSEEK_API_KEY: sk-…` in `.credentials.yaml` directly and the store picks up the change on its next reload; records such as `llm-pi-ai/openai-codex` store sign-in grants verbatim.

## Analogy

It is a private, auto-reloading key file at the bottom of a four-layer precedence stack.

## Related Concepts

- [[credentials|Credentials]]
- [[api-key-env|API Key Env]]
- [[dsh-home-env|$DSH_HOME]]
