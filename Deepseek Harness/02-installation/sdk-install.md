---
tags: [DSH-Installation]
domain: Installation & Setup
---

# SDK Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

An SDK install sets up the SDK profile for programmatic use, serving SDK clients over JSON-RPC stdio. The `sdk` profile is the default for the Python runtime; the `sdk-minimal` profile serves clients with the standalone minimal agent tree. A developer cares because this is how you embed dsh as a library rather than a GUI.

## Concrete Example

`dsh --profile sdk` serves SDK clients over JSON-RPC stdio; `dsh --profile sdk-minimal` uses the standalone minimal agent tree.

## Analogy

Like wiring up an API instead of opening the app window.

## Related Concepts

- [[install-modes|Install Modes]]
- [[acp-install|ACP Install]]
- [[install-profile|Installing a Profile]]
