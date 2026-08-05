---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Timeout

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

If a tool takes too long, the agent should give up rather than wait forever. A timeout prevents hanging.

## 📋 Concrete Example

Tool timeout: 30 seconds. If get_weather takes 31s, the agent stops waiting and says 'Weather service is slow, try again later.' It does not hang indefinitely.

## 🔗 Analogy

A bus wait limit - if the bus does not come in 10 minutes, you walk. You do not wait forever. Tool timeouts set a maximum wait time for tool responses.

## Related Concepts

- [[error-handling|Error Handling]]
- [[stop-condition|Stop Condition]]
- [[latency|Latency]]
