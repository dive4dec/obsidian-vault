---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Badge

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`dsh-skill-badge` is a bundled, configuration-free provider that exposes the `dsh-badge` skill so content produced with DeepSeek Harness can carry an official "powered by dsh" attribution badge. It ships both Markdown snippets (Shields.io-based) and a packaged PNG for targets that cannot fetch remote images. The shipped CLI composition includes the plugin disabled, so a deployment enables it explicitly.

## Concrete Example

Enabling `@deepseek-ai/dsh-skill-badge` registers one immutable skill, `dsh-badge`, at the bundled skill rank (600) with a packaged `assets/dsh-badge.png` resource.

## Analogy

A preprinted sticker sheet the agent can drop onto a document to mark its origin.

## Related Concepts

- [[skill-registry|Skill Registry]]
- [[skill-availability|Skill Availability]]
- [[skill-system|Skill System]]
