---
tags: [Computer-Systems]
domain: Computer Systems
---

# Message Queue

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

A system for asynchronous communication between services. Sender puts messages in a queue, receiver processes them later.

## 📋 Concrete Example

Queue: Order Service sends 'process payment for order #123' to the queue. Payment Service reads it and processes. If Payment Service is busy, the message waits in the queue. No data lost.

## 🔗 Analogy

A message queue is like a restaurant's order ticket system - the waiter (sender) writes an order and puts it on the ticket rail (queue). The chef (receiver) picks it up when ready. The waiter does not need to wait; the order waits in the queue.

## Related Concepts

- [[microservice|Microservice]]
- [[asynchronous|Asynchronous]]
- [[pub-sub|Pub-Sub]]
