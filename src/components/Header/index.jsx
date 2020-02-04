import React, { useState } from "react"
import theme from "../_theme"
import styled from "styled-components"
import { Link } from "@reach/router"
import Search from "./Search"
import QuickLinks from "./QuickLinks"
import MobilePanel from "./MobilePanel"
import MenuButton from "./MenuButton"
import Nav from "./Nav"
import logo from "./logo-black.svg"
import logoWhite from "./logo-white.svg"

// HEADER TODO:
// 1. On scroll make header sticky and turn off isOverlaid
// 2. possibly removing search button


// const Wrapper = styled.div`
//     z-index: 999;
//     position: relative;
// `

const Outer = styled.header`
    background: ${props => props.isTransparent ? "transparent" : theme.white};
    border-bottom: ${props => props.isTransparent ? "none" : "1px solid " + theme.grey};
    position: relative;
    z-index: 999;
    min-height: 60px;
    position: sticky;
    top: 0px;
    transition: 0.1s ease-out;
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width:  ${theme.l};
    margin: 0 auto;
    padding: 0px 15px;
    @media screen and (min-width: ${theme.xl}){
        max-width: ${theme.xl};
    }

    a, button {
        &:focus {
            box-shadow: 
                inset ${theme.darkPink} 0px 0px 0px 2px,
                inset ${theme.dustyPink} 0px 0px 0px 4px !important;
            outline: none !important;
        }
    }
`

const LogoLink = styled(Link)`
    padding: 6px 2px;
`

const Logo = styled.img`
    width: 46px;
`

export const Header = ({
    navItems,
    overlay
}) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)
    const [isOverlaid, setOverlaid] = useState(overlay)

    return(
        <>
            <QuickLinks onMouseLeave={() => setOverlaid(true)} />
            <Outer 
                onMouseLeave={() => {
                    setSelected(false)
                    setOverlaid(true)
                }}
                onMouseEnter={() => setOverlaid(false)}
                isTransparent={isOverlaid}
            >
                <Inner>
                    <LogoLink to="/">
                        <Logo src={isOverlaid ? logoWhite : logo} alt="British Film Institute"/>
                    </LogoLink>
                    <Nav
                        navItems={navItems}
                        selected={selected}
                        setSelected={setSelected}
                        isOverlaid={isOverlaid}
                    />
                    <MenuButton 
                        handleClick={() => setOpen(!open)}
                        open={open}
                    />
                    <Search isOverlaid={isOverlaid} />
                </Inner>
            </Outer>
            {open && <MobilePanel navItems={navItems}/>}
        </>
    )
}

