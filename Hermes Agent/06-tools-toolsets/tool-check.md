---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Check

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Verify that a tool is working correctly. Command: hermes tools check TOOL_NAME.

## Concrete Example

hermes tools check terminal. Output: terminal: OK (backend: local, shell: bash). hermes tools check web_search: OK (provider: hosted). Verify tools before relying on them.

## Analogy

A diagnostic test on a car - you check if each part works. Tool check verifies each tool is functional.

## Related Concepts

- [[hermes-tools|Hermes Tools]]
- [[toolsets|Toolsets]]
- [[tool-handler|Tool Handler]]
