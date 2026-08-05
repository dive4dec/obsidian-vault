---
tags: [Configuration]
domain: Configuration
---

# Vision Model

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

An auxiliary model used for image analysis. Configured in model.vision.

## Concrete Example

model.vision: openrouter/openai/gpt-4o. You send a photo. The vision model analyzes it: This is a cat sitting on a desk. The main model uses this description.

## Analogy

A translator for sign language - they watch the signs and describe them in words. The vision model watches images and describes them in words.

## Related Concepts

- [[auxiliary-models|Auxiliary Models]]
- [[model-config|Model Config]]
- [[vision-tool|Vision Tool]]
