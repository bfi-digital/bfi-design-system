import React, { useState } from "react"
import { Link } from "@reach/router"
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
    position: fixed;
    /* offset header */
    top: 61px;
    left: 0px;
    width: 100%;
    bottom: 0px;
    background: ${theme.white};
    padding: 0px 15px;
    animation: fadeIn 0.1s ease-out;
    overflow-y: scroll;
`

const List = styled.ul`
    list-style: none;
    padding-left: 0px;
    &:hover li a{
        color: ${theme.darkGrey};
    }
`

const Item = styled.li`
    border-bottom: 1px solid ${theme.grey};
    &:last-of-type{
        border-bottom: none;
    }
    &:hover a{
        color: ${theme.charcoal} !important;
    }
    &:focus-within{
        background-color: ${theme.lightGrey}
    }
`

const ItemButton = styled.button`
    text-decoration: none;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.charcoal};
    transition: color 0.1s;
    display: block;
    padding: 15px 0px;
    &:focus{
        outline: none;
    }
`

const ChildList = styled.ul`
    list-style: none;
    padding-left: 20px;
`

const ChildItem = styled.li`
    font-weight: normal;
    color: ${theme.charcoal};
    padding-bottom: 15px;
`

const ChildLink = styled(Link)`
    color: ${theme.charcoal};
    text-decoration: none;
`

const MobilePanel = ({
    navItems
}) => {
    const [ selected, setSelected ] = useState(false)

    return(
        <Panel>
            <List>
                {navItems.map((navItem, i) =>
                    <Item key={i}>
                        <ItemButton onClick={() => selected === false ? setSelected(i) : setSelected(false)}>
                            {navItem.title}
                        </ItemButton>
                        <ChildList>

                            {selected === i && navItem.children.map((child, j) =>
                                <ChildItem key={j}>
                                    <ChildLink to={child.url}>
                                        {child.title}
                                    </ChildLink>
                                </ChildItem>
                            )}
                        </ChildList>
                    </Item>
                )}
            </List>
        </Panel>

    )
}

export default MobilePanel