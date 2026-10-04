---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Version Compatibility

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Installation and profile startup enforce declared DSH peer ranges against the same runtime version shown by `dsh --version`. Incompatible plugins require an explicitly acknowledged exact-version exemption stored in the profile's `compatibility.json`; neither plugin upgrades nor DSH upgrades inherit a grant. A compatibility refusal carries the `incompatible-version` code with each refused package's unsatisfied peers.

## Concrete Example

`dsh plugin --profile <profile> allow-version <package@version> --dsh-version <runtime> --accept-risk` grants an exemption after a risk warning.

## Analogy

It is a visa check: the plugin's declared peer range must match your passport, or you file a formal exemption.

## Related Concepts

- [[plugin-manager|Plugin Manager]]
- [[bootstrap|Bootstrap]]
