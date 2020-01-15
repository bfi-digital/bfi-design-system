# 📽 Gerwig

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c1b8f82-9bcd-4205-8824-c12b5537b75f/deploy-status)](https://app.netlify.com/sites/gerwig/deploys) [![CircleCI](https://circleci.com/gh/bfi-digital/bfi-design-system.svg?style=svg&circle-token=61b8e613e86458c621c8297aff09bd0a520ef8ad)](https://circleci.com/gh/bfi-digital/bfi-design-system)

**CURRENTLY IN A PRE-ALPHA PHASE. NOT YET READY FOR USE.**

The next-gen design system for the [British Film Institute](bfi.org.uk).

## 🍿 Demo and docs

👉 **[Storybook is here.](https://gerwig.netlify.com)**

There's a living documentation powered by [Storybook](https://storybook.js.org/), where you can see all the available components and their variations.

## 🎬 Usage

```
npm install gerwig
```

Import the components you'd like to use into your app. For example:

```
import React from "react"
import { Card } from "gerwig"

const MyComponent = () =>
    <Card>My content</Card>
```

## 💻 Developing

You need `node` and `npm` installed.

1. Clone the repo and `npm i`
2. `npm run dev` will start up the Storybook playground and start `rollup` watching for changes.

If you want, you can also include this repo in another app as if it were an `npm` package using [`npm link`](https://docs.npmjs.com/cli/link). This is great for developing both side-by-side.

### Publish a new version to NPM

1. Set the next  version number in the `package.json` file.
2. `npm publish`. This will:
    - Run the tests
    - Bundle and transpile the code
    - Create and publish a tarball to NPM

## 🧪 Testing

We use `jest` and `react-test-renderer` to run snapshot tests on all components.

`npm test` runs all the tests.

If you make changes to the output of components, you can regenerate the snapshot files with `jest --updateSnaphots`.

The snapshot test cases themselves come from the same `stories.jsx` file colocated with each component.

### 🧼 Linting

We use `eslint` and [`jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) to detect potential accessibility issues. Some code editors will automatically pick up problems, and it runs automatically with the `jest` tests, but you can also lint manually with `npm run lint`.

## To-do list

* Add more add-ons to the Storybook playground
* Update the `styled-components` dependency to ~5.0.0