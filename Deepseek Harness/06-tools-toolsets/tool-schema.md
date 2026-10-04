---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Schema

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Every tool in dsh-tools carries a schema describing its parameters; the model sees only the declared name, description, and parameter schema of each permitted tool. Arguments are validated against the schema before execution — invalid input becomes a normal error result rather than a crash. The unified schema DSL supports string, number, integer, boolean, null, array, object, and oneOf.

## Concrete Example

In a defineTool call the parameters block { path: { type: 'string', required: true }, limit: { type: 'number' } } is what the model sees and dsh validates against.

## Analogy

The API contract that tells the model what each tool expects.

## Related Concepts

- [[tool|Tool]]
- [[tools|Tools]]
- [[tool-call|Tool Call]]
