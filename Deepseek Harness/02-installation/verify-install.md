---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Verify Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Verifying the install confirms the runtime is present and its version is usable. `dsh --version` prints the runtime version that installation and boot use for peer-range checks. A developer cares because a clean `dsh --version` is the fastest signal that the launcher and its runtime are healthy.

## Concrete Example

Run `dsh --version` to print the runtime version used for peer-range checks.

## Analogy

Like reading the dashboard to confirm the engine actually fired.

## Related Concepts

- [[version-check|Version Check]]
- [[smoke-test|Smoke Test]]
- [[install-troubleshoot|Install Troubleshooting]]
