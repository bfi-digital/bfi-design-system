# Gerwig

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c1b8f82-9bcd-4205-8824-c12b5537b75f/deploy-status)](https://app.netlify.com/sites/gerwig/deploys) [![CircleCI](https://circleci.com/gh/bfi-digital/gerwig.svg?style=svg)](https://circleci.com/gh/bfi-digital/gerwig)

**CURRENTLY IN A PRE-ALPHA PHASE. NOT YET READY FOR USE.**

The next-gen design system for the [British Film Institute](bfi.org.uk).

## Demo and docs

**[Storybook is here.](https://gerwig.netlify.com)**

There's a living documentation powered by [Storybook](https://storybook.js.org/), where you can see all the available components and their variations.

## Usage

```
`npm install gerwig`
```

Import the components you'd like to use into your app. For example:

```
import React from "react"
import { Card } from "gerwig"

const MyComponent = () =>
    <Card>My content</Card>
```

## Developing

You need `node` and `npm` installed.

1. Clone the repo and `npm i`
2. `npm run dev` will start up the Storybook playground and start `rollup` watching for changes.

If you want, you can also include a this repo in another app as if it were an `npm` package using [`npm link`](https://docs.npmjs.com/cli/link). This is great for developing both side-by-side.

## Testing

We use `jest` and `react-test-renderer` to run snapshot tests on all components.

`npm test` runs all the tests.

If you make changes to the output of components, you can regenerate the snapshot files with `jest --updateSnaphots`.

The snapshot test cases themselves come from the same `stories.jsx` file colocated with each component.

## To-do list

* Continuous depoyment to `npm`
* Linting, especially `jsx-a11y`