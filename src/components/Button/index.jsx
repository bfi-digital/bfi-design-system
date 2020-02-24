import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { LinkSwitch as Link } from "../LinkSwitch"
import theme from "../_theme"

const colorSchemes = [
    {
        shadow: theme.dustyPink,
        hoverBackground: theme.lightPink,
        text: theme.charcoal,
        background: theme.white,
        focusShadow: theme.darkPink,
        // Secondary button only
        focus: theme.dustyPink
    },
    {
        shadow: theme.dustyPink,
        hoverBackground: theme.darkGrey,
        text: theme.white,
        background: theme.charcoal,
        focusShadow: theme.dustyPink,
        // Secondary button only
        focus: theme.dustyPink
    }
]

const PrimaryButton = styled(Link)`
    display: inline-block;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${props => colorSchemes[props.colorScheme].text};
    text-decoration: none;
    background: ${props => colorSchemes[props.colorScheme].background};
    border-radius: 4px;
    padding: 10px 25px;
    box-shadow: -5px 5px 0px ${props => colorSchemes[props.colorScheme].shadow};
    margin-left: 5px;

    &:hover, &:focus{
        background: ${props => colorSchemes[props.colorScheme].hoverBackground};
    }
    &:focus{
        background: ${props => colorSchemes[props.colorScheme].hoverBackground};
        box-shadow: 0px 0px 0px 4px ${props => colorSchemes[props.colorScheme].focusShadow};
        outline: none;
    }
    &:active{
        background: ${props => colorSchemes[props.colorScheme].background};
        box-shadow: none;
        transform: translate(-5px, 5px);   
    }
`

const SecondaryButton = styled(Link)`
    border: 2px solid ${theme.charcoal};
    color: ${theme.charcoal};
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.125rem;
    padding: 4px 10px;
    text-decoration: none;
    transition: border-radius 0.2s ease-out;
    &:hover{
        border-radius: 2px;
    }
    &:focus{
        box-shadow: 0px 0px 0px 4px ${props => colorSchemes[props.colorScheme].focus};
    }
    &:active{
        color: ${theme.white};
        background: ${theme.charcoal}
    }
`

export const Button = ({
    secondary,
    children,
    ...props
}) => secondary ?
    <SecondaryButton {...props}>{children}</SecondaryButton> :
    <PrimaryButton {...props}>{children}</PrimaryButton>

Button.propTypes = {
    url: PropTypes.string,
    external: PropTypes.bool,
    secondary: PropTypes.bool,
    colorScheme: PropTypes.number
}

Button.defaultProps = {
    colorScheme: 0,
    secondary: false
}