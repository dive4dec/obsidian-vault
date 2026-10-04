---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Toolsets

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A toolset groups related tools so a profile can enable or disable a family at once: dsh-tool-fs ships read/write/edit/read_image together, dsh-tool-web ships web_search and web_fetch, and dsh-tool-jobs ships job_output/job_list/job_kill. Composing a profile is a list of these packages plus config flags that narrow what registers. Per-agent restrictions can further narrow the visible set for a single agent.

## Concrete Example

A composition listing @deepseek-ai/dsh-tool-fs, dsh-tool-fs-search, and dsh-tool-bash enables the file and shell toolsets for that profile.

## Analogy

A toolbox drawer: you install the drawer, not each tool individually.

## Related Concepts

- [[core-tools|Core Tools]]
- [[tools|Tools]]
- [[tool-permission|Tool Permission]]
- [[tool-presentation|Tool Presentation]]
