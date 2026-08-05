---
tags: [Computer-Systems]
domain: Computer Systems
---

# Pub-Sub

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

Publish-Subscribe: publishers send messages, subscribers receive them. Decoupled communication.

## 📋 Concrete Example

Pub-Sub: User Service publishes `user_created` event. Email Service subscribes: sends welcome email. Analytics Service subscribes: tracks signup. Multiple subscribers, one publisher, no direct coupling.

## 🔗 Analogy

Pub-Sub is like a newspaper - the publisher (publisher) prints and distributes. Subscribers (subscribers) receive it. The publisher does not know who reads it. Multiple subscribers benefit from one publication.

## Related Concepts

- [[message-queue|Message Queue]]
- [[microservice|Microservice]]
- [[event-driven|Event-Driven]]
