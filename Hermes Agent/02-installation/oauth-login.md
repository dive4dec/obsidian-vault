---
tags: [Installation-&-Setup]
domain: Installation & Setup
---

# OAuth Login

> **Domain:** [[_installation-setup-moc|Installation & Setup]]

## Motivation

OAuth is a secure way to log in without sharing your password. Hermes uses OAuth for some providers like Nous Portal and OpenAI Codex. You authorise once and Hermes gets a token.

## Concrete Example

You run hermes auth add nous. A browser opens, you log in to Nous Portal, and Hermes gets a token saved in auth.json.

## Analogy

Like tapping your student ID to enter the school gate. The gate checks you are a student without you typing a password.

## Related Concepts

- [[setup-portal|Setup Portal]]
- [[credential-pools|Credential Pools]]
- [[env-file|Env File]]
