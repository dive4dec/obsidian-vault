---
tags: [Code-Generation]
domain: Code Generation
---

# Runtime Error

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

Errors that occur during execution - division by zero, file not found, null reference. The model can suggest fixes.

## 📋 Concrete Example

Error: 'ZeroDivisionError: division by zero at line 10.' Model: 'Add a check: if divisor == 0: return 0 or raise a custom error.' Prevents the crash.

## 🔗 Analogy

A car breaking down on the road - everything was fine until you hit a pothole (runtime error). The car stops. The model suggests how to fix it and continue.

## Related Concepts

- [[code-repair|Code Repair]]
- [[error-handling|Error Handling]]
- [[exception|Exception]]
