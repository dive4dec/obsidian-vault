---
tags: [Refactoring]
domain: Refactoring
---

# Extract Class

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

A class doing too much violates Single Responsibility and becomes a maintenance nightmare. Splitting it into focused classes makes each piece easier to understand, test, and reuse.

## 📋 Concrete Example

A `User` class handling authentication, profile data, and email notifications can be split into `User`, `Authenticator`, and `NotificationService`. Each class now has one clear job.

## 🔗 Analogy

A cluttered toolbox that holds screws, paintbrushes, and tape is hard to use. Sorting tools into separate boxes — fasteners, painting, adhesives — lets you grab exactly what you need.

## Related Concepts

- [[extract-function|Extract Function]]
- [[single-responsibility|Single Responsibility]]
- [[move-method|Move Method]]
