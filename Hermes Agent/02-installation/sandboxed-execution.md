---
tags: [Installation-&-Setup]
domain: Installation & Setup
---

# Sandboxed Execution

> **Domain:** [[_installation-setup-moc|Installation & Setup]]

## Motivation

Hermes can run Python code in a sandbox, an isolated space that cannot touch your real files. This is safer when running untrusted code or experimenting.

## Concrete Example

Hermes runs a script in the sandbox. The script tries to delete a file, but the sandbox blocks it. Your real files are safe.

## Analogy

Like a practice room with rubber walls. You can throw things around and nothing breaks.

## Related Concepts

- [[venv|Venv]]
- [[command-approval|Command Approval]]
- [[code-execution-tool|Code Execution Tool]]
