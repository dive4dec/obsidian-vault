---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Result

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

The output returned to the model after tool execution. The model uses this to continue reasoning and respond to the user.

## 📋 Concrete Example

Tool result: {`temperature`: 28, `condition`: `sunny`, `humidity`: 65}. Model reads this and responds: 'It is 28 degrees and sunny in Hong Kong today.'

## 🔗 Analogy

A lab technician running a test - the doctor orders a blood test (function call). The technician runs it (execution). The results come back (tool result). The doctor interprets them for the patient.

## Related Concepts

- [[tool-execution|Tool Execution]]
- [[observation|Observation]]
- [[action-observation-loop|Action-Observation Loop]]
