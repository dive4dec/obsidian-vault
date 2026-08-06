---
tags: [CI-CD-Automation]
domain: CI CD Automation
---

# cd pipeline

> **Domain:** [[_ci-cd-moc|CI CD Automation]]

## 🎯 Motivation

A `cd-pipeline` (Continuous Deployment or Delivery) automates releasing your package to users after CI passes. It removes manual release steps, ensuring every merged change is shipped consistently and quickly.

## 📋 Concrete Example

After tests pass on `main`, a CD job builds the package, publishes it to PyPI with `twine`, and creates a GitHub Release with auto-generated notes, all without human intervention.

## 🔗 Analogy

If CI is the quality checkpoint, CD is the delivery truck. Once the product passes inspection, the truck automatically ships it to the store (PyPI) without someone calling a courier.

## Related Concepts

- [[ci-pipeline|ci pipeline]]
- [[publish-on-tag|publish on tag]]
- [[semantic-release|semantic release]]
