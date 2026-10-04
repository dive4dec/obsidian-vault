---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Write File

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The write tool from dsh-tool-fs creates or atomically replaces a file so torn state never appears on disk. Under dsh-fs-observation-policy a write must follow a successful read of the existing file — the default fs-observation-policy dsh enforces. Failures return stable error codes with recovery instructions instead of silent corruption.

## Concrete Example

write file_path=notes.md content=... atomically replaces notes.md; without the observation policy the write would be unconditional.

## Analogy

Saving a document atomically, all-or-nothing.

## Related Concepts

- [[fs-tool|Filesystem Tool]]
- [[read-file|Read File]]
- [[str-replace-editor|Str-Replace Editor]]
- [[large-output|Large Output]]
