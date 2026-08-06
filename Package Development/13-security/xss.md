---
tags: [Security]
domain: Security
---

# XSS

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Cross-Site Scripting (XSS) happens when user input is rendered as HTML without escaping. Attackers can steal sessions or deface pages by injecting malicious `<script>` tags.

## 📋 Concrete Example

If a comment contains `<script>alert('hacked')</script>`, rendering it raw executes the script. Use an escaping function like `markupsafe.escape()` so the brackets become `&lt;script&gt;` — harmless text.

## 🔗 Analogy

A bulletin board where anyone can pin notes. If notes are printed as-is, someone could pin a fake "evacuation" notice. A transparent cover frame shows the note but stops it from looking official.

## Related Concepts

- [[input-validation|Input Validation]]
- [[sensitive-data-exposure|Sensitive Data Exposure]]
- [[authentication-patterns|Authentication Patterns]]
