---
tags: [DSH-Security]
domain: Security & Permissions
---

# Network Policy

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Network policy is the restriction of network access for confined operations. In dsh, the sandbox modes govern file effects only — network restriction and a uniform process-visibility guarantee are explicitly outside the sandbox vocabulary. A `bash` call under `workspace-write` can still `curl` to any URL; the sandbox confines the write, not the network. A deployment that needs network restriction must use a different mechanism (a container, a proxy, or a firewall) rather than relying on the sandbox.

## Concrete Example

A `bash` call under `read-only` that runs `curl http://example.com` succeeds in fetching the URL; the sandbox denies the write to the workspace but does not block the network request.

## Analogy

It is the office that locks the filing cabinet (sandbox) but leaves the window open (network) — you can't take the files out, but you can still call the outside.

## Related Concepts

- [[sandbox|Sandbox]]
- [[command-injection|Command Injection]]
- [[isolation|Isolation]]
