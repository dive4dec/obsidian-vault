---
tags: [Security]
domain: Security
---

# Pairing

> **Domain:** [[_security-moc|Security]]

## Motivation

Authorizing specific users to communicate with Hermes via DM on messaging platforms. Unpaired users are ignored.

## Concrete Example

hermes pairing list. Approve: hermes pairing approve @user. Now @user can send messages to Hermes. Revoke: hermes pairing revoke @user. Access removed.

## Analogy

Adding a friend to your phone contacts - only people in your contacts can call you. Strangers are blocked. Pairing adds users to the Hermes contact list.

## Related Concepts

- [[gateway-security|Gateway Security]]
- [[dm-authorization|DM Authorization]]
- [[gateway|Gateway]]
