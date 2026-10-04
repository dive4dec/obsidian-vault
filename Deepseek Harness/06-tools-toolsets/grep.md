---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Grep Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The grep tool, from dsh-tool-fs-search, searches file contents with a ripgrep regex and returns matches grouped by file as Line N: <preview>. include is a single positive glob filter — comma-separated lists and negated values are rejected up front. A model needing surrounding context reads the matched file instead; routine budgets stay out of the model-facing schema.

## Concrete Example

grep pattern="defineTool" path=src include="*.ts" returns per-file matches with line numbers.

## Analogy

Ctrl-F across the whole codebase at once.

## Related Concepts

- [[glob|Glob Tool]]
- [[fs-search-tool|FS Search Tool]]
- [[search-tools|Search Tools]]
- [[fs-tool|Filesystem Tool]]
