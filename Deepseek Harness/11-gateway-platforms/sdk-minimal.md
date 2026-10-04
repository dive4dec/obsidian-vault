---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# SDK Minimal

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh --profile sdk-minimal` serves SDK clients with the standalone minimal agent tree: by default it advertises only a platform-selected persistent shell, persists sessions as uncompressed JSONL, and selects the model from the SDK initialization request. It deliberately excludes `dsh-base`, Web, settings, managed credentials, telemetry, compaction, filesystem tools, skills, jobs, and subagents. Its danger-full-access policy means the shell may modify any path available to the process, so use it only with an isolated workspace.

## Concrete Example

`dsh --profile sdk-minimal` gives an SDK client a small, explicit cross-platform coding-agent runtime with one default shell tool.

## Analogy

A stripped-down bike frame: nothing you don't bolt on yourself, and no guard rails either.

## Related Concepts

- [[sdk|SDK]]
- [[sdk-app|SDK App]]
- [[sdk-protocol|SDK Protocol]]
- [[platforms|Platforms]]
