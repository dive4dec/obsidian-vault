---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Web Fetch

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

web_fetch, provided by dsh-tool-web over the dsh-web service, retrieves a public HTTP(S) page's content as bounded, decoded text without sending credentials. The dsh-web-fetch-http backend enforces URL validation, public-address resolution, connection pinning, same-origin redirects, and byte/character caps, and returns non-2xx responses as results rather than errors. The model-facing tool renders the provider's bodies.

## Concrete Example

web_fetch url=https://example.com/page returns the decoded page text; binary data and unsupported content types are rejected.

## Analogy

Downloading a page and keeping only its readable text.

## Related Concepts

- [[web-tool|Web Tool]]
- [[web-search|Web Search]]
- [[tool-error|Tool Error]]
