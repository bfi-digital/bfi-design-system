import React from "react"

export const LinkSwitch = ({
    url,
    to,
    children,
    ...props
}) => 
    <a href={url || to} {...props}>
        {children}
    </a>
