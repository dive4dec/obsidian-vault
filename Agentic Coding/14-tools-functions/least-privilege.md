---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Least Privilege

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Give an agent the minimum tools it needs. Do not give delete access to a coding agent that only writes code.

## 📋 Concrete Example

A coding agent needs: read_file, write_file, run_code. It does NOT need: delete_file, send_email, make_payment. Least privilege limits potential damage if the agent makes a mistake.

## 🔗 Analogy

A hotel room key - it opens your room only, not every room. You get the minimum access needed. Least privilege gives agents the minimum tools needed for their task.

## Related Concepts

- [[tool-permission|Tool Permission]]
- [[security|Security]]
- [[guardrails|Guardrails]]
