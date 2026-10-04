---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# App Arguments

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The launcher parses only its own flags; the first token it does not recognize starts the booted profile's app arguments, which the app parses itself from the shared `dsh-cmdline` snapshot. So `dsh web --port 8080` passes `--port 8080` to the web app, and `dsh web --help` prints the web app's help, not the launcher's. Developers care because launcher flags must precede app arguments — the split is positional, and an app argument that must survive as a literal `--` needs `-- --`.

## Concrete Example

`dsh --profile web --port 8080` starts the web server on 8080 even when the config says 3080, because the flag wins.

## Analogy

It is a mailroom that forwards everything it cannot open to the department you addressed it to.

## Related Concepts

- [[cmdline|cmdline (dsh-cmdline)]]
- [[dsh-command|The dsh Command]]
- [[entry-modes|Entry Modes]]
