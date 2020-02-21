import React from "react"
import { Link } from "@reach/router"

export const LinkSwitch = ({
    url,
    to,
    external,
    children,
    ...props
}) => external ? 
    <a href={url || to} {...props}>
        {children}
    </a> : 
    <Link to={url || to} {...props}>
        {children}
    </Link>