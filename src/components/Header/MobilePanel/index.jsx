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
            color: ${theme.charcoal} !important;
        }
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
    width: 100%;
    text-align: left;
    cursor: pointer;
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
    color: ${theme.charcoal};
    text-decoration: none;
    padding-bottom: 15px;
    transition: color 0.1s;
    &:hover{
        color: ${theme.charcoal} !important;
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
                                        <ChildLink to={navItem.url}>
                                            {navItem.title} home
                                        </ChildLink>
                                    </ChildItem>
                                    {navItem.children.map((child, j) =>
                                        <ChildItem key={j}>
                                            <ChildLink to={child.url}>
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
        </Panel>
    )
}

export default MobilePanel