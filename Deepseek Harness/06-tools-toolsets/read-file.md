---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Read File

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The read tool from dsh-tool-fs returns line-numbered UTF-8 content with a pagination footer: offset is 1-based and limit defaults to and caps at the configured readLimit. Reading a file before editing it satisfies the fs-observation-policy that guards writes and edits. Capped output means large files are paginated rather than dumped into context.

## Concrete Example

read file_path=/home/jovyan/transfer_AIChat/README.md offset=1 limit=40 returns lines 1-40 numbered, with a footer pointing at the next page.

## Analogy

Opening a document and reading a numbered page of it.

## Related Concepts

- [[fs-tool|Filesystem Tool]]
- [[write-file|Write File]]
- [[str-replace-editor|Str-Replace Editor]]
- [[tool-output|Tool Output]]
