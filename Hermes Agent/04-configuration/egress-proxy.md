---
tags: [Configuration]
domain: Configuration
---

# Egress Proxy

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

A proxy server for all Hermes network traffic. Configured in config.yaml. Useful for monitoring and compliance.

## Concrete Example

Config: egress_proxy: http://proxy.school.edu:8080. All HTTP requests go through the school proxy. The proxy can log and filter traffic.

## Analogy

A customs checkpoint - all goods pass through. Officers inspect and filter. An egress proxy is customs for Hermes network traffic.

## Related Concepts

- [[config-yaml|Config YAML]]
- [[network-security|Network Security]]
- [[configuration|Configuration]]
