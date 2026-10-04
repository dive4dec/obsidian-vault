---
tags: [DSH-Installation]
domain: Installation & Setup
---

# First Session

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

The first session is booting a profile and actually running something through it, confirming the loop works end to end. This is where auto-initialization (for shipped profiles) plus credentials plus the model all have to line up. A developer cares because it is the real proof that install + config + auth are all correct.

## Concrete Example

Boot a profile and run a job, e.g. `dsh --profile headless "hi"`, to confirm a session actually completes.

## Analogy

Like the first lap around the track to prove the new car is road-legal.

## Related Concepts

- [[first-run|First Run]]
- [[smoke-test|Smoke Test]]
- [[init-profile|Initialize a Profile]]
