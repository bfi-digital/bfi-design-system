import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.ul`
    display: block;
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    border-bottom: 1px solid ${theme.darkPink};
    margin-bottom: 25px;
`

const Li = styled.li`
    display: inline-block;
    padding: 15px 20px;
    &:first-of-type{
        padding-left: 0px;
    }
`

const A = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.active ? theme.darkPink : theme.charcoal};

`

export const TabList = ({
    children
}) =>
    <Outer role="tablist">{children}</Outer>

export const Tab = ({
    children,
    openTab,
    setOpenTab,
    i
}) =>
    <Li role="presentation">
        <A
            role="tab"
            id={`tab${i}`}
            href={`#section${i}`}
            aria-selected={openTab === i}
            onClick={() => setOpenTab(i)}
            active={openTab === i}
        >
            {children}
        </A>
    </Li>

export const TabPanel = ({
    children,
    i,
    openTab
}) =>
    <section 
        role="tabpanel"
        id={`section${i}`}
        aria-labelledby={`tab${1}`}
        hidden={openTab !== i}
    >
        {children}
    </section>

Tab.propTypes = {
    // The value of the currently open tab
    openTab: PropTypes.number,
    // A function to update the currently open tab, such as that provided by the useState hook
    setOpenTab: PropTypes.func,
    // This tab's identity, to associate links with panels
    i: PropTypes.number
}

TabPanel.propTypes = {
    // The value of the currently open tab
    openTab: PropTypes.number,
    // This tab panels identity, to associate panels with links
    i: PropTypes.number
}