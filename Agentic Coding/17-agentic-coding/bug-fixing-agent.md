---
tags: [Agentic-Coding]
domain: Agentic Coding
---

# Bug Fixing Agent

> **Domain:** [[_agentic-coding-moc|Agentic Coding]]

## 🎯 Motivation

An agent specialized in finding and fixing bugs. It reads the bug report, reproduces the issue, finds the root cause, and fixes it.

## 📋 Concrete Example

Bug report: 'Login fails when password contains @.' Agent: 1) Reads auth code. 2) Tests with password containing @. 3) Finds: URL encoding issue. 4) Fixes: add urllib.parse.quote(). 5) Tests: passes. 6) Commits.

## 🔗 Analogy

A pest control expert - you report 'ants in the kitchen.' They inspect, find the nest, eliminate it, and seal entry points. A bug fixing agent does this with software bugs.

## Related Concepts

- [[code-agent|Code Agent]]
- [[debugging|Debugging]]
- [[code-repair|Code Repair]]
