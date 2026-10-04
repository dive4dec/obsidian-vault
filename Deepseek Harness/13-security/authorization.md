---
tags: [DSH-Security]
domain: Security & Permissions
---

# Authorization

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-authorization` lets a configuration UI or another caller obtain credentials through a human-guided sign-in, code entry, or question. Each attempt sends notices and prompts only to the surface that started it; the flow must commit the credential record through `ctx.credentials` before resolving. The seam reports `authorized` only after the new credential has been stored; a refusal or withdrawal reports `cancelled`; failures remain errors. It is the part of the product that talks to a human when configuration cannot supply a secret.

## Concrete Example

A flow keyed by `credentialKey('llm-pi-ai', 'openai-codex')` opens a browser sign-in, prompts for a code, exchanges it for a token, and commits `ctx.credentials.modifyRecord(key, () => ({ kind: 'grant', payload: { token } }))`.

## Analogy

It is the concierge at a hotel who calls the guest's room to say "please open your browser to this URL" — the concierge does not know the password; they just relay the steps.

## Related Concepts

- [[credentials|Credentials]]
- [[credentials-local|Local Credentials]]
- [[secret|Secret]]
- [[token|Token]]
