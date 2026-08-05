---
tags: [Software-Engineering]
domain: Software Engineering
---

# Merge Conflict

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

When two branches change the same code. Git cannot auto-merge. The developer must resolve it.

## 📋 Concrete Example

Conflict: Alice changed line 5 to 'return a + b'. Bob changed line 5 to 'return a * b'. Git: 'CONFLICT on line 5.' Developer must choose: addition or multiplication? Resolve and commit.

## 🔗 Analogy

A merge conflict is like two people editing the same sentence - Alice: 'The sky is blue.' Bob: 'The sky is gray.' You must decide: blue or gray? Someone has to choose. Git flags the conflict; the developer resolves it.

## Related Concepts

- [[merge|Merge]]
- [[git|Git]]
- [[branch|Branch]]
