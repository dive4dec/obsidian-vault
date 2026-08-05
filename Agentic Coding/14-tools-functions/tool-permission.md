---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Permission

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Not all agents should have access to all tools. Permissions control which agents can use which tools.

## 📋 Concrete Example

Permissions: JuniorAgent can use read_file and search_web. SeniorAgent can also use write_file and delete_file. AdminAgent can use shell_command. Least privilege: give only what is needed.

## 🔗 Analogy

School access levels - students can read books, teachers can add books, librarians can remove books. Each role has different permissions. Tool permissions do this for agents.

## Related Concepts

- [[guardrails|Guardrails]]
- [[security|Security]]
- [[least-privilege|Least Privilege]]
