---
tags: [DSH-Configuration]
domain: Configuration
---

# Shell Environment

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-shell-env` provides the trusted `DSH_*` environment that every model shell call — bash or pwsh — runs with: built-in facts such as `DSH_HOME`, `DSH_SHELL=1`, the agent's `DSH_SESSION_ID`, and the launched profile's `DSH_PROFILE` and `DSH_PROFILE_DIR`. Plugin authors can register their own facts with declared keys, collected per execution and disposed with their plugin; duplicate ownership or undeclared runtime keys fail loudly. Configuration only picks the Harness home directory.

## Concrete Example

A script run by the bash tool can read `$DSH_SESSION_ID` and `$DSH_PROFILE_DIR` to locate its own session and profile.

## Analogy

It is the set of environment variables every agent shell inherits, like `CI=true` in a pipeline.

## Related Concepts

- [[env-vars|Environment Variables]]
- [[terminal-config|Terminal Config]]
- [[launch-env-config|Launch Environment Config]]
