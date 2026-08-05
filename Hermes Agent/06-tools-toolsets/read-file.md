---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Read File

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool that reads file contents with line numbers. Pagination supported. Used instead of cat.

## Concrete Example

read_file(path=/home/alice/notes.txt). Returns: 1|Hello 2|World 3|Foo. Line numbers included. Pagination for large files.

## Analogy

A photocopier that also numbers pages - you copy a document and each page is numbered. read_file reads files with line numbers.

## Related Concepts

- [[file-tools|File Tools]]
- [[write-file|Write File]]
- [[terminal-toolset|Terminal Toolset]]
