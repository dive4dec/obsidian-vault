---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# cordis.patch.yml

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`cordis.patch.yml` is the user's own patch layer that overrides or extends the composed plugin stack, and it sits above the bundle layers in precedence (profile patch, then home-level `$DSH_HOME/cordis.patch.yml`). Each entry replaces the target's whole configuration, so an override must restate every setting it wants to keep. Developers care because this file is where per-machine customization lives without touching bundle code.

## Concrete Example

Add the `str_replace_editor` tool to a base-backed profile by inserting a `tool-str-replace-editor` row into the profile's `cordis.patch.yml`.

## Analogy

It is the personal annotations on top of a shared document — yours win wherever they overlap.

## Related Concepts

- [[patch-layer|Patch Layer]]
- [[profile-stack|Profile Stack]]
- [[plugin|Plugin]]
