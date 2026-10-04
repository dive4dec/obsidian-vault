---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Search Tools

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Search tools combine the ways the agent finds things: glob for file paths, grep for file contents, and web_search for the wider web. glob and grep live in dsh-tool-fs-search and need no host rg install; web_search is enable-able independently in dsh-tool-web. Search guidance tells the model to follow up with web_fetch when it needs the full content of a result.

## Concrete Example

A typical investigation: glob src/**/*.ts, grep pattern="defineTool" include="*.ts", then web_search for docs when local context runs out.

## Analogy

A card catalog, a full-text index, and a search engine in one drawer.

## Related Concepts

- [[glob|Glob Tool]]
- [[grep|Grep Tool]]
- [[web-search|Web Search]]
- [[fs-search-tool|FS Search Tool]]
