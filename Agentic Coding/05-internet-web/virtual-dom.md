---
tags: [Internet-&-Web]
domain: Internet & Web
---

# Virtual DOM

> **Domain:** [[_internet-web-moc|Internet & Web]]

## 🎯 Motivation

React's internal representation of the DOM. Enables efficient UI updates by comparing changes.

## 📋 Concrete Example

Virtual DOM: React keeps a copy of the DOM in memory. When data changes, React: 1) updates the virtual DOM. 2) Compares with the real DOM. 3) Updates only the changed parts. Efficient.

## 🔗 Analogy

The virtual DOM is like a draft blueprint - the architect (React) sketches changes on a draft first, compares with the current blueprint, and only sends the differences to the builder (browser). Efficient, no wasted work.

## Related Concepts

- [[react|React]]
- [[dom|DOM]]
- [[rendering|Rendering]]
