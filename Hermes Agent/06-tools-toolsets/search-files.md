---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Search Files

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool for searching file contents or finding files by name. Ripgrep-backed. Used instead of grep/find.

## Concrete Example

search_files(pattern=TODO, target=content). Returns: file.py:15: TODO fix this. search_files(pattern=*.py, target=files). Returns: file1.py, file2.py.

## Analogy

A search engine for your computer - you type a keyword and find matching files or content. search_files searches your filesystem.

## Related Concepts

- [[file-tools|File Tools]]
- [[terminal-toolset|Terminal Toolset]]
- [[read-file|Read File]]
