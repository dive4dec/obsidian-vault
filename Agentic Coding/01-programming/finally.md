---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# Finally

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

In error handling, sometimes you need cleanup code to run whether or not an error occurred - finally always runs.

## 📋 Concrete Example

`try: f = open('file') ... finally: f.close()` - the file closes whether the try succeeded or raised an error.

## 🔗 Analogy

Cleaning up after a party - whether the party was a success or a disaster (exception), you still have to clean up (finally).

## Related Concepts

- [[try-except|Try-Except]]
- [[error-handling|Error Handling]]
- [[context-manager|Context Manager]]
