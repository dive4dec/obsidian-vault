---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Install Troubleshooting

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Install troubleshooting covers the common failures: peer-range mismatch between a plugin and the `dsh --version` runtime, and network problems reaching the registry. Incompatible plugins require an explicitly acknowledged exact-version exemption; network failures are often proxy or firewall related. A developer cares because these are the two most frequent blockers.

## Concrete Example

A peer mismatch is resolved with an exact-version exemption; a registry connection failure is usually a proxy (`HTTPS_PROXY`) or firewall issue.

## Analogy

Like a checklist for why the car will not start: wrong fuel, or a blocked road.

## Related Concepts

- [[version-check|Version Check]]
- [[install-compatibility|Compatibility Check]]
- [[proxy-setup|Proxy Setup]]
