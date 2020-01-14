# Gerwig

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c1b8f82-9bcd-4205-8824-c12b5537b75f/deploy-status)](https://app.netlify.com/sites/gerwig/deploys) [![CircleCI](https://circleci.com/gh/bfi-digital/gerwig.svg?style=svg)](https://circleci.com/gh/bfi-digital/gerwig)

The next-gen design system for the [British Film Institute](bfi.org.uk).

## Demo and docs

**[Storybook is here.](https://gerwig.netlify.com)**

There's a living documentation powered by [Storybook](https://storybook.js.org/), where you can see all the available components and their variation.

## Usage

1. `npm i gerwig`
2. Import the components you'd like to use into your app. For example:

```
import React from "react"
import Card from "gerwig/card"

const MyComponent = () =>
    <Card>My content</Card>
```

## Developing

You need `node` and `npm` installed.

1. Clone the repo and `npm i`
2. Run storybook locally with `npm run storybook`

## Testing

We use `jest` and `react-test-renderer` to run snapshot tests on all components.

`npm test` runs all the tests.

If you make changes to the output of components, you can regenerate the snapshot files with `jest --updateSnaphots`.

The snapshot test cases themselves come from the same `stories.jsx` file colocated with each component.