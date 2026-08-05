---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Sandbox

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

A safe, isolated environment where code can run without affecting the main system. Essential for code interpreter tools.

## 📋 Concrete Example

The code interpreter runs in a Docker container with no network access, limited CPU and memory. If the agent's code crashes or has an infinite loop, only the sandbox is affected.

## 🔗 Analogy

A sandbox playground - kids can dig, build, and play freely. If they make a mess, it stays in the sandbox. The rest of the park is unaffected. Code sandboxes contain potential damage.

## Related Concepts

- [[code-interpreter|Code Interpreter]]
- [[isolation|Isolation]]
- [[security|Security]]
