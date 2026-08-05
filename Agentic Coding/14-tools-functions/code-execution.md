---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Code Execution

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

Actually running code that the agent generated. This is different from the agent just writing code - execution produces real results.

## 📋 Concrete Example

Agent writes: `print(2**10)`. Execution returns: 1024. Without execution, the agent might guess 512 or 2048. With execution, the answer is exact.

## 🔗 Analogy

A scientist running an experiment - writing the procedure is not enough. You must actually run it to get results. Code execution is running the agent's code to get real outputs.

## Related Concepts

- [[code-interpreter|Code Interpreter]]
- [[tool-execution|Tool Execution]]
- [[sandbox|Sandbox]]
