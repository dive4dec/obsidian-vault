---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Patch Tool

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool for targeted find-and-replace edits in files. Uses fuzzy matching. Used instead of sed/awk.

## Concrete Example

patch(path=file.py, old=print(hello), new=print(world)). Finds print(hello) in file.py, replaces with print(world). Targeted edit.

## Analogy

A correction pen - you fix a specific word without rewriting the whole page. The patch tool fixes specific text without rewriting the whole file.

## Related Concepts

- [[file-tools|File Tools]]
- [[read-file|Read File]]
- [[write-file|Write File]]
