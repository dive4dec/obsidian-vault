---
tags: [Security]
domain: Security
---

# Egress Proxy

> **Domain:** [[_security-moc|Security]]

## Motivation

A proxy server through which all Hermes network traffic flows. Useful for monitoring, filtering, and compliance.

## Concrete Example

Config: egress_proxy: http://proxy.example.com:8080. All HTTP requests go through the proxy. The proxy can log, filter, or block requests. Useful in enterprise environments.

## Analogy

A customs checkpoint at the border - all goods pass through customs. Officers can inspect, tax, or confiscate. An egress proxy is customs for network traffic.

## Related Concepts

- [[security-overview|Security Overview]]
- [[configuration|Configuration]]
- [[network-security|Network Security]]
