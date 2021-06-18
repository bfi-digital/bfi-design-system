import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"

const Break = styled.hr`
    border: 1px solid ${theme.darkGrey};
    margin: ${props => props.spacing === "none" ? 0 : (props.istransparent ? `${theme.standardSpace}px auto` : `${theme.standardSpace * 1.33}px auto`)};
    width: ${props => props.clearFloat ? "100%" : "auto"};
    opacity: ${props => props.istransparent ? "0" : "0.15"};
    clear: ${props => props.clearFloat ? "both" : "initial"};

    @media screen and (min-width: ${theme.m}){
        margin: ${props => props.spacing === "none" ? 0 : (props.istransparent ? `${theme.standardSpace * 1.33}px auto` : `${theme.standardSpace * 2}px auto`)};
    }
`
export const Divider = ({
    istransparent,
    clearFloat,
    spacing,
}) =>
    <Break istransparent={istransparent} clearFloat={clearFloat} spacing={spacing} />


Divider.propTypes = {
    /**
    * Optionally hide the divider so it creates a space between content without being shown
    **/
    istransparent: PropTypes.bool,

    /**
    * Clear floated elements.
    **/
    clearFloat: PropTypes.bool,

    /**
    * Controls the margin style of the divider.
    **/
    spacing: PropTypes.oneOf([
        "none",
    ]),
}
