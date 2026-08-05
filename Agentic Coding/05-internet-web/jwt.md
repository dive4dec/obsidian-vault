---
tags: [Internet-&-Web]
domain: Internet & Web
---

# JWT

> **Domain:** [[_internet-web-moc|Internet & Web]]

## 🎯 Motivation

JSON Web Token - a standard for tokens. Contains user info, signed for security.

## 📋 Concrete Example

JWT: three parts - header, payload, signature. Payload: {user_id: 123, role: `admin`, exp: 1690000000}. Signature: verifies it has not been tampered with. Compact, self-contained, widely used.

## 🔗 Analogy

JWT is like a sealed letter of recommendation - it contains information about you (payload), is sealed by the sender (signature), and anyone can verify the seal. No one can tamper with it without breaking the seal.

## Related Concepts

- [[token|Token]]
- [[authentication|Authentication]]
- [[json|JSON]]
