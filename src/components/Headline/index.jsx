import React from "react"
import styled from "styled-components"

const StyledHeadline = styled.h1`
    color: red;
`

const Headline = ({
    children
}) =>
    <StyledHeadline>{children}</StyledHeadline>

export default Headline