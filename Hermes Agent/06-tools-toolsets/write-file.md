---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Write File

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool that writes content to a file, overwriting if it exists. Creates parent directories. Used instead of echo/cat.

## Concrete Example

write_file(path=/home/alice/notes.txt, content=Hello World). File created with content. If it exists, overwritten. Simple file creation.

## Analogy

A pen and paper - you write content on the page. If the page has old content, you erase it first. write_file writes content to files.

## Related Concepts

- [[file-tools|File Tools]]
- [[read-file|Read File]]
- [[patch-tool|Patch Tool]]
