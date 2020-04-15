import React from "react"
import { LinkSwitch as Link } from "../../LinkSwitch"
import theme from "../../_theme"
import styled from "styled-components"

const Outer = styled.nav`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
        margin-right: auto;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px;
    padding-left: 0;
`

const ItemLink = styled(Link)`
    display: block;
    padding: 21px 15px;
    color: ${props => props.isWhite ? (props.isSticky ? theme.black : theme.white) : theme.black};
    text-decoration: none;
    position: relative;

    &:after{
        position: absolute;
        left: 15px;
        right: 15px;
        bottom: 15px;
        display: block;
        content: "";
        border-bottom: ${props => props.active ? `2px solid ${props.isWhite ? (props.isSticky ? theme.black : theme.white) : theme.black}` : ""};
        @media screen and (min-width: ${theme.l}){
            bottom: 17px;
        }
    }
    &:before{
        display: block;
        content: "";
        position: absolute;
        margin: 0 auto;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; 
        height: 0; 
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid ${props => props.hovered ? theme.grey : "transparent"};
    }
`


const Item = styled.li`
    font-weight: 600;
    font-size: 0.9rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1rem;
    }
    &:first-of-type {
        a {
            margin-left: -15px;
        }
    }
`

const ChildBar = styled.div`
    @keyframes fadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    position: absolute;
    background: ${theme.grey};
    top: 64px;
    left: 0;
    width: 100%;
    animation: fadeIn 0.1s ease-out;
`

const ChildList = styled.ul`
    padding: 0px ${theme.horizontalPadding};
    max-width:  ${theme.l};
    margin: 0 auto;
    width: 100%;
    &:hover a{
        color: ${theme.darkGrey}
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: ${theme.xl};
    }
`

const ChildItem = styled.li`
    display: inline-block;
    padding: 0px;
    @media screen and (min-width: ${theme.l}){
        font-size: 1rem;
    }
`

const ChildLink = styled(Link)`
    color: ${theme.black};
    text-decoration: none;
    padding: 10px 13px;
    display: inline-block;
    &:hover {
        color: ${theme.black} !important;
    }
    @media screen and (min-width: ${theme.l}){
        padding: 15px 17px;
    }
`

const Nav = ({
    navItems,
    selected,
    setSelected,
    isOverlaid,
    isSticky
}) =>
    <Outer>
        <List>
            {navItems.map((navItem, i) =>
                <Item 
                    key={i}
                >
                    <ItemLink
                        onMouseEnter={() => setSelected(i)}
                        onFocus={() => setSelected(i)}
                        aria-haspopup="true"
                        to={navItem.url} 
                        external={navItem.external}
                        active={navItem.active}
                        hovered={selected === i}
                        // role="menuitem"
                        isWhite={isOverlaid}
                        isSticky={isSticky}
                    >
                        {navItem.title}
                    </ItemLink>
                    {selected === i &&
                        <ChildBar>
                            <ChildList id={i}>
                                {navItem.children.map((child, j) =>
                                    <ChildItem
                                        key={j}
                                        // role="menuitem"
                                    >
                                        <ChildLink to={child.url}>
                                            {child.title}
                                        </ChildLink>
                                    </ChildItem>
                                )}
                            </ChildList>
                        </ChildBar>
                    }
                </Item>
            )}
        </List>
    </Outer>

export default Nav