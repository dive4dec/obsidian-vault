---
tags: [Internet-&-Web]
domain: Internet & Web
---

# Pagination

> **Domain:** [[_internet-web-moc|Internet & Web]]

## 🎯 Motivation

Splitting large lists into pages. API returns 20 items per page instead of 10,000 at once.

## 📋 Concrete Example

Pagination: GET /api/users?page=2&per_page=20. Returns users 21-40. Not all 10,000 at once. Faster, less memory, better UX. User clicks `Next` for page 3.

## 🔗 Analogy

Pagination is like pages in a book - instead of one long scroll (10,000 items), you have pages (20 items each). Easier to read, faster to load. You turn pages instead of scrolling endlessly.

## Related Concepts

- [[rest-api|REST API]]
- [[json|JSON]]
- [[user-experience|User Experience]]
