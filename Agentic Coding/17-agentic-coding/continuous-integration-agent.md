---
tags: [Agentic-Coding]
domain: Agentic Coding
---

# Continuous Integration Agent

> **Domain:** [[_agentic-coding-moc|Agentic Coding]]

## 🎯 Motivation

An agent that monitors CI pipelines, investigates failures, and fixes broken builds automatically.

## 📋 Concrete Example

CI fails: 'Test test_login failed.' Agent: 1) Reads test output. 2) Identifies: login function changed, test not updated. 3) Updates test. 4) Pushes fix. 5) CI passes. Automated CI maintenance.

## 🔗 Analogy

A maintenance crew monitoring a building - when a pipe leaks, they fix it immediately. A CI agent monitors the build pipeline and fixes failures automatically.

## Related Concepts

- [[code-agent|Code Agent]]
- [[ci-cd|CI-CD]]
- [[error-recovery|Error Recovery]]
