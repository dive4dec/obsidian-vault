---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Image Tools

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Image tools let the agent read supported image files: dsh-tool-fs's read_image reads PNG/JPEG/WebP/GIF sources, persists them via durable attachment storage, and refuses on a route whose model does not declare image input so a text route's history stays free of image blocks. Reading an image brings it into context so the model can reason about it directly. The read-before-write policy and sandbox fence apply as with other fs tools.

## Concrete Example

read_image file_path=screenshot.png requires a mounted ctx.attachments store and an image-capable routed model to succeed.

## Analogy

Picking up a photo from the desk and looking at it.

## Related Concepts

- [[fs-tool|Filesystem Tool]]
- [[read-file|Read File]]
- [[tool|Tool]]
