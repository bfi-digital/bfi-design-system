import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Button } from "../Button"

export const Outer = styled.div`
    margin: 20px 0;
`

export const CallToAction = ({
    linkText,
    linkURL,
    external
}) =>
    <Outer>
        <Button to={linkURL} external={external}>
            {linkText}
        </Button>
    </Outer>


CallToAction.propTypes = {
    /** 
	 * The text of the button
	 **/
    linkText: PropTypes.string,
    /** 
	 * The URL the button links to
	 **/
    citation: PropTypes.string,
    external: PropTypes.bool
}
