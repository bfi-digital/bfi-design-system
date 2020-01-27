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

const Wrapper = styled.div`
        z-index: 999;
    `

const Outer = styled.header`
    background: ${props => props.isTransparent ? 'transparent' : theme.white};
    position: relative;
    z-index: initial;
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0px 15px;
    @media screen and (min-width: ${theme.xl}){
        max-width: 1440px;
    }
`

const Logo = styled.img`
    width: 46px;
`

export const Header = ({
    navItems,
    isOverlay
}) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)

    return(
        <Wrapper>
            <QuickLinks />
            <Outer 
                onMouseLeave={() => setSelected(false)}
                isTransparent={isOverlay}
            >
                <Inner>
                    <Link to="/">
                        <Logo src={isOverlay ? logoWhite : logo} alt="British Film Institute"/>
                    </Link>
                    <Nav
                        navItems={navItems}
                        selected={selected}
                        setSelected={setSelected}
                        isOverlay={isOverlay}
                    />
                    <MenuButton 
                        handleClick={() => setOpen(!open)}
                        open={open}
                    />
                    <Search isOverlay={isOverlay} />
                </Inner>
            </Outer>

            {open && <MobilePanel navItems={navItems}/>}
        </Wrapper>
    )
}

