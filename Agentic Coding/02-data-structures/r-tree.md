---
tags: [Data-Structures]
domain: Data Structures
---

# R-Tree

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

A tree optimised for spatial rectangles (bounding boxes). Used in geographic databases to find objects within a region efficiently.

## 📋 Concrete Example

Each node stores bounding rectangles that contain child rectangles. Searching 'all objects in this area' traverses only branches whose rectangles overlap.

## 🔗 Analogy

A library map showing which shelves contain which book sizes. To find a large book, you go straight to the shelves labelled 'large format' and skip the rest.

## Related Concepts

- [[spatial-data-structure|Spatial Data Structure]]
- [[bounding-box|Bounding Box]]
- [[rectangle-query|Rectangle Query]]
- [[geographic-database|Geographic Database]]
