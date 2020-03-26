import React from "react"
// import { Link } from "@reach/router"

export const LinkSwitch = ({
    url,
    to,
    external,
    children,
    ...props
}) => 
    <a href={url || to} target={external ? "_blank" : "_self"} {...props}>
        {children}
    </a>
    // <Link to={url || to} {...props}>
    //     {children}
    // </Link>