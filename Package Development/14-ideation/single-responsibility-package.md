---
tags: [Package-Ideation]
domain: Package Ideation
---

# Single Responsibility Package

> **Domain:** [[_ideation-moc|Package Ideation]]

## 🎯 Motivation

A package should do one thing well, just like a well-designed class. Focused packages are easier to understand, test, and combine with others than monolithic "do-everything" bundles.

## 📋 Concrete Example

Instead of `school-utils` handling timetables, grades, and attendance, publish `timeflex` for timetables, `grade-calc` for grades, and `roll-call` for attendance. Each is independently useful.

## 🔗 Analogy

A specialty bakery makes excellent bread. A store selling bread, shoes, and lightbulbs does none of them well. Focus is what builds reputation and quality.

## Related Concepts

- [[package-scope|Package Scope]]
- [[composable-packages|Composable Packages]]
- [[single-responsibility|Single Responsibility]]
