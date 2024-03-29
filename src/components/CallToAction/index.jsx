import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"
import { Button } from "../Button"

const Outer = styled.div`
    margin: 1.75em 0;
    text-align: ${props => props.center ? "center" : "left"};
    display: ${props => props.center ? "block" : "inline-block"};

    & + .call_to_action_block {
        a { 
            @media screen and (min-width: ${theme.m}){
                margin-left: ${theme.standardSpace/2}px;
            }
        }
    }
`

export const CallToAction = ({
    linkText,
    linkURL,
    center,
}) =>
    <Outer center={center} className="call_to_action_block">
        <Button to={linkURL}>
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
}

CallToAction.defaultProps = {
    center: false,
}