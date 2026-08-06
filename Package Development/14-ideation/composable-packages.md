---
tags: [Package-Ideation]
domain: Package Ideation
---

# Composable Packages

> **Domain:** [[_ideation-moc|Package Ideation]]

## 🎯 Motivation

Small, focused packages that work together let users build exactly what they need. Composition beats monoliths because users pick only the pieces relevant to their project.

## 📋 Concrete Example

Publish `timeflex-core` (parsing), `timeflex-ics` (calendar export), and `timeflex-cli` (command line). Users who only need parsing install `core`; those who want the CLI install all three.

## 🔗 Analogy

Lego bricks are sold in small sets, not one giant glued castle. You combine sets to build whatever you imagine — that flexibility is the whole point of the toy.

## Related Concepts

- [[single-responsibility-package|Single Responsibility Package]]
- [[optional-dependencies-extras|Optional Dependencies Extras]]
- [[plugin-ecosystem|Plugin Ecosystem]]
