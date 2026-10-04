---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Goal Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-goal exposes get_goal, create_goal, and update_goal for persisted objectives that drive an agent across continuation rounds. Creating, editing, pausing, or resuming requires a direct top-level human request; complete and blocked also work in autonomous rounds. Updates need the exact goal id and revision from a prior read, and autonomous blocking needs the same condition for three consecutive rounds by default.

## Concrete Example

update_goal goal_id=... revision=2 action=complete finishes the goal; blocked requires blocked_reason, persisted with the stable code model-reported.

## Analogy

A mission statement with a revision number, not changeable without quoting it.

## Related Concepts

- [[todo-tool|Todo Tool]]
- [[subagent-control|Subagent Control]]
- [[ralph-tool|Ralph Tool]]
