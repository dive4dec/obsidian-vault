---
tags: [DSH-Security]
domain: Security & Permissions
---

# Consent

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Consent is the human decision that authorizes a sensitive operation. In dsh, consent is one-shot: an approval applies only to that one request, and there is no `allow-always`, remembered rule, or grant store. The approval policy `ask` routes the request to the deployment's answerers; `never` rejects without prompting. The user's decision — `allowed-once`, `rejected`, or `cancelled` — becomes the call's result text and is recorded in the audit log.

## Concrete Example

A `bash` call that escalates to `danger-full-access` surfaces the approval prompt; the user presses Enter to approve, and the command runs unconfined for that single call only.

## Analogy

It is the signature on a one-time release form: the signature authorizes that one item, and the next item needs a fresh signature.

## Related Concepts

- [[approval|Approval]]
- [[approval-policy|Approval Policy]]
- [[break-glass|Break Glass]]
