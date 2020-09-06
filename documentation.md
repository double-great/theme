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
    vertical-align: top;
  }
---

Documentation for building sites with the Great Great Jekyll theme.

## Layouts

| Layout                                        | Description | Frontmatter               |
| --------------------------------------------- | ----------- | ------------------------- |
| {% for layout in site.data.layouts %}{{layout | first}}     | {{layout[1].description}} | {% for item in layout[1].frontmatter %}`{{item | first | first}}` - {{item | first | last}}<br>{% endfor %} |

{% endfor %}
