---
tags: [DSH-Configuration]
domain: Configuration
---

# Account Platform

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-deepseek-account-platform` signs in through the system browser and keeps the account credential in the existing local credential store, rather than inventing a separate secret file. Local cancellation prevents late callbacks and exchange responses from signing the user in after they changed their mind. Device identity reads validate the existing login device record and expose only its ID, the current account ID, and the shared login OS version string.

## Concrete Example

A grant payload such as an OAuth access/refresh token pair is stored verbatim under a record key, since only the owning plugin can interpret it.

## Analogy

It is the browser sign-in flow that parks its token in the same credential store as API keys.

## Related Concepts

- [[account|DeepSeek Account]]
- [[credentials-local|Local Credentials]]
- [[settings-account|Account Settings]]
