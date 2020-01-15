import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Button } from "./index"

export default {
	title: "Button",
	decorators: [withA11y],
	component: Button
}

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
	<Button>
		<span role="img" aria-label="so cool">
      😀 😎 👍 💯 blah
		</span>
	</Button>
)