---
tags: [Configuration]
domain: Configuration
---

# Session Search Model

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

An auxiliary model used for searching past sessions. Usually an embedding model.

## Concrete Example

model.session_search: text-embedding-3-small. You search: docker debugging. The model embeds your query, finds similar past sessions, returns results.

## Analogy

A search engine indexing old emails - you type a keyword and it finds matching emails. The session search model indexes and searches past conversations.

## Related Concepts

- [[auxiliary-models|Auxiliary Models]]
- [[model-config|Model Config]]
- [[session-search|Session Search]]
