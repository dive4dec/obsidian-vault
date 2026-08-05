---
tags: [Computer-Systems]
domain: Computer Systems
---

# Load Balancer

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

Distributes incoming requests across multiple servers. Prevents any single server from being overwhelmed.

## 📋 Concrete Example

Load balancer: 5 web servers. 1000 requests arrive. LB sends 200 to each. If server 3 crashes, LB sends its 200 to the other 4. Smooth, reliable service.

## 🔗 Analogy

A load balancer is like a traffic controller at a toll plaza - they direct cars to different toll booths (servers). If a booth closes, they redirect cars to open booths. No single booth is overwhelmed.

## Related Concepts

- [[network|Network]]
- [[scalability|Scalability]]
- [[microservice|Microservice]]
