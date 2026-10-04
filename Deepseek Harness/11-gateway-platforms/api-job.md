---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Job Controller

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-job-controller` owns the Host `ctx.jobController` service and the generated Client `ctx.remote.job` namespace. Its two Remote streams are projections of `ctx.jobs`: `job.list` mirrors the jobs one session can see as whole-set frames, and `job.follow` delivers one job's retained output from an absolute byte offset; its one command, `job.kill`, stops a job on a human's behalf. Neither stream touches the model's consuming cursor, and a human kill is not the model's own.

## Concrete Example

The web session-header job list renders from `job.list` frames, and its stop control calls `job.kill`.

## Analogy

The floor supervisor's board of in-flight orders, with an emergency stop button that only a person can press.

## Related Concepts

- [[jobs-ui|Jobs UI]]
- [[api-session|Session Controller]]
- [[gateway|API Gateway]]
- [[websocket|WebSocket]]
