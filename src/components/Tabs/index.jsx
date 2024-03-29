import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.ul`
    display: block;
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    border-bottom: 1px solid ${theme.dark};
    margin-bottom: 15px;
`

const Li = styled.li`
    display: inline-block;
    padding: 10px 0px;
    
    margin-right: 30px;
    font-size: ${theme.fontSize_xl};
    border-bottom: ${props => props.active ? `3px solid ${theme.dark}` : "none"};
    padding-bottom: ${props => props.active ? "10px" : "11px"};
`

const Button = styled.button`
    font-weight: ${theme.fontWeight_bold};
    text-decoration: none;
    padding: 0px;
    border: none;
    background: none;
    text-decoration: none;
    cursor: pointer;
    font-size: ${theme.fontSize_s};
    color: ${props => props.active ? theme.dark : theme.primary};
    position: relative;

    &:after {
        content: "";
        width: 100%;
        bottom: -14px;
        left: 0;
        height: 2px;
        background: transparent;
        position: absolute;
    }

    &:hover{
        color: ${theme.darkGrey};

        &:after {
            background: ${theme.darkGrey};
        }
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &:focus{
        color: ${theme.black};
        outline: none;
        background: ${theme.lightest};
        box-shadow: 0px 0px 0px 5px ${theme.lightest};
    }
    &:active{
        color: ${theme.black};
    }
    pointer-events: ${props => props.active ? "none" : null};
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
    <Li role="presentation" active={openTab === i}>
        <Button
            role="tab"
            id={`tab${i}`}
            aria-selected={openTab === i}
            onClick={() => setOpenTab(i)}
            active={openTab === i}
        >
            {children}
        </Button>
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
    /** 
    * The value of the currently open tab
    **/
    openTab: PropTypes.number,
    /** 
    * A function to update the currently open tab, such as that provided by the useState hook
    **/
    setOpenTab: PropTypes.func,
    /** 
    * This tab's identity, to associate links with panels
    **/
    i: PropTypes.number
}

TabPanel.propTypes = {
    /** 
    * The value of the currently open tab
    **/
    openTab: PropTypes.number,
    /** 
    * This tab panels identity, to associate panels with links
    **/
    i: PropTypes.number
}