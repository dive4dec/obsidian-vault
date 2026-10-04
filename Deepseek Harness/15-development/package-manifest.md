---
tags: [DSH-Development]
domain: Development & Internals
---

# Package Manifest

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-package-manifest` is the shared TypeScript declaration for package identity, runtime requirements, and DSH plugin metadata: `DshPackageManifest` for package.json fields, `DshManifest` for public fields under `dsh`, and member types like `DshClientManifest`. Each reader owns JSON parsing and validation; the package supplies types only, and readers never infer defaults for omitted fields.

## Concrete Example

`engines.dsh` declares the compatible DSH versions as a SemVer range beside `engines.node` and `engines.npm`, and `dsh.manifestVersion: 1` marks the manifest format independently of the npm package version.

## Analogy

It is the shared type contract that every manifest reader agrees on before anyone parses a file.

## Related Concepts

- [[peer-deps|Peer Dependencies]]
- [[semver|Semantic Versioning]]
- [[plugin-development|Plugin Development]]
