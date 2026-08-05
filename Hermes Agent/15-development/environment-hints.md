---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Environment Hints

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Part of the system prompt that describes the execution environment: OS, home directory, working directory, terminal backend.

## Concrete Example

Environment hints: Host: Linux 6.8.0. User home: /home/alice. CWD: /home/alice/projects. Terminal: local (bash). Shell: /bin/bash. The model knows where it is running.

## Analogy

A map given to a new delivery driver - it shows the city, streets, and warehouse location. Environment hints give the model a map of its surroundings.

## Related Concepts

- [[prompt-builder|Prompt Builder]]
- [[system-prompt|System Prompt]]
- [[terminal-backend|Terminal Backend]]
