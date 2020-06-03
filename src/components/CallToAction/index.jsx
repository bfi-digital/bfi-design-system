import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Button } from "../Button"

export const Outer = styled.div`
    margin: 1.75em 0;
    text-align: ${props => props.center ? "center" : "left"};
`

export const CallToAction = ({
    linkText,
    linkURL,
    center,
    external
}) =>
    <Outer center={center}>
        <Button to={linkURL} external={external} target={external ? "_blank" : "_self"}>
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
    /** 
	 * An optional choice to set this call to action to be center aligned - this should be used only for links to further content with article/film/page grids, rather than for call to actions on pages.
	 **/
    center: PropTypes.bool,
    external: PropTypes.bool
}

CallToAction.defaultProps = {
    center: false,
    external: false
}