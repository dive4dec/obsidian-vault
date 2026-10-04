---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Headless Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A headless install is a minimal footprint focused on the headless profile for automation, running one fresh persisted session, printing the final answer, and exiting. It auto-initializes the `headless` profile from its shipped template. A developer cares because it is the lightest way to script dsh in CI or servers with no GUI.

## Concrete Example

`dsh --profile headless "run the tests"` auto-initializes and runs the headless profile for one-shot automation.

## Analogy

Like buying just the engine, not the whole car, because you only need to do one job.

## Related Concepts

- [[install-modes|Install Modes]]
- [[first-session|First Session]]
- [[smoke-test|Smoke Test]]
