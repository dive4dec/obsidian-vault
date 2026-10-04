---
tags: [DSH-Security]
domain: Security & Permissions
---

# Token

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

A token is an authentication credential — an OAuth grant, an API key, or a refresh token — stored as a durable credential record in `dsh-credentials`. Records are addressed by `<scope>/<id>` and managed through `readRecord`, `modifyRecord`, `describeRecord`, `listRecords`, and `deleteRecord`. A `grant` record carries the token payload verbatim; only the owning plugin can interpret it. The local store keeps a `grant` payload intact across a JSON round trip and refuses values that cannot be read back exactly.

## Concrete Example

```ts
await ctx.credentials.modifyRecord(key, async () => ({ kind: 'grant', payload: { token: 'sk-…', refresh: 'rft_…' } }))
```
The token is stored in `$DSH_HOME/.credentials.yaml` and resolved per request.

## Analogy

It is a library card: the card has a barcode (token) that the front desk (credential store) reads, but the front desk never writes the barcode on a public board.

## Related Concepts

- [[credentials|Credentials]]
- [[authorization|Authorization]]
- [[secret|Secret]]
