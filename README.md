# Custom theming for NZGovt Design System

This is a light-weight POC with the aim of producing a govt front-end component library using storybook, built on top of the [NZGovt Design System (Alpha)](https://github.com/GOVTNZ/govtnz-design-system).

## Abstract

The philosophy behind it's build aims to:

* Use only html and css for core story templates
* Leverage the nzgovt design system via npm package `@govtnz/ds`
* Provide a framework for customising components
* Be simple enough for a junior dev to operate at a low level

## Method

It uses the html and css templates in the npm package "@govtnz/ds" to:

* Auto-import nzgovt templates with `yarn update:nzgovt`
* Auto-generate templates with `yarn build:nzgovt` from the NZGovt html and css output components in `src/template-sources/nzgovt-import`
* Overide templates with any custom elements with `src/template-sources/custom`
* Auto-generate a storybook component library from the merged template files with `yarn build:stories`
