---
tags: [Software-Engineering]
domain: Software Engineering
---

# Error Handling

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Code that anticipates and handles errors gracefully: try/except, error messages, fallbacks.

## 📋 Concrete Example

Error handling: try: result = 10 / 0. except ZeroDivisionError: result = 'Error: cannot divide by zero.' The program does not crash; it handles the error gracefully. Better user experience.

## 🔗 Analogy

Error handling is like having a spare tire - if you get a flat (error), you do not abandon the car. You put on the spare (handle the error) and continue. Error handling lets programs survive problems.

## Related Concepts

- [[bug|Bug]]
- [[exception|Exception]]
- [[graceful-degradation|Graceful Degradation]]
