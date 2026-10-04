---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Cordis Runner

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

The Cordis runners execute dynamic Cordis packages at runtime. `dsh-cordis-host-runner` exposes a runtime inspection registry and keeps process-local dynamic definitions available, with host halves running in a `node:vm` realm. `dsh-cordis-client-runner` runs the browser half of those definitions after an approved request. Agents discover APIs through `tool-cordis`; no model tool creates dynamic definitions.

## Concrete Example

A host-runner config row sets `vmTimeoutMs: 5000`; the client runner mounts in a web client whose composition also mounts the host runner so a page can answer run requests.

## Analogy

They are a host and a page-side courier running the same delivery of dynamic packages.

## Related Concepts

- [[cordis|Cordis]]
- [[cosmokit|Cosmokit]]
- [[sdk-integration|SDK Integration]]
