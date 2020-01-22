import * as React from "react"
import { useState } from "react"
import { Link } from "@reach/router"
import styled from "styled-components"
import theme from "../_theme"

import * as logo from "./logo-black.svg"
import * as menuIcon from "./menu-black.svg"
import * as closeIcon from "./close-black.svg"

const Outer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const MenuButton = styled.button`
    border: none;
    cursor: pointer;
    background: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${theme.charcoal};
    img{
        height: 12px;
        margin-right: 5px;
    }
`

const Logo = styled.img`
    width: 46px;
`

interface navItem {
    id: number,
    title: string,
    url: string
}

interface Props {
    navItems: navItem[]
    hero: boolean
}

export const Header: React.FC<Props> = ({
    navItems
}) => {

    const [mobilePanel, setMobilePanel] = useState(false)

    return(
        <>
            <Outer>
                <Link to="/">
                    {console.log(logo)}
                    <Logo src={logo} alt="British Film Institute"/>
                </Link>
                <MenuButton onClick={() => setMobilePanel(!mobilePanel)}>
                    {mobilePanel ? 
                        <>
                            <img src={closeIcon} alt=""/>
                            Close
                        </>
                        :
                        <>
                            <img src={menuIcon} alt=""/>
                            Menu
                        </>
                    }
                </MenuButton>    
            </Outer>

            {mobilePanel && navItems.map((navItem, i) =>
                <li key={i}>
                    <Link to={navItem.url}>
                        {navItem.title}
                    </Link>
                </li>
            )}


        </>
    )
}

