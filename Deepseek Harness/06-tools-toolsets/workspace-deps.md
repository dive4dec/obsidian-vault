---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Workspace Dependencies

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-workspace-dependencies' load_workspace_dependencies tool returns absolute paths and recorded distribution versions for the bundled Python, Node.js, and pnpm payload, changing neither PATH nor package-manager settings. Deployments that ship their own script runtimes (Desktop, container images) mount it so the agent asks where the runtimes live instead of discovering a system interpreter. The bundled Office skills reference this tool by name for their default interpreter.

## Concrete Example

load_workspace_dependencies returns e.g. the absolute python and node paths under the Harness home, used in place or copied under the home on first use.

## Analogy

A directory of which runtimes the harness itself ships.

## Related Concepts

- [[tools|Tools]]
- [[code-tools|Code Tools]]
- [[build-tool|Build via Bash]]
