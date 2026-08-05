---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Function Chaining

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

The output of one function call becomes the input to the next. The model chains tools together for complex workflows.

## 📋 Concrete Example

Step 1: get_stock_price(`AAPL`) -> $185. Step 2: calculate_change(185, 180) -> +2.8%. Step 3: format_report(`AAPL`, 185, 2.8) -> 'AAPL: $185 (+2.8%)'. Chain of functions.

## 🔗 Analogy

An assembly line - each station takes the previous station's output and adds something. Station 1 makes the frame, Station 2 adds wheels, Station 3 paints. Function chaining is an assembly line for tool calls.

## Related Concepts

- [[function-calling|Function Calling]]
- [[sequential-execution|Sequential Execution]]
- [[pipeline|Pipeline]]
