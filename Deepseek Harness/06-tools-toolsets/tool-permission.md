---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Permission

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool permission is the gate — file, process, or network — a tool needs before it may run. dsh-tools enforces it as part of the allow/deny/ask policy around every call, and the sandbox policy (workspace-write or danger-full-access) bounds what file and process operations may touch. Tools declare their needs through the composition; the model cannot grant itself wider access.

## Concrete Example

web_fetch needs network permission and runs only with a configured provider; write needs the fs observation policy and the sandbox to allow the path.

## Analogy

The clearance level required to enter a secure room.

## Related Concepts

- [[tool-approval|Tool Approval]]
- [[toolsets|Toolsets]]
