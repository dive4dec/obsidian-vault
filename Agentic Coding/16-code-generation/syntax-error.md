---
tags: [Code-Generation]
domain: Code Generation
---

# Syntax Error

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

Errors in code structure - missing colons, wrong indentation, mismatched brackets. The model can detect and fix these.

## 📋 Concrete Example

Error: 'SyntaxError: expected ':' at line 5'. Model: 'You forgot the colon after the if statement. Add it: if x > 0:' Simple fix.

## 🔗 Analogy

Grammar mistakes in an essay - 'He dont know' should be 'He doesn't know'. Syntax errors are grammar mistakes in code. The model fixes them like a grammar checker.

## Related Concepts

- [[code-repair|Code Repair]]
- [[error-handling|Error Handling]]
- [[parsing|Parsing]]
