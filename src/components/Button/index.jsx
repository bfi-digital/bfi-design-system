import React from "react"
import styled from "styled-components"
import twitter from "./twitter.svg"

const StyledButton = styled.button`
    color: red;
`

export const Button = ({
	children
}) =>
	<StyledButton>oh gosh 
		<img src={twitter} style={{
			height: "20px"
		}}/>
		{children}
	</StyledButton>