# Gerwig

The next-gen design system for the British Film Institute.

## Demo

There's a living documentation powered by [storybook](https://storybook.js.org/), where you can see all the available components and their variation.

## Using it in an app

1. `npm i gerwig`
2. Import the components you'd like to use into your app. For example:

```
import React from "react"
import Card from "gerwig/card"

const MyComponent = () =>
    <Card>My content</Card>
```

## Developing

1. Clone the repo and `npm i`
2. Run storybook locally with `npm run storybook`
3. When you make changes

## Testing

We use `jest` and `react-test-renderer` to run snapshot tests on all components.

`npm test` runs all the tests.

If you make changes to the output of components, you can regenerate the snapshot files with `jest --updateSnaphots`.

The snapshot test cases themselves come from the same `stories.jsx` file colocated with each component.