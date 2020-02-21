import React from "react"
import { Link } from "@reach/router"

export const LinkSwitch = ({
    url,
    external,
    children,
    ...props
}) => external ? 
    <a href={url} {...props}>
        {children}
    </a> : 
    <Link to={url} {...props}>
        {children}
    </Link>