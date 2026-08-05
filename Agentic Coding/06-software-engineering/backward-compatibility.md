---
tags: [Software-Engineering]
domain: Software Engineering
---

# Backward Compatibility

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

New versions should work with old code. Breaking compatibility forces all users to update.

## 📋 Concrete Example

Compatible: v2.0 can read files from v1.0. Users upgrade smoothly. Breaking: v2.0 cannot read v1.0 files. All users must convert. Avoid breaking compatibility unless necessary.

## 🔗 Analogy

Backward compatibility is like a new phone supporting old chargers - you can use your old charger (backward compatible) or you must buy a new one (breaking). Compatible upgrades are smooth; breaking ones are painful.

## Related Concepts

- [[version-pinning|Version Pinning]]
- [[dependency|Dependency]]
- [[version-control|Version Control]]
