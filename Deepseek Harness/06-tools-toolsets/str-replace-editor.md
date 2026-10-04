---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Str-Replace Editor

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-str-replace-editor is a standalone Claude-Code-style editor over ctx.fs: view shows numbered content or a shallow directory listing, create makes a new file, str_replace applies a unique literal replacement, and insert adds lines at a chosen boundary. Mutations obey the same read-before-edit policy and sandbox fence as the rest of the fs family. Choose it when you want one editor tool with absolute paths instead of the read/write/edit suite.

## Concrete Example

str_replace_editor command=str_replace file_path=/abs/path old_string=foo new_string=bar replaces the unique literal occurrence.

## Analogy

A single swiss-army editor that views, creates, and patches files.

## Related Concepts

- [[fs-tool|Filesystem Tool]]
- [[read-file|Read File]]
- [[code-tools|Code Tools]]
