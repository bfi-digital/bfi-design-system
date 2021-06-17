import React from "react"

export const LinkSwitch = ({ url, to, children, ...props }) => {
    const linkProps = Object.assign({}, props)
    // Remove invalid attributes from html output.
    delete linkProps.color
    delete linkProps.colorScheme
    delete linkProps.strandColorScheme

    return (
        <a href={url || to} {...linkProps}>
            {children}
        </a>
    )
}
