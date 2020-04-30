import React, { useState } from "react"
import { LinkSwitch as Link } from "../../LinkSwitch"
import theme from "../../_theme"
import styled from "styled-components"

const Panel = styled.nav`
    @keyframes fadeIn{
        from{ 
            opacity: 0 
        }
        to{ 
            opacity: 1 
        }
    }
    z-index: 999;
    position: fixed;
    /* offset header */
    top: 64px;
    left: 0px;
    width: 100%;
    bottom: 0px;
    background: ${theme.white};
    padding: 0px ${theme.horizontalPadding};
    animation: fadeIn 0.1s ease-out;
    overflow-y: scroll;
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`

const List = styled.ul`
    list-style: none;
    padding-left: 0px;
    &:hover li button{
        color: ${theme.darkGrey};
    }
`

const Item = styled.li`
    border-bottom: 1px solid ${theme.grey};
    transition: border-color 0.1s;
    &:last-of-type{
        border-bottom: none;
    }
    &:hover {
        border-color: ${theme.darkGrey};
        button{
            color: ${theme.black} !important;
        }
    }
`

const ItemButton = styled.button`
    text-decoration: none;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.black};
    transition: color 0.1s;
    display: block;
    padding: 15px 0px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    &:focus {
        // border-radius: 7px;
        box-shadow: #ED3732 0px 0px 0px 4px;
        outline: none !important;
    }
`

const ChildList = styled.ul`
    list-style: none;
    padding-left: 20px;
    &:hover a{
        color: ${theme.darkGrey}
    }
`

const ChildItem = styled.li`
    font-weight: normal;
`

const ChildLink = styled(Link)`
    display: block;
    color: ${theme.black};
    text-decoration: none;
    padding: 10px 0;
    transition: color 0.1s;
    &:hover{
        color: ${theme.black} !important;
    }
    &:focus {
        // border-radius: 7px;
        box-shadow: #ED3732 0px 0px 0px 4px;
        outline: none !important;
    }
`

const QuickLinks = styled.div`
    margin-top: 25px;
`

const QuickLink = styled(Link)`
    color: ${theme.dark};
    font-weight: 700;
    text-decoration: none;
    padding: 10px 0;
    display: block;
    &:focus {
        // border-radius: 7px;
        box-shadow: #ED3732 0px 0px 0px 4px;
        outline: none !important;
    }
`

const MobilePanel = ({
    navItems
}) => {

    const [ selected, setSelected ] = useState(false)

    return(
        <Panel id="menu-panel" role="region">
            <List>
                {navItems.map((navItem, i) =>
                    <Item key={i}>
                        <ItemButton
                            aria-controls={i}
                            aria-expanded={selected === i ? "true" : "false"}
                            onClick={() => selected === i ? setSelected(false) : setSelected(i)}
                        >
                            {navItem.title}
                        </ItemButton>
                        <ChildList id={i}>
                            {selected === i &&
                                <>
                                    <ChildItem>
                                        <ChildLink to={navItem.url} external={navItem.external}>
                                            {navItem.title} home
                                        </ChildLink>
                                    </ChildItem>
                                    {navItem.children.map((child, j) =>
                                        <ChildItem key={j}>
                                            <ChildLink to={child.url} external={child.external}>
                                                {child.title}
                                            </ChildLink>
                                        </ChildItem>
                                    )}
                                </>
                            }
                        </ChildList>
                    </Item>
                )}
            </List>
            <QuickLinks>
                {/* todo: need to convert these to be dynamically pulled data from CMS */}
                <QuickLink to="/">BFI Southbank</QuickLink>
                <QuickLink to="/">Become a Member</QuickLink>
            </QuickLinks>
        </Panel>
    )
}

export default MobilePanel