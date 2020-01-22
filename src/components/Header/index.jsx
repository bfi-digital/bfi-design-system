import * as React from "react"
import { useState } from "react"
import { Link } from "@reach/router"
import { Outer, Logo } from "./primitives" 
import Search from "./Search"
import MobilePanel from "./MobilePanel"
import MenuButton from "./MenuButton"

import * as logo from "./logo-black.svg"


export const Header = ({
    navItems
}) => {

    const [mobilePanel, setMobilePanel] = useState(false)

    return(
        <>
            <Outer>
                <Link to="/">
                    <Logo src={logo} alt="British Film Institute"/>
                </Link>
                <MenuButton 
                    handleClick={() => setMobilePanel(!mobilePanel)}
                    open={mobilePanel}
                />
                <Search/>
            </Outer>

            {mobilePanel && <MobilePanel navItems={navItems}/>}
        </>
    )
}

