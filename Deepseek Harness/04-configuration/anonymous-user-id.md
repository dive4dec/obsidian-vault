---
tags: [DSH-Configuration]
domain: Configuration
---

# Anonymous User ID

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-anonymous-user-id` gives each harness home one anonymous identifier that correlates telemetry, feedback, and DeepSeek requests from the same installation without identifying the user. The random UUID is stored in `$DSH_HOME/.anonymous-user-id` (`$DSH_HOME` defaults to `~/.dsh`), persists across restarts, and is regenerated after you delete the file. Different harness homes use different identifiers, and the value contains no machine or account data.

## Concrete Example

Deleting `$DSH_HOME/.anonymous-user-id` gives the installation a fresh anonymous id on next use.

## Analogy

It is an anonymous device id, like a cookie that survives restarts but names no one.

## Related Concepts

- [[dsh-home-env|$DSH_HOME]]
- [[analytics-config|Product Analytics]]
