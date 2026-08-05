---
tags: [Security]
domain: Security
---

# Website Blocklist

> **Domain:** [[_security-moc|Security]]

## Motivation

A configurable list of websites that Hermes tools cannot access. Prevents the agent from visiting malicious or unwanted sites.

## Concrete Example

security.website_blocklist: [evil.com, malware.test]. When Hermes tries to fetch evil.com -> blocked. The agent cannot access blocked sites.

## Analogy

A parental control filter on a school computer - certain websites are blocked. Students cannot visit them. The website blocklist prevents the agent from visiting dangerous sites.

## Related Concepts

- [[security-overview|Security Overview]]
- [[tirith|Tirith]]
- [[web-tools|Web Tools]]
