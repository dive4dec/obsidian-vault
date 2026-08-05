---
tags: [Internet-&-Web]
domain: Internet & Web
---

# HTML Parsing

> **Domain:** [[_internet-web-moc|Internet & Web]]

## 🎯 Motivation

Reading HTML and extracting specific elements: text, links, images. Done with tools like BeautifulSoup.

## 📋 Concrete Example

Parsing: BeautifulSoup(html, `html.parser`).find_all(`a`) -> extract all links. Or find_all(`p`, class_=`article`) -> extract article paragraphs. Convert raw HTML into structured data.

## 🔗 Analogy

HTML parsing is like reading a textbook with a highlighter - you scan the pages (HTML) and highlight specific parts (elements). You convert a wall of text into organized, useful information.

## Related Concepts

- [[web-scraping|Web Scraping]]
- [[html|HTML]]
- [[dom|DOM]]
