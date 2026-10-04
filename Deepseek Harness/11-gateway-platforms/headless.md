---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Headless

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-headless` runs one dsh task from the command line and prints the final answer, then exits — no GUI, no server, no browser. It suits scripts, CI, and one-off jobs: it opens no ports and leaves nothing running behind. Exit code 0 means the task completed; 1 means it aborted or errored. The boundary is one task per invocation with no interactive follow-up.

## Concrete Example

`dsh --profile headless "run the tests"` uses the same model, tools, and safety defaults as every other surface; `--json` emits a JSON event stream and `--session-id` resumes a conversation.

## Analogy

A vending machine: one request, one dispense, the door closes.

## Related Concepts

- [[platforms|Platforms]]
- [[acp|ACP]]
- [[web|Web Platform]]
- [[platform-adapter|Platform Adapter]]
