---
title: Documentation
layout: page
css: |
  table {
    table-layout: fixed;
  }
  table td,
  table tr {
    word-break: unset;
  }
---

Documentation for building sites with the Great Great Jekyll theme.

## Layouts

| Layout                                        | Description | Frontmatter               |
| --------------------------------------------- | ----------- | ------------------------- |
| {% for layout in site.data.layouts %}{{layout | first}}     | {{layout[1].description}} | {%for matter in layout[1].frontmatter %}{{matter}}<br>{% endfor %} |

{% endfor %}
