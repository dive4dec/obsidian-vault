---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Execution

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

When the model calls a function, the application executes it. The tool runs real code - an API call, a file read, a calculation - and returns the result.

## 📋 Concrete Example

Model calls: calculate_compound_interest(principal=1000, rate=0.05, years=10). Application runs the actual Python function, gets 1628.89, returns it to the model.

## 🔗 Analogy

A cashier processing an order - the customer says what they want (function call), the cashier actually rings it up and processes payment (execution), then gives the receipt (return value).

## Related Concepts

- [[function-calling|Function Calling]]
- [[tool-use|Tool Use]]
- [[action-space|Action Space]]
