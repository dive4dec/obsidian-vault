---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Install Log

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Install and boot diagnostics are what you read when something fails: the launcher reports fatal configuration or boot failures (exiting nonzero), and credential/store problems surface with specific error codes rather than leaking secret values. A developer cares because these messages point at the layer that actually broke.

## Concrete Example

On a fatal configuration or boot failure `dsh` exits nonzero; the credentials store fails loud on an untrusted file with an error code, never quoting the secret.

## Analogy

Like the event log that tells you which alarm went off and why.

## Related Concepts

- [[install-troubleshoot|Install Troubleshooting]]
- [[doctor-command|Doctor Command]]
- [[verify-install|Verify Install]]
