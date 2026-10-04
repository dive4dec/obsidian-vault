---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Web Search

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

web_search, from dsh-tool-web, searches the web and returns an optional answer plus source URLs, capped by searchMaxResults (default 8) and searchMaxQueries (default 4). The dsh-web-search-deepseek backend uses DeepSeek native search via account sign-in or DEEPSEEK_API_KEY, with results taken from structured search blocks rather than scraped reply text. A missing credential fails the call with a structured error.

## Concrete Example

web_search query="dsh-tools defineTool" with the dsh-web-search-deepseek backend returns sources to cite as markdown links.

## Analogy

Asking a search engine and getting a shortlist with URLs.

## Related Concepts

- [[web-fetch|Web Fetch]]
- [[web-tool|Web Tool]]
- [[search-tools|Search Tools]]
