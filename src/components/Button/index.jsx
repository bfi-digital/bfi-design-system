import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { LinkSwitch as Link } from "../LinkSwitch"
import theme from "../_theme"

const colorSchemes = [
    {
        shadow: theme.primary,
        activeBackground: theme.dark,
        text: theme.white,
        background: theme.black,
        focus: theme.focus
    },
    {
        shadow: theme.primary,
        activeBackground: theme.dark,
        text: theme.black,
        background: theme.white,
        focus: theme.focus
    },
    // BFIPlayer rental
    {
        shadow: theme.playerRentals,
        activeBackground: theme.playerRentals,
        text: theme.black,
        background: theme.white,
        focus: theme.focus
    },
    // BFIPlayer subscription
    {
        shadow: theme.playerSubs,
        activeBackground: theme.playerSubs,
        text: theme.black,
        background: theme.white,
        focus: theme.focus
    },
    // BFIPlayer free
    {
        shadow: theme.playerFree,
        activeBackground: theme.playerFree,
        text: theme.black,
        background: theme.white,
        focus: theme.focus
    },
    // BFIPlayer subscription BLACK
    {
        shadow: theme.playerSubs,
        activeBackground: theme.playerSubs,
        text: theme.white,
        background: theme.black,
        focus: theme.focus
    },
]

const PrimaryButton = styled(Link)`
    display: inline-block;
    position: relative;
    font-weight: ${theme.fontWeight_bold};
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    color: ${props => colorSchemes[props.colorScheme].text};
    background: ${props => colorSchemes[props.colorScheme].background};
    text-decoration: none;
    text-shadow: none;
    padding: 10px ${theme.standardSpace}px;
    z-index: 2;
    width: 100%;
    text-align: center;
    transition: color .3s;

    &[contrast=dark] {
        background: ${theme.black};
        color: ${theme.white};
    }

    &[contrast=light] {
        background: ${theme.white};
        color: ${theme.black};
    }

    svg {
        fill: currentColor;
    }

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
        color: ${theme.white};
        
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
        background: ${props => colorSchemes[props.colorScheme].activeBackground} !important;
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

const DisabledButton = styled.div`
    background: ${theme.darkGrey};
    color: ${theme.white};
    cursor: not-allowed;
    display: inline-block;
    position: relative;
    font-weight: ${theme.fontWeight_bold};
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    text-decoration: none;
    padding: 10px ${theme.standardSpace}px;
    z-index: 2;
    width: 100%;
    text-align: center;
    @media screen and (min-width: ${theme.m}){
        width: auto;
    }
`

const SecondaryButton = styled(Link)`
    border: 2px solid ${theme.black};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_bold};
    // border-radius: 5px;
    font-size: ${theme.fontSize_s};
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
    font-weight: ${theme.fontWeight_bold};
    // border-radius: 5px;
    font-size: ${theme.fontSize_s};
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
    colorScheme = 0,
    playerPillar,
    disabled,
    ...props
}) => {
    title = title || undefined
    if(disabled) return <DisabledButton title={title} colorScheme={colorScheme} disabled={disabled} {...props}>{children}</DisabledButton>
    if(level === 3) return <TertiaryButton title={title} colorScheme={colorScheme} {...props}>{children}</TertiaryButton>
    if(level === 2) return <SecondaryButton title={title} colorScheme={colorScheme} {...props}>{children}</SecondaryButton>
    return <PrimaryButton title={title} colorScheme={playerPillar === "rentals" ? 2 : playerPillar === "subscription" ? 3 : playerPillar === "free" ? 4 : playerPillar === "blackSubscription" ? 5 : colorScheme} {...props}>{children}</PrimaryButton>
}

Button.propTypes = {
    url: PropTypes.string,
    // A number between 1 and 3
    level: PropTypes.number,
    colorScheme: PropTypes.number,
    title: PropTypes.string,
    // If button links to player, add the pillar for this to theme it
    playerPillar: PropTypes.string,
    disabled: PropTypes.bool,
    contrast: PropTypes.oneOf(["light", "dark", "auto"])
}

Button.defaultProps = {
    colorScheme: 0,
    disabled: false,
    contrast: "auto"
}
