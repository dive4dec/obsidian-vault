---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# JSON Mode

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

JSON mode is requesting structured JSON output from a model. dsh's core `GenerateOptions` vocabulary does not include a dedicated JSON/structured-output flag — sampling is `temperature`/`maxTokens`/`stop` only — but tool-call arguments are conventionally raw JSON strings, and malformed historical tool arguments fall back to `{}`.

## Concrete Example

Newly generated Messages tool arguments still require valid JSON objects, while historical arguments that are malformed or not objects are sent as `{}`.

## Analogy

Asking for the reply filled into a form rather than as a paragraph.

## Related Concepts

- [[response-format|Response Format]]
- [[tool-support|Model Tool Support]]
- [[model-config|Model Config]]
- [[streaming|Streaming]]

