---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Firewall Notes

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Firewall notes cover the outbound access the registry, the API, and the model endpoints need. If outbound to the npm registry or the DeepSeek inference origin is blocked, installs fail and model calls time out. A developer cares because a silent firewall rule is a common cause of "nothing works" with no local error.

## Concrete Example

Allow outbound HTTPS to the npm registry (for `@deepseek-ai/*` installs) and to the DeepSeek inference origin (for model calls).

## Analogy

Like making sure the gate is open before the delivery truck arrives.

## Related Concepts

- [[proxy-setup|Proxy Setup]]
- [[install-troubleshoot|Install Troubleshooting]]
- [[prerequisites|Prerequisites]]
