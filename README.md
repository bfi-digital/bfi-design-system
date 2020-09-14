# 📽 BFI Design Sytem

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c1b8f82-9bcd-4205-8824-c12b5537b75f/deploy-status)](https://app.netlify.com/sites/gerwig/deploys) [![CircleCI](https://circleci.com/gh/bfi-digital/bfi-design-system.svg?style=svg&circle-token=61b8e613e86458c621c8297aff09bd0a520ef8ad)](https://circleci.com/gh/bfi-digital/bfi-design-system)

**CURRENTLY IN BETA. SOME THINGS MIGHT NOT WORK**

The next-gen design system for the [British Film Institute](bfi.org.uk).

## 🍿 Demo and docs

👉 **[BFI design system is here.](https://design-system.bfi.digital)**

This is a living documentation powered by [Storybook](https://storybook.js.org/), where you can see all the available components and their variations.

## 🎬 Using the design system

```
npm install bfi-design-system

// Install peer dependencies
npm install react react-dom styled-components @reach/router
```

Import the components you'd like to use into your app. For example:

```
import React from "react"
import { Card } from "bfi-design-system"

const MyComponent = () =>
    <Card>My content</Card>
```

Each component has documentation in the design system explaining the avaliable props, how to use it, and any guidence on using it.

## 💻 Developing the design system

You need `node` and `npm` installed.

1. Clone the repo and `npm i`
2. `npm run dev` will start up the Storybook playground and start `rollup` watching for changes.

If you want, you can also include this repo in another app as if it were an `npm` package using [`npm link`](https://docs.npmjs.com/cli/link). This is great for developing both side-by-side.

### How to publish a new version to NPM

1. Ensure all tests pass with `npm test`
2. If the snapshot tests are out of date due to changes in the components then ensure all is working and update them with `npx jest --updateSnapshot`
2. Increment the next version number in the `package.json` file.
3. `npm publish`. This will:
    - Run the tests
    - Bundle and transpile the code
    - Create and publish a tarball to NPM
4. If you are wanting to utilise the updated design system, for example in the BFI [`web frontend`](https://github.com/bfi-digital/bfi-web-frontend) you will then need to update the version number of the design system in the `package.json` file within that repo.

## 🧪 Testing

We use `jest` and `react-test-renderer` to run snapshot tests on all components.

`npm test` runs all the tests.

If you make changes to the output of components, you can regenerate the snapshot files with `jest --updateSnaphot`.

The snapshot test cases themselves come from the same `stories.jsx` file colocated with each component.

### 🧼 Linting

We use `eslint` and [`jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) to detect potential accessibility issues. Some code editors will automatically pick up problems, and it runs automatically with the `jest` tests, but you can also lint manually with `npm run lint`.

## To-do list

* Add more add-ons to the Storybook playground
* Typescript support?
* Update the `styled-components` dependency to ~5.0.0
