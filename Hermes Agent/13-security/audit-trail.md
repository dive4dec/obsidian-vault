---
tags: [Security]
domain: Security
---

# Audit Trail

> **Domain:** [[_security-moc|Security]]

## Motivation

Session transcripts and gateway logs provide an audit trail of all actions Hermes has taken.

## Concrete Example

~/.hermes/logs/gateway.log: all gateway events. state.db: all session messages. hermes sessions export: JSONL transcript. Every action is recorded for review.

## Analogy

A security camera system - every action is recorded. If something goes wrong, you can review the footage. Session transcripts and logs are Hermes security cameras.

## Related Concepts

- [[sessions|Sessions]]
- [[gateway-logs|Gateway Logs]]
- [[security-overview|Security Overview]]
