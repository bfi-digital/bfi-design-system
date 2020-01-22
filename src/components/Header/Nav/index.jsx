import React from "react"
import { Link } from "@reach/router"
import theme from "../../_theme"
import styled from "styled-components"

const List = styled.ul``

const Item = styled.li``

const Nav = ({
    navItems
}) =>
    <nav>
        <List>
            {navItems.map((navItem, i) =>
                <Item key={i}>
                    {navItem.title}
                </Item>
            )}
        </List>
    </nav>

export default Nav