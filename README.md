# Custom theming for GovtNZ Design System

This is a light-weight POC with the aim of producing a govt front-end component library using storybook, built on top of the [GovtNZ Design System (Alpha)](https://github.com/GOVTNZ/govtnz-design-system).

[See the storybook demo](https://ezra.keddell.nz/govtnz-ds-storybook)

## Abstract

The philosophy behind it's build aims to:

- Use only html and css for core story templates
- Leverage the govtnz design system via npm package `@govtnz/ds`
- Provide a framework for customising components
- Be simple enough for a junior dev to operate at a low level

## Method

It uses the html and css templates in the npm package `@govtnz/ds` to:

- Auto-import govtnz templates with `yarn update:govtnz`
- Auto-generate templates with `yarn build:govtnz` from the govtnz html and css output components in `src/template-sources/govtnz-import`

Once the templates have been imported you can overide and customise them:

- Overide templates with any custom elements with `src/template-sources/custom`
- Use a namespaced set of html, css and mdx files to generate stories with docs (eg. `A.html, A.css, A.mdx`)
- Auto-generate a storybook component library from the merged template files with `yarn build:stories`

Then you can generate a storybook component library using `yarn storybook`
