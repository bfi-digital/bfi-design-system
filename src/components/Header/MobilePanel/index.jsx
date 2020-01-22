import * as React from "react"
import { Link } from "@reach/router"

interface navItem {
    title: string
    url: string
}

interface Props {
    navItems: navItem[]
}

const MobilePanel: React.FC<Props> = ({
    navItems
}) =>
    <ul>
        {navItems.map((navItem, i) =>
            <li key={i}>
                {navItem.url}
                <Link to={navItem.url}>
                    {navItem.title}
                </Link>
            </li>
        )}
    </ul>

export default MobilePanel