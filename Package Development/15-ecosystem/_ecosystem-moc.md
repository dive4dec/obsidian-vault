---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# Package Ecosystem MOC

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

The Python packaging ecosystem — PyPI, Conda, wheels, lock files — is how code is shared and reproduced. Understanding it lets you publish confidently and debug dependency issues fast.

## 📋 Concrete Example

When `pip install` fails with a resolution error, knowing the ecosystem helps: check the dependency tree, look for conflicting pins, and use `uv` or `pip-tools` to recompile a compatible lock file.

## 🔗 Analogy

A city's transit system: buses, trains, and ferries all connect. Knowing the map lets you travel anywhere; ignoring it leaves you stranded at the first transfer. The ecosystem is Python's transit map.

## Repositories and Managers

- [[pypi-ecosystem|PyPI Ecosystem]]
- [[conda-ecosystem|Conda Ecosystem]]
- [[uv|uv]]
- [[pip-tools|pip-tools]]

## Dependencies

- [[dependency-tree|Dependency Tree]]
- [[dependency-graph|Dependency Graph]]
- [[dependency-resolution|Dependency Resolution]]
- [[transitive-dependencies|Transitive Dependencies]]
- [[circular-dependencies|Circular Dependencies]]
- [[optional-dependencies-extras|Optional Dependencies Extras]]

## Versioning and Locking

- [[version-pinning|Version Pinning]]
- [[requirements-txt|requirements.txt]]
- [[lock-file|Lock File]]

## Binary Distribution

- [[platform-wheels|Platform Wheels]]
- [[abi-wheels|ABI Wheels]]
- [[manylinux|manylinux]]
- [[musllinux|musllinux]]
