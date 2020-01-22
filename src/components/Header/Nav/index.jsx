import React from "react"
import { Link } from "@reach/router"
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
`

const Item = styled.li`
    font-weight: bold;
`

const ItemLink = styled(Link)`
    display: block;
    padding: 15px;
    border: 1px solid red;
    color: ${theme.charcoal};
    text-decoration: none;
    position: relative;
    &:after{
        position: absolute;
        left: 15px;
        right: 15px;
        bottom: 13px;
        display: block;
        content: "";
        border-bottom: ${props => props.active ? `2px solid ${theme.charcoal}` : ""};
    }
`

const Nav = ({
    navItems
}) =>
    <Outer>
        <List>
            {navItems.map((navItem, i) =>
                <Item key={i}>
                    <ItemLink to={navItem.url} active={navItem.active}>
                        <span></span>{navItem.title}
                    </ItemLink>
                </Item>
            )}
        </List>
    </Outer>

export default Nav