---
tags: [Computer-Systems]
domain: Computer Systems
---

# API Gateway

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

A single entry point for multiple APIs. Handles routing, authentication, rate limiting.

## 📋 Concrete Example

Gateway: all API requests go to gateway.example.com. Gateway: authenticates, routes to User Service or Product Service, rate limits, logs. One entry point, many services behind it.

## 🔗 Analogy

An API gateway is like a building reception desk - all visitors enter through reception. Reception checks ID (authentication), directs to the right office (routing), and limits visitors per hour (rate limiting).

## Related Concepts

- [[microservice|Microservice]]
- [[api|API]]
- [[load-balancing|Load Balancing]]
