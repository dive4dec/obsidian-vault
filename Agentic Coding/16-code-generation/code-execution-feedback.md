---
tags: [Code-Generation]
domain: Code Generation
---

# Code Execution Feedback

> **Domain:** [[_code-generation-moc|Code Generation]]

## 🎯 Motivation

After generating code, running it and feeding the results (success or errors) back to the model for improvement.

## 📋 Concrete Example

Generated code runs -> SyntaxError on line 3. Feedback to model: 'Fix the syntax error on line 3.' Model generates corrected code. Run again -> success. Iterative improvement.

## 🔗 Analogy

A chef tasting and adjusting - they cook, taste (feedback), adjust seasoning, cook again, taste again. Each iteration improves the dish. Code execution feedback does this with code.

## Related Concepts

- [[code-repair|Code Repair]]
- [[improvement-loop|Improvement Loop]]
- [[code-execution|Code Execution]]
