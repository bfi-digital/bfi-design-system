import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"

const Break = styled.hr`
    border: 1px solid ${theme.darkGrey};
    margin: ${props => props.istransparent ? ((theme.standardSpace*0.5) + "px") : (theme.standardSpace + "px")} auto;
    width: 100%;
    opacity: ${props => props.istransparent ? "0" : "0.15"};

    @media screen and (min-width: ${theme.m}){
        margin: ${props => props.istransparent ? ((theme.standardSpace*0.75) + "px") : ((theme.standardSpace*1.5) + "px")} auto;
    }
`
export const Divider = ({
    istransparent
}) =>
    <Break istransparent={istransparent} />


Divider.propTypes = {
    /** 
    * Optionally hide the divider so it creates a space between content without being shown
    **/
    istransparent: PropTypes.bool,
}
