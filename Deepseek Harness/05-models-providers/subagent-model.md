---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Subagent Model

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

A subagent model is the model a spawned subagent runs on. Subagents can inherit or be given a model route independent of the parent; the parent agent and each subagent resolve their provider and model at request time, so a child can run on a different model than the loop that spawned it.

## Concrete Example

A spawned subagent that omits a route falls back to the `dsh-agent-default-model` selection, so it can run on a different model than its parent session.

## Analogy

A junior colleague who can use a different tool than the lead on the same project.

## Related Concepts

- [[agent-model|Agent Model]]
- [[default-model|Default Model]]
- [[model-selection|Model Selection]]
- [[multi-provider|Multi-Provider]]

