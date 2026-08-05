---
tags: [Configuration]
domain: Configuration
---

# Config YAML

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

The main configuration file for Hermes. Located at ~/.hermes/config.yaml. Controls every aspect of agent behavior.

## Concrete Example

config.yaml has sections: model, agent, terminal, compression, display, stt, tts, memory, security, delegation, checkpoints. Each section controls different features. Edit with: hermes config edit.

## Analogy

A remote control with buttons for every TV feature - volume, channels, brightness, input. config.yaml is the remote control for Hermes.

## Related Concepts

- [[config-edit|Config Edit]]
- [[config-sections|Config Sections]]
- [[hermes-config|Hermes Config]]
