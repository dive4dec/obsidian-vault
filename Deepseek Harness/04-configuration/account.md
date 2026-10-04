---
tags: [DSH-Configuration]
domain: Configuration
---

# DeepSeek Account

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-deepseek-account` lets account consumers read stored login state, start or cancel a browser login, and sign out without editing API keys. Host model consumers resolve account credentials only for the provider-configured inference origin, so an account login never leaks into other providers. `getDeviceIdentity()` returns the existing device and account IDs plus the login OS version string, without credentials or device creation.

## Concrete Example

A web client calls the account service to sign in through the browser; the resulting grant lives in the local credential store as a record.

## Analogy

It is the login state machine for a DeepSeek account, separate from raw API keys.

## Related Concepts

- [[account-platform|Account Platform]]
- [[settings-account|Account Settings]]
- [[credentials|Credentials]]
