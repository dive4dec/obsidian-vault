---
tags: [Software-Engineering]
domain: Software Engineering
---

# Dependency

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

External code your project relies on. Libraries, frameworks, packages. Must be managed carefully.

## 📋 Concrete Example

Dependencies: requests (HTTP), flask (web), pytest (testing). Your code imports and uses them. If requests has a bug, your code has a bug. If requests updates and breaks compatibility, your code breaks.

## 🔗 Analogy

Dependencies are like subcontractors on a construction site - you rely on the electrician, plumber, and painter. If the electrician does bad work, your building has electrical problems. Dependencies are your code's subcontractors.

## Related Concepts

- [[dependency-management-in-code|Dependency Management in Code]]
- [[requirements-file|Requirements File]]
- [[version-pinning|Version Pinning]]
