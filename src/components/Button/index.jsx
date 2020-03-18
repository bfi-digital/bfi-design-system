import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { LinkSwitch as Link } from "../LinkSwitch"
import theme from "../_theme"

const colorSchemes = [
    {
        shadow: theme.primary,
        hoverBackground: theme.darkGrey,
        text: theme.white,
        background: theme.charcoal,
        focusShadow: theme.highlight,
        // Secondary button only
        focus: theme.highlight
    },
    {
        shadow: theme.primary,
        hoverBackground: theme.lightest,
        text: theme.charcoal,
        background: theme.white,
        focusShadow: theme.dark,
        // Secondary button only
        focus: theme.primary
    }
]

const PrimaryButton = styled(Link)`
    display: inline-block;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${props => colorSchemes[props.colorScheme].text};
    text-decoration: none;
    background: ${props => colorSchemes[props.colorScheme].background};
    // border-radius: 4px;
    padding: 10px 25px;
    box-shadow: -3px 3px 0px ${props => colorSchemes[props.colorScheme].shadow};
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
    // border-radius: 5px;
    font-size: 1rem;
    padding: 4px 15px;
    text-decoration: none;
    transition: box-shadow .3s;

    &:hover{
        background-color: ${theme.grey}
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 4px ${props => colorSchemes[props.colorScheme].focus};
    }
    &:active{
        color: ${theme.white};
        background: ${theme.charcoal}
    }
`

const TertiaryButton = styled(Link)`
    border: 2px solid ${theme.charcoal};
    color: ${theme.charcoal};
    font-weight: bold;
    // border-radius: 5px;
    font-size: 1rem;
    padding: 10px 30px;
    text-decoration: none;
    margin: 0 auto;
    display: block;
    max-width: 250px;
    text-align: center;
    transition: box-shadow .3s;

    &:hover{
        background-color: ${theme.grey}
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 4px ${props => colorSchemes[props.colorScheme].focus};
    }
    &:active{
        color: ${theme.white};
        background: ${theme.charcoal}
    }
`

export const Button = ({
    level,
    children,
    ...props
}) => {
    if(level === 3) return <TertiaryButton {...props}>{children}</TertiaryButton>
    if(level === 2) return <SecondaryButton {...props}>{children}</SecondaryButton>
    return <PrimaryButton {...props}>{children}</PrimaryButton>
}

Button.propTypes = {
    url: PropTypes.string,
    external: PropTypes.bool,
    // A number between 1 and 3
    level: PropTypes.number,
    colorScheme: PropTypes.number
}

Button.defaultProps = {
    colorScheme: 0
}