import React from "react"
import { LinkSwitch as Link } from "../../LinkSwitch"
import theme from "../../_theme"
import styled from "styled-components"
import logo from "../logo-black.svg"

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
    margin-right: 15px;

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
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; 
        height: 0; 
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid ${props => props.hovered ? theme.lightGrey : "transparent"};
        z-index: 99;
    }
    &:first-child {
        margin-left: -15px;
    }
`


const Item = styled.li`
    font-weight: 600;
    font-size: 0.9rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1rem;
    }
`

const ChildBar = styled.div`
    background: ${theme.lightGrey};
    border-bottom: 1px solid ${theme.grey};
    border-top: 1px solid ${theme.grey};

    @keyframes fadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    margin: 0 auto;
    position: absolute;
    top: 61px;
    left: 0;
    width: 100%;
    animation: fadeIn 0.1s ease-out;
    @media screen and (min-width: ${theme.l}){
        top: 64px;
    }
`

const ChildList = styled.div`
    padding: ${theme.horizontalPadding} ${theme.horizontalPadding};
    padding-bottom: 0px;
    margin: 0 auto;
    width: 100%;
    max-width: calc(${theme.xl} + 125px);

    &:hover a{
        color: ${theme.darkGrey}
    }
    li {
        a {
            margin-left: 0px !important;
        }
    }
`
const InnerContainer = styled.div`
    max-width: ${theme.l};
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`
const Column = styled.div`
    width: calc(33% - 50px);
    margin-right 50px;

    &.row_1 {
        a:nth-child(1n) {
            &:after {
                display: none;
            }
        }
    }
    &.row_2 {
        a:nth-child(2n) {
            &:after {
                display: none;
            }
        }
    }
    &.row_3 {
        a:nth-child(3n) {
            &:after {
                display: none;
            }
        }
    }
    &.row_4 {
        a:nth-child(4n) {
            &:after {
                display: none;
            }
        }
    }
    &.row_5 {
        a:nth-child(5n) {
            &:after {
                display: none;
            }
        }
    }
    &.row_6 {
        a:nth-child(6n) {
            &:after {
                display: none;
            }
        }
    }
    a:last-child {
        &:after {
            display: none;
        }
    }
`
const ChildLink = styled(Link)`
    color: ${theme.black};
    text-decoration: none;
    padding: 10px 15px;
    width: 100%;
    min-height: 75px;
    display: table;
    position: relative;

    span {
        display: table-cell;
        vertical-align: middle;
    }
    &:after {
        content: "";
        width: calc(100% - 30px);
        height: 2px;
        background: ${theme.darkGrey};
        bottom: 0;
        left: 15px;
        position: absolute;
    }
    &:hover {
        color: ${theme.black} !important;
    }
    @media screen and (min-width: ${theme.l}){
        padding: 15px 15px;
        font-size: 1rem;
    }
`

const BlackLogo = styled(Item)`
    margin-right: 30px;
`
const Logo = styled.img`
    width: 40px;
    vertical-align: middle;
`
const HighlightContainer = styled.div`
    padding: 0 15px;
    width: 100%;
`
const HighlightLink = styled(Link)`
    padding: 25px 15px;
    width: 100%;
    border-top: 2px solid ${theme.darkGrey};
    text-align: center;
    color: ${theme.primary} !important;
    font-weight: 700;
    text-decoration: none;
    margin-top: 15px;
    display: block;
    -webkit-transition: background ease 0.3s;
    -moz-transition: background ease 0.3s;
    -o-transition: background ease 0.3s;
    transition: background ease 0.3s;

    &:hover {
        color: ${theme.dark} !important;
        background: ${theme.grey};
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
            {isSticky && 
                <Link to="/">
                    <BlackLogo><Logo src={logo} alt="British Film Institute"/></BlackLogo>
                </Link>
            }
            {navItems.map((navItem, i) => {
                const size = Math.ceil(navItem.children.length / 3)
                return(
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
                                    <InnerContainer>
                                        <Column className={"row_"+size}>
                                            {navItem.children.slice(0, size).map((child, j) =>
                                                <ChildLink key={j} to={child.url}>
                                                    <span>{child.title}</span>
                                                </ChildLink>
                                            )}
                                        </Column>
                                        <Column className={"row_"+size}>
                                            {navItem.children.slice(size, (size*2)).map((child, j) =>
                                                <ChildLink key={j} to={child.url}>
                                                    <span>{child.title}</span>
                                                </ChildLink>
                                            )}
                                        </Column>
                                        <Column className={"row_"+size}>
                                            {navItem.children.slice((size*2), (size*3)).map((child, j) =>
                                                <ChildLink key={j} to={child.url}>
                                                    <span>{child.title}</span>
                                                </ChildLink>
                                            )}
                                        </Column>
                                        { navItem.highlightText && 
                                            <HighlightContainer>
                                                <HighlightLink to={navItem.highlightURL}>{navItem.highlightText}</HighlightLink>
                                            </HighlightContainer>
                                        }
                                    </InnerContainer>
                                </ChildList>
                            </ChildBar>
                        }
                    </Item>
                )
            })}
        </List>
    </Outer>

export default Nav