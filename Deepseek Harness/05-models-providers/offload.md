---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# Image Offload

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

Image offload is replacing retained image references with deterministic placeholder text to save visual tokens. `dsh-compaction-image-offload` logs the selected occurrences in one `image/offload` event and retries; a request whose retained images exceed the route's byte or count budget fails with `IMAGE_OFFLOAD_REQUIRED` naming the additional oldest occurrences to drop.

## Concrete Example

When retained images exceed `maxRequestFilesBytes` (128 MiB) or `maxImagesPerRequest` (600), the call fails with `IMAGE_OFFLOAD_REQUIRED` and the image-offload plugin records an `image/offload` event before retrying.

## Analogy

Replacing bulky attachments with short notes so the email fits under the size limit.

## Related Concepts

- [[token-meter|Token Meter]]
- [[prompt-budget|Prompt Budget]]
- [[context-window|Context Window]]
- [[cost-estimation|Cost Estimation]]

