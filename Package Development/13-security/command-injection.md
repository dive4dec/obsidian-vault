---
tags: [Security]
domain: Security
---

# Command Injection

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

Passing user input to shell commands lets attackers chain extra commands using `;` or `&&`. Using safe APIs that avoid the shell entirely prevents this dangerous vulnerability.

## 📋 Concrete Example

Avoid `os.system(f"convert {filename} out.png")`. A filename like `a.png; rm -rf /` is catastrophic. Use `subprocess.run(["convert", filename, "out.png"])` with a list — no shell, no injection.

## 🔗 Analogy

Giving a courier a sealed package with an address label is safe. If you hand them a note saying "deliver to A; also throw away everything at B," you have given them two instructions.

## Related Concepts

- [[subprocess-security|Subprocess Security]]
- [[input-validation|Input Validation]]
- [[sql-injection|SQL Injection]]
