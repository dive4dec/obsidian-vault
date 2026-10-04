---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Cordis Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-cordis provides read-only runtime API discovery for agents developing or configuring installed Harness plugins. Call cordis_inspect_list to discover providers, then cordis_inspect_query for a provider's exact methods and types; the Host Config provider lists live Loader entries in pages with each entry's Config status. Persistent profile changes belong to the Plugin Manager, not this toolset.

## Concrete Example

cordis_inspect_query on the Config provider returns one entry's native Config projected into a self-contained JSON Schema document beside its packageDir.

## Analogy

The API reference book on the shelf for plugin developers.

## Related Concepts

- [[tools|Tools]]
- [[toolsets|Toolsets]]
- [[tool|Tool]]
