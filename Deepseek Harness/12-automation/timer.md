---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Timer

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

cordis-plugin-timer is a disposal-aware timer service for Cordis contexts: timeout, interval, throttle, and debounce handles are registered on the current fiber and cleared automatically when the creating plugin is disposed. Host-side schedulers build on it so pending work never leaks past a plugin's lifetime.

## Concrete Example

await root.plugin(Timer) then const dispose = root.timeout(() => {...}, 1000) runs once after a second, and dispose() cancels it.

## Analogy

Timers that clean up their own desk: when the team leaves, every alarm is switched off.

## Related Concepts

- [[schedule|Schedule]]
- [[trigger|Trigger]]
- [[goal-round|Goal Round]]
- [[job|Job]]
