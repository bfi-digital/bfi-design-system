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
    top: 52px;
    left: 0px;
    width: 100%;
    bottom: 0px;
    background: ${theme.white};
    padding: 0px ${theme.horizontalPadding};
    animation: fadeIn 0.1s ease-out;
    overflow-y: scroll;
    margin-top: 0;
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`

const List = styled.ul`
    list-style: none;
    margin-top: 0;
    padding-left: 0px;
`

const Item = styled.li`
    &:hover {
        button{
            color: ${theme.black} !important;
        }
    }
`

const ItemButton = styled.button`
    text-decoration: none;
    background: none;
    border: none;
    font-size: ${theme.fontSize_s};
    font-weight: 600;
    color: ${theme.black};
    transition: color 0.1s;
    display: block;
    padding: 15px 0px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    
    &:after {
        content: "";
        border-style: solid;
        border-width: 0.25em 0.25em 0 0;
        display: inline-block;
        height: 0.45em;
        left: 0;
        position: relative;
        top: 6px;
        transform: rotate(45deg);
        vertical-align: top;
        width: 0.45em;
        float: right;
        margin-right: 15px;
        transition: all 0.2s;
    }

    &:focus {
        // border-radius: 7px;
        box-shadow: ${theme.focus} 0px 0px 0px 4px;
        outline: none !important;
    }
    &:focus, &:hover {
        &:after {
            margin-right: 5px;
        }
    }

    &.selected {

        &:after {
            left: 0.25em;
            transform: rotate(-135deg);
            float: left;
        }
        &:focus, &:hover {
            &:after {
                margin-right: 20px;
            }
        }
    }
`

const ChildList = styled.ul`
    list-style: none;
    padding-left: 0;
`

const ChildItem = styled.li`
    font-weight: normal;
`

const ChildLink = styled(Link)`
    display: block;
    color: ${theme.black};
    text-decoration: none;
    padding: 12px 0;
    transition: all 0.2s;
    &:hover{
        padding-left: 10px;
    }
    &:focus {
        // border-radius: 7px;
        box-shadow: ${theme.focus} 0px 0px 0px 4px;
        outline: none !important;
    }
`

const QuickLinks = styled.div`
    margin-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid ${theme.black};
`

const QuickLink = styled(Link)`
    color: ${theme.primary};
    font-weight: 700;
    text-decoration: none;
    padding: 10px 0;
    display: block;
    &:focus {
        // border-radius: 7px;
        box-shadow: ${theme.focus} 0px 0px 0px 4px;
        outline: none !important;
        color: ${theme.dark};
    }
    &:hover {
        color: ${theme.dark};
    }
`

const HighlightContainer = styled.div`
    width: 100%;
    margin-bottom: ${theme.standardSpace};
`
const HighlightLink = styled(Link)`
    width: 100%;
    padding: 10px 0;
    color: ${theme.primary} !important;
    font-weight: 700;
    text-decoration: none;
    display: block;
    -webkit-transition: background ease 0.3s;
    -moz-transition: background ease 0.3s;
    -o-transition: background ease 0.3s;
    transition: background ease 0.3s;

    &:hover {
        color: ${theme.dark} !important;
    }
    &:focus {
        // border-radius: 7px;
        box-shadow: ${theme.focus} 0px 0px 0px 4px;
        outline: none !important;
    }
`


const MobilePanel = ({
    navItems,
    quickLinks
}) => {

    const [ selected, setSelected ] = useState(false)

    return(
        <Panel id="menu-panel" role="region">
            {selected === false && 
                <>
                    {quickLinks && 
                        <QuickLinks>
                            {quickLinks[0] &&
                                <QuickLink to={quickLinks[0].url}>{quickLinks[0].title}</QuickLink>
                            }
                            {quickLinks[1] &&
                                <QuickLink to={quickLinks[1].url}>{quickLinks[1].title}</QuickLink>
                            }
                            {quickLinks[2] &&
                                <QuickLink to={quickLinks[2].url}>{quickLinks[2].title}</QuickLink>
                            }
                        </QuickLinks>
                    }   
                </>
            }
            <List>
                {navItems.map((navItem, i) =>
                    <Item key={navItem.title}>
                        {selected === false ?
                            <ItemButton
                                aria-controls={i}
                                aria-expanded={selected === i ? "true" : "false"}
                                onClick={() => selected === i ? setSelected(false) : setSelected(i)}
                                className={selected === i ? "selected" : ""}
                            >
                                {selected === i ? "Back" : navItem.title}
                            </ItemButton>
                            :
                            <>
                                {selected === i &&
                                    <ItemButton
                                        aria-controls={i}
                                        aria-expanded="true"
                                        onClick={() => setSelected(false)}
                                        className="selected"
                                    >
                                        Back
                                    </ItemButton>
                                }
                            </>
                        }
                        <ChildList id={i}>
                            {selected === i &&
                                <>
                                    <ChildItem>
                                        <ChildLink to={navItem.url} external={navItem.external}>
                                            {navItem.title}
                                        </ChildLink>
                                    </ChildItem>
                                    {navItem.children.map((child) =>
                                        <ChildItem key={child.title}>
                                            <ChildLink to={child.url} external={child.external}>
                                                {child.title}
                                            </ChildLink>
                                        </ChildItem>
                                    )}
                                    { navItem.highlightText && 
                                        <HighlightContainer>
                                            <HighlightLink to={navItem.highlightURL}>{navItem.highlightText}</HighlightLink>
                                        </HighlightContainer>
                                    }
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