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
    font-size: 0.9rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1rem;
    }
`

const ItemLink = styled(Link)`
    display: block;
    padding: 20px 15px;
    color: ${theme.charcoal};
    text-decoration: none;
    position: relative;
    &:hover:before{
        display: block;
        content: "";
        position: absolute;
        margin: 0 auto;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; 
        height: 0; 
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid ${theme.grey};
    }
    &:after{
        position: absolute;
        left: 15px;
        right: 15px;
        bottom: 15px;
        display: block;
        content: "";
        border-bottom: ${props => props.active ? `2px solid ${theme.charcoal}` : ""};
        @media screen and (min-width: ${theme.l}){
            bottom: 17px;
        }
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
                        {navItem.title}
                    </ItemLink>
                </Item>
            )}
        </List>
    </Outer>

export default Nav