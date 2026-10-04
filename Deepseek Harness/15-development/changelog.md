---
tags: [DSH-Development]
domain: Development & Internals
---

# Changelog

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Changelog tracking in dsh follows per-package versioning across the monorepo, with the package README serving as the living record of each package's behavior, configuration keys, and known limitations. Because profiles enforce `engines.dsh` peer ranges, a release's version number is part of the compatibility contract users can inspect.

## Concrete Example

Each package's `package.json` `version` is checked by install and startup against the profile's declared `engines.dsh` range; incompatible pairs require an exact-version exemption recorded in the profile's `compatibility.json`.

## Analogy

It is a passenger manifest that lets anyone verify which version of which component is on board.

## Related Concepts

- [[release|Releasing]]
- [[semver|Semantic Versioning]]
- [[peer-deps|Peer Dependencies]]
