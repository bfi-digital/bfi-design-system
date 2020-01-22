import React from "react"
import { Link } from "@reach/router"
import theme from "../../_theme"
import styled from "styled-components"

const Panel = styled.nav`
    position: fixed;
    /* offset header */
    top: 61px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: ${theme.white};
    padding: 0px 15px;
`

const List = styled.ul`
    list-style: none;
    padding-left: 0px;
`

const Item = styled.li`
    font-weight: bold;
    font-size: 0.9rem;
    padding: 10px 0px;
    border-bottom: 1px solid ${theme.grey};
    &:last-of-type{
        border-bottom: none;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.charcoal};
`

const MobilePanel = ({
    navItems
}) =>
    <Panel>
        <List>
            {navItems.map((navItem, i) =>
                <Item key={i}>
                    <StyledLink to={navItem.url}>
                        {navItem.title}
                    </StyledLink>
                </Item>
            )}
        </List>
    </Panel>

export default MobilePanel