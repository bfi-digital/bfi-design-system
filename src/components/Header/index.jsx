import React, { useState } from "react"
import theme from "../_theme"
import styled from "styled-components"
import { Link } from "@reach/router"
import Search from "./Search"
import MobilePanel from "./MobilePanel"
import MenuButton from "./MenuButton"
import Nav from "./Nav"
import logo from "./logo-black.svg"

const Wrapper = styled.div`
    z-index: 999;
`

const Outer = styled.header`
    background: ${theme.white};
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
`

const Logo = styled.img`
    width: 46px;
`

export const Header = ({
    navItems
}) => {

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)

    return(
        <Wrapper>
            <Outer onMouseLeave={() => setSelected(false)}>
                <Inner>
                    <Link to="/">
                        <Logo src={logo} alt="British Film Institute"/>
                    </Link>
                    <Nav
                        navItems={navItems}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <MenuButton 
                        handleClick={() => setOpen(!open)}
                        open={open}
                    />
                    <Search/>
                </Inner>
            </Outer>

            {open && <MobilePanel navItems={navItems}/>}
        </Wrapper>
    )
}

