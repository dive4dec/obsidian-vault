---
tags: [Package-Ideation]
domain: Package Ideation
---

# Plugin Ecosystem

> **Domain:** [[_ideation-moc|Package Ideation]]

## 🎯 Motivation

Designing your package to accept plugins lets others extend it without forking. This multiplies your package's reach and builds a community around shared extensions.

## 📋 Concrete Example

`timeflex` defines a `CalendarExporter` interface. Anyone can write `timeflex-googlecal` as a plugin. Users install the plugins they need, and the core stays lean and stable.

## 🔗 Analogy

A phone's app store: the manufacturer does not build every app, they provide a platform. Third-party developers fill niches, making the phone far more useful than a closed device.

## Related Concepts

- [[composable-packages|Composable Packages]]
- [[optional-dependencies-extras|Optional Dependencies Extras]]
- [[open-closed|Open-Closed]]
