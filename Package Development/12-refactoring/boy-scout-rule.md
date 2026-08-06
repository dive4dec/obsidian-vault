---
tags: [Refactoring]
domain: Refactoring
---

# Boy Scout Rule

> **Domain:** [[_refactoring-moc|Refactoring]]

## 🎯 Motivation

"Leave the code better than you found it." Small, continuous improvements prevent decay and reduce technical debt without needing dedicated refactoring sprints.

## 📋 Concrete Example

While fixing a bug in `calculate_total()`, you notice a duplicated tax calculation. Extract it into `compute_tax()` right then — the code is now cleaner for the next visitor.

## 🔗 Analogy

Campers pick up their own trash and a little left by others, so the campsite stays clean for the next group. If everyone ignores small messes, the site becomes unlivable.

## Related Concepts

- [[technical-debt|Technical Debt]]
- [[code-smell|Code Smell]]
- [[refactoring-legacy|Refactoring Legacy]]
