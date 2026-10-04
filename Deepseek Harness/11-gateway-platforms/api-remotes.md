---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Remotes API

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-remotes` is the two-sided BFF for Host Remote capabilities selected by this application. The Host entry owns the forwarded-event selection and registers its application event source with the API Gateway; the Client entry imports generated `/remote` artifacts as runtime values, mounts each contribution through `ctx.remote.$mount()`, and re-exports their declaration merges. Client business packages depend on this facade rather than the Gateway implementation or individual Remote runtime entries.

## Concrete Example

The web client's `ctx.remote.settings`, `session`, and `job` namespaces are mounted by `ctx.remote.$mount()` from this package's Client entry.

## Analogy

The switchboard's master directory: every extension registers once here, and callers dial the directory, not the individual phones.

## Related Concepts

- [[gateway|API Gateway]]
- [[api-session|Session Controller]]
- [[client-connection|Client Connection]]
- [[api-versioning|API Versioning]]
