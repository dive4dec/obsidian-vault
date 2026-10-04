---
tags: [DSH-Security]
domain: Security & Permissions
---

# Supply Chain

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Supply-chain security is the trust placed in npm dependencies that dsh loads as plugins. dsh enforces peer ranges at install and boot against the dsh runtime version; a mismatch is refused unless an exemption is configured. The credential store's grant payload must survive a JSON round trip, so a corrupted or tampered payload is refused at the store boundary. The local store reloads the file on change and keeps the last good snapshot if a reload fails, so a malformed edit cannot silently replace working credentials.

## Concrete Example

A `cordis.patch.yml` that adds a plugin with a peer range incompatible with the dsh version fails at install; a credential file that fails to parse on reload keeps the last good content serving with a warning.

## Analogy

It is the restaurant that checks the supplier's health certificate (peer range) and refuses a delivery that arrived with the seal broken (malformed credential file).

## Related Concepts

- [[pinning|Version Pinning]]
- [[credentials-local|Local Credentials]]
- [[data-protection|Data Protection]]
