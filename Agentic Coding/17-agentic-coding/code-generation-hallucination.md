---
tags: [Agentic-Coding]
domain: Agentic Coding
---

# Code Generation Hallucination

> **Domain:** [[_agentic-coding-moc|Agentic Coding]]

## 🎯 Motivation

The agent might generate code that looks correct but has subtle bugs or uses non-existent libraries. Must be tested.

## 📋 Concrete Example

Hallucination: agent generates 'import smart_requests' (does not exist) or 'arr.sort_fast()' (not a real method). Looks plausible but fails. Testing catches these.

## 🔗 Analogy

A student who confidently writes a wrong formula - it looks right but gives wrong answers. Code generation hallucination is the agent confidently writing plausible-looking but incorrect code.

## Related Concepts

- [[hallucination|Hallucination]]
- [[testing|Testing]]
- [[code-execution-feedback|Code Execution Feedback]]
