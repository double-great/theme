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

## Header

- Set the title of the page in `_config.yml` with the `title` property.
- By default, the site uses the Double Great pretzel logo (<span style="width: 1rem; display: inline-block">{% include icon/logo.svg %}</span>) next to the title of the page in the header. To override the logo, save a new logo at `_includes/icon/logo.svg`.
- To add items to the site navigation, add `header_pages` to `_config.yml`. The value is an array of filenames. Example:

```yaml
header_pages:
  - index.html
  - documentation.md
  - demo/index.md
```

## Layouts

Set the layout for a Jekyll page in the frontmatter, example: `layout: page`.

| Layout                                                    | Description               | Frontmatter                                                                |
| --------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------- |
| {% for layout in site.data.layouts %}`{{layout | first}}` | {{layout[1].description}} | {% for item in layout[1].frontmatter %}`{{item | first | first}}` - {{item | first | last}}<br>{% endfor %} |

{% endfor %}

## Footer

- Set the description of the footer in `_config.yml` using the `description` property.
- Add a link to the site's GitHub repository in `_config.yml` using the `github` property.
