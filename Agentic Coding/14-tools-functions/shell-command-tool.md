---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Shell Command Tool

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

A tool that lets the agent execute shell commands (ls, cd, grep, git, pip). Powerful but dangerous - needs guardrails.

## 📋 Concrete Example

Agent runs: `git status` -> sees modified files. Runs: `pytest` -> sees test results. Runs: `pip install requests` -> installs a package. Shell tools give agents full system access.

## 🔗 Analogy

Giving someone the keys to your computer - they can run any command. Powerful, but you need trust and guardrails. Shell command tools give agents the same power, with safety checks.

## Related Concepts

- [[tool-use|Tool Use]]
- [[terminal|Terminal]]
- [[guardrails|Guardrails]]
