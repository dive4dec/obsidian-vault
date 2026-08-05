---
tags: [Data-Structures]
domain: Data Structures
---

# Octree

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

The 3D version of a quadtree: each node divides space into 8 octants. Used in 3D games, medical imaging, and particle simulations.

## 📋 Concrete Example

A 3D bounding box divides into 8 sub-boxes (2x2x2). Each sub-box can further divide into 8. This lets 3D engines quickly cull invisible objects.

## 🔗 Analogy

A Rubik's cube. The big cube is divided into 27 small cubes (3x3x3). Each small cube is in one of 8 octants of the big cube (at each level of division).

## Related Concepts

- [[spatial-data-structure|Spatial Data Structure]]
- [[quadtree|Quadtree]]
- [[3d-space-partitioning|3D Space Partitioning]]
- [[bounding-volume|Bounding Volume]]
