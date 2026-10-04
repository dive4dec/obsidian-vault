---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Filesystem Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-fs gives the model read (line-numbered UTF-8 content), read_image, write (atomic create/replace), and edit (targeted literal edits). Results are capped and failures carry stable error codes with recovery instructions. With dsh-fs-observation-policy mounted, writes and edits require a successful read first — the read-before-write behavior dsh relies on.

## Concrete Example

A read call takes file_path, offset, and limit; read_image registers only while a durable ctx.attachments service is mounted and the model route declares image input.

## Analogy

The agent's hands on the filesystem, with a rule to look before touching.

## Related Concepts

- [[fs-search-tool|FS Search Tool]]
- [[str-replace-editor|Str-Replace Editor]]
- [[read-file|Read File]]
- [[write-file|Write File]]
