---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Code Tools

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Code tools are the fs and editor surface for reading and editing code: dsh-tool-fs's read (line-numbered), write (atomic), and edit (targeted literal), the str_replace_editor alternative, and glob/grep for navigating a codebase. The read-before-write/edit policy means the agent observes a file before mutating it. They compose with any bash or terminal surface for builds and tests.

## Concrete Example

Typical flow: grep to find the symbol, read with offset/limit for context, edit to apply a unique literal replacement.

## Analogy

A programmer's magnifier and precision scalpel for source files.

## Related Concepts

- [[fs-tool|Filesystem Tool]]
- [[str-replace-editor|Str-Replace Editor]]
- [[glob|Glob Tool]]
- [[build-tool|Build via Bash]]
