---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Web Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-web gives the model web_search and web_fetch, each independently enable-able through config. Search returns an optional answer plus source URLs and labels provider-controlled text as external and untrusted; fetch retrieves a page as text, excluding active and hidden content. If a configured provider is missing or unavailable, the tool stays visible and returns a structured error the model can act on.

## Concrete Example

Compose @deepseek-ai/dsh-web, a search backend like dsh-web-search-exa, then dsh-tool-web; { search: false } disables web_search alone.

## Analogy

The agent's browser and search box in one tool pair.

## Related Concepts

- [[web-fetch|Web Fetch]]
- [[web-search|Web Search]]
- [[search-tools|Search Tools]]
- [[tool-error|Tool Error]]
