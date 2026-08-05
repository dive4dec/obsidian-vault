---
tags: [Security]
domain: Security
---

# Sandbox Security

> **Domain:** [[_security-moc|Security]]

## Motivation

Code execution tools run in a sandboxed environment, isolating potentially dangerous code from the host system.

## Concrete Example

execute_code: Python runs in a restricted sandbox. File access is limited. Network access may be restricted. Even if the code is malicious, it cannot harm the host.

## Analogy

A quarantine room in a hospital - infectious patients are isolated. They cannot spread disease to other patients. The sandbox isolates untrusted code from the host system.

## Related Concepts

- [[security-overview|Security Overview]]
- [[code-execution|Code Execution]]
- [[tool-isolation|Tool Isolation]]
