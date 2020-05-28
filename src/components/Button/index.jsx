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
        background: theme.black,
        focus: theme.focus
    },
    {
        shadow: theme.primary,
        hoverBackground: theme.lightest,
        text: theme.black,
        background: theme.white,
        focus: theme.focus
    }
]

const PrimaryButton = styled(Link)`
    display: inline-block;
    position: relative;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${props => colorSchemes[props.colorScheme].text};
    background: ${props => colorSchemes[props.colorScheme].background};
    text-decoration: none;
    padding: 10px 25px;
    z-index: 2;
    width: 100%;
    text-align: center;

    :after {
        content: "";
        width: 100%;
        height: 5px;
        transition: height .3s;
        position: absolute;
        bottom: -5px;
        left: 0;
        background: ${props => colorSchemes[props.colorScheme].shadow};
        z-index: -1;
    }

    &:hover, &:focus{
        color: ${props => props.colorScheme === 1 ? theme.black : theme.white};
        
        :after {
            height: calc(100% + 5px);
        }
    }
    &:focus{
        box-shadow: 0px 0px 0px 4px ${props => colorSchemes[props.colorScheme].focus};
        outline: none;
        height: auto;

        :after {
            bottom: 0;
            height: 100%;
        }
    }
    &:active{
        background: ${props => colorSchemes[props.colorScheme].background};
        box-shadow: none;
        transform: translate(0, 5px);   
        :after {
            height: 1px;
            bottom: -1px;
        }
    }
    @media screen and (min-width: ${theme.m}){
        width: auto;
    }
`

const SecondaryButton = styled(Link)`
    border: 2px solid ${theme.black};
    color: ${theme.black};
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
        background: ${theme.black}
    }
`

const TertiaryButton = styled(Link)`
    border: 2px solid ${theme.black};
    color: ${theme.black};
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
        background: ${theme.black}
    }
`

export const Button = ({
    level,
    children,
    title,
    ...props
}) => {
    if(level === 3) return <TertiaryButton title={title ? title : false} {...props}>{children}</TertiaryButton>
    if(level === 2) return <SecondaryButton title={title ? title : false} {...props}>{children}</SecondaryButton>
    return <PrimaryButton title={title ? title : false} {...props}>{children}</PrimaryButton>
}

Button.propTypes = {
    url: PropTypes.string,
    external: PropTypes.bool,
    // A number between 1 and 3
    level: PropTypes.number,
    colorScheme: PropTypes.number,
    title: PropTypes.string
}

Button.defaultProps = {
    colorScheme: 0
}