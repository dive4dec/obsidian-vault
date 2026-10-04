---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# CI Usage

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Continuous-integration jobs want non-interactive runs, clean stdout, and a reliable exit code — exactly what headless provides. Each CI step can be one `dsh --profile headless` invocation whose exit status gates the pipeline.

## Concrete Example

A CI step runs `dsh --profile headless "run the tests"; exit $?` and the pipeline fails on nonzero.

## Analogy

A quality inspector on the assembly line who only passes or fails the part.

## Related Concepts

- [[scripting|Scripting dsh]]
- [[non-interactive|Non-Interactive]]
- [[exit-codes|Exit Codes]]
