---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Present Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-present lets the agent declare final files as deliverables: the user opens the current source files in their default application, and the tool records paths and optional descriptions without copying contents. Files must be regular files accessible through the Session filesystem; relative paths resolve against the Session working directory. Delivery belongs to the calling Session — a parent must call present itself for files a subagent created.

## Concrete Example

present files=[{path: "report.xlsx", description: "Quarterly report"}] after the file exists; maxFiles defaults to 8.

## Analogy

Placing finished documents on the client's desk instead of emailing their contents.

## Related Concepts

- [[large-output|Large Output]]
- [[office-to-pdf|Office to PDF]]
- [[tool|Tool]]
