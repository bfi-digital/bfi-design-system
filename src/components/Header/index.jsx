import React from "react"
import { Link } from "@reach/router"

export const Header = ({
    navItems
}) =>
    <header>
        {navItems.map((navItem, i) =>
            <li key={i}>
                <Link to={navItem.url}>
                    {navItem.title}
                </Link>
            </li>
        )}
    </header>

