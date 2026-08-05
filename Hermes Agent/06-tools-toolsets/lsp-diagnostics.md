---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# LSP Diagnostics

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Language Server Protocol integration. Hermes can get code diagnostics (errors, warnings) from LSP servers.

## Concrete Example

When editing Python, LSP checks: line 5: undefined variable foo. Hermes sees this and fixes it. Real-time code analysis.

## Analogy

A spell checker for code - it underlines errors as you type. LSP diagnostics give Hermes real-time code error checking.

## Related Concepts

- [[toolsets|Toolsets]]
- [[code-execution|Code Execution]]
- [[ide-integration|IDE Integration]]
