---
tags: [Package-Ideation]
domain: Package Ideation
---

# API First Design

> **Domain:** [[_ideation-moc|Package Ideation]]

## 🎯 Motivation

Designing the interface before implementation forces you to think about the user experience first. A clean API is easier to implement well than a messy one patched into shape later.

## 📋 Concrete Example

Write the README example before the code: `from mypkg import parse_timetable; parse_timetable("schedule.xlsx")`. If that call feels awkward, fix the design now — not after 500 lines of internals.

## 🔗 Analogy

Architects draw the floor plan and façade before pouring concrete. You live in the rooms, not the foundation, so the layout must feel right before construction begins.

## Related Concepts

- [[package-scope|Package Scope]]
- [[minimal-viable-package|Minimal Viable Package]]
- [[convention-over-configuration|Convention Over Configuration]]
