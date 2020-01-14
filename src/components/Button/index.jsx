import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    color: red;
`

const Button = ({
    children
}) =>
    <StyledButton>{children}</StyledButton>

export default Button