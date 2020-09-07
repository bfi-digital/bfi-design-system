import React, { useEffect, useCallback } from "react"
import { LinkSwitch as Link } from "../../LinkSwitch"
import theme from "../../_theme"
import styled from "styled-components"
import logo from "../logo-black.svg"
import PropTypes from "prop-types"

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
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
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
    text-shadow: ${props => props.isWhite ?(props.isSticky ? "none" : "0px 0px 10px rgba(0,0,0,0.3)") : "none"};

    &:after{
        position: absolute;
        display: block;
        content: "";
        height: 2px;
        background-color: ${props => props.isWhite ? (props.isSticky ? theme.black : theme.white) : theme.black};
        width: ${props => props.active ? "calc(100% - 30px)" : "0"};
        left: 15px;
        right: 15px;
        bottom: 15px;
        transition: all 0.3s ease-in-out;

        @media screen and (max-width: ${theme.m_sub}) and (min-width: ${theme.m}){
            left: 8px;
            right: 8px;
            bottom: 8px;
            width: ${props => props.active ? "calc(100% - 16px)" : "0"};
        }
        @media screen and (min-width: ${theme.m_sub}){
            left: 13px;
            right: 13px;
            bottom: 11px;
            width: ${props => props.active ? "calc(100% - 26px)" : "0"};
        }
        @media screen and (min-width: ${theme.l}){
            bottom: 17px;
            left: 15px;
            right: 15px;
            width: ${props => props.active ? "calc(100% - 30px)" : "0"};
        }
    }
    &:hover {
        &:after {
            opacity: ${props => props.active ? "1" : "0.8"};
            visibility: visible;
            width: calc(100% - 30px);
            @media screen and (max-width: ${theme.m_sub}) and (min-width: ${theme.m}){
                width: calc(100% - 16px);
            }
            @media screen and (min-width: ${theme.m_sub}){
                width: calc(100% - 26px);
            }
            @media screen and (min-width: ${theme.l}){
                width: calc(100% - 30px);
            }
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
        border-bottom: 8px solid ${props => props.hovered ? (props => props.isWhite ? (props.isSticky ? theme.lightGrey : theme.white) : theme.lightGrey) : "transparent"};
        z-index: 999;
    }
    &:first-child {
        margin-left: -5px;
        @media screen and (min-width: ${theme.l}){
            margin-left: -15px;
        }
    }
`


const Item = styled.li`
    font-weight: ${theme.fontWeight_semiBold};
`
const ChildBarContainer = styled.div`
    @keyframes fadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    animation: fadeIn 0.1s ease-out;    
    z-index: 998;
    position: absolute;
    top: 59px;
    left: 0;
    width: 100%;
    
    @media screen and (max-width: ${theme.m_sub}) and (min-width: ${theme.m}){
        top: 42px;
    }
    @media screen and (min-width: ${theme.m_sub}){
        top: 50px;
    }        
    @media screen and (min-width: ${theme.l}){
        top: 64px;
    }
`
const ChildBar = styled.div`
    background: ${props => props.isWhite ? (props.isSticky ? theme.lightGrey : theme.white) : theme.lightGrey};
    border-bottom: 1px solid ${theme.grey};
    border-top: 1px solid ${theme.grey};
    margin: 0 auto;
`
const Shadow = styled.div`
    background: rgba(255,255,255,0.6);
    width: 100%;
    height: calc(100vh - 100%);
    position: absolute;
    top: 59px;
    left: 0;
    z-index: -1;
    @media screen and (min-width: ${theme.l}){
        top: 64px;
    }
`
const ChildList = styled.div`
    padding: 0px;
    padding-top: 10px;
    padding-left: 5px;
    margin: 0 auto;
    width: 100%;
    max-width: calc(${theme.xl} + 125px);

    &:hover a{
        color: ${theme.darkGrey};
    }
    li {
        a {
            margin-left: 0px !important;
        }
    }
    @media screen and (min-width: ${theme.m}){
        max-width: ${theme.l};
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }
}
`
const InnerContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
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
    display: table;
    position: relative;
    min-height: 75px;

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
        @media screen and (max-width: ${theme.m_sub}) and (min-width: ${theme.m}){
            left: 8px;
            width: calc(100% - 15px);
        }
        @media screen and (min-width: ${theme.m_sub}){
            left: 12px;
        }
        @media screen and (min-width: ${theme.l}){
            left: 15px;
        }
    }
    &:hover {
        color: ${theme.black} !important;
    }

    @media screen and (max-width: ${theme.m_sub}) and (min-width: ${theme.m}){
        min-height: 65px;    
    }
    @media screen and (min-width: ${theme.l}){
        padding: 15px 15px;
        font-size: ${theme.fontSize_s};
        min-height: 88px;    
    }
`

const BlackLogoLink = styled(Link)`
    margin-right: 20px;
    padding: 20px 10px !important;
    margin-left: -10px;
`
const Logo = styled.img`
    width: 40px;
    height: 41px;
    vertical-align: middle;
`
const HighlightContainer = styled.div`
    padding: 0 15px;
    width: 100%;
    padding-right: 75px;
`
const HighlightLink = styled(Link)`
    padding: 25px 15px;
    width: 100%;
    border-top: 2px solid ${theme.darkGrey};
    text-align: center;
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
        background: ${theme.lightGrey};
    }
    &:focus {
        // border-radius: 7px;
        box-shadow: ${theme.focus} 0px 0px 0px 4px;
        outline: none !important;
    }
`

const OpenMenuButton = styled.button`
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    white-space: nowrap !important;
    padding: 10px ${theme.standardSpace}px;
    font-weight: 700;
    display: block;
    text-decoration: none;
    z-index: 99999;
    color: ${theme.primary};
    background: ${theme.white};
    border: 1px solid ${theme.darkGrey};
    margin-left: -8px;

    &:focus {
        position: absolute !important;
        width: auto !important;
        height: auto !important;
        overflow: visible !important;
        clip: auto !important;
        -webkit-clip-path: none !important;
        clip-path: none !important;
        white-space: inherit !important;
        outline: none;
    }
`

const Nav = ({
    navItems,
    selected,
    setSelected,
    isOverlaid,
    isSticky
}) => {
    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            setSelected(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false)
    
        return () => {
            document.removeEventListener("keydown", escFunction, false)
        }
    }, [])

    return(
        <Outer role="navigation" aria-label="Main" onMouseLeave={() => { setSelected(false) }}>
            <List>
                {isSticky && 
                    <Item>
                        <BlackLogoLink to="/"> 
                            <Logo src={logo} alt="Home"/>
                        </BlackLogoLink>
                    </Item>
                }
                {navItems.map((navItem, i) => {
                    const tempNavArray = navItem.children.slice(0, -1);
                    const size = Math.ceil(tempNavArray.length / 3);

                    return(
                        <Item 
                            key={navItem.title}
                        >
                            <ItemLink
                                onMouseEnter={() => setSelected(i)}
                                onFocus={() => setSelected(false)}
                                aria-haspopup="true"
                                aria-expanded={selected === i}
                                to={navItem.url} 
                                external={navItem.external}
                                active={navItem.active}
                                hovered={selected === i}
                                // role="menuitem"
                                isWhite={isOverlaid}
                                isSticky={isSticky}
                                data-tracking="header-navigation"
                            >
                                {navItem.title}
                            </ItemLink>
                            <OpenMenuButton onClick={() => selected === i ? setSelected(false) : setSelected(i)}>{selected === i ? "Close" : "Open"} submenu</OpenMenuButton>

                            {selected === i &&
                                <>
                                    <ChildBarContainer isSticky={isSticky} isWhite={isOverlaid} onMouseLeave={() => { setSelected(false) }}>
                                        <ChildBar isSticky={isSticky} isWhite={isOverlaid}>
                                            <ChildList id={i}>
                                                <InnerContainer>
                                                    <Column className={"row_"+size}>
                                                        {tempNavArray.slice(0, size).map((child) =>
                                                            <ChildLink key={child.title} to={child.url}  data-tracking="header-navigation">
                                                                <span>{child.title}</span>
                                                            </ChildLink>
                                                        )}
                                                    </Column>
                                                    <Column className={"row_"+size}>
                                                        {tempNavArray.slice(size, (size*2)).map((child) =>
                                                            <ChildLink key={child.title} to={child.url}  data-tracking="header-navigation">
                                                                <span>{child.title}</span>
                                                            </ChildLink>
                                                        )}
                                                    </Column>
                                                    <Column className={"row_"+size}>
                                                        {tempNavArray.slice((size*2), (size*3)).map((child) =>
                                                            <ChildLink key={child.title} to={child.url}  data-tracking="header-navigation">
                                                                <span>{child.title}</span>
                                                            </ChildLink>
                                                        )}
                                                    </Column>
                                                    {/* convert to this if making a custom highlight text option 
                                                    { navItem.highlightText && 
                                                        <HighlightContainer>
                                                            <HighlightLink to={navItem.highlightURL} data-tracking="header-navigation">{navItem.highlightText}</HighlightLink>
                                                        </HighlightContainer>
                                                    } */}
                                                    <HighlightContainer>
                                                        <HighlightLink to={navItem.children[navItem.children.length - 1].url} data-tracking="header-navigation">{navItem.children[navItem.children.length - 1].title}</HighlightLink>
                                                    </HighlightContainer>
                                                </InnerContainer>
                                            </ChildList>
                                        </ChildBar>
                                    </ChildBarContainer>
                                    <Shadow />
                                </>
                            }
                        </Item>
                    )
                })}
            </List>
        </Outer>
    )
}

export default Nav


Nav.propTypes = {
    /** 
	 * An array of all the navigation items on the BFI website. Each element of the array contains a top level pillar with a `title` and a `url` field and a `children` array, containing all the sub pages of this pillar which also have a `title` and `url field. 
	 **/
    navItems: PropTypes.array,
    /** 
	 * A number to say if the current menu is selcted.
	 **/
    selected: PropTypes.number,
    /** 
	 * A function to set which nav is selected.
	 **/
    setSelected: PropTypes.func,
    /** 
	 * A boolean to determine if the header is overlaid
	 **/
    isOverlaid: PropTypes.bool,
    /** 
	 * A boolean to determine if the header is currently sticky to the top of the page
	 **/
    isSticky: PropTypes.bool
}

Nav.defaultProps = {
    overlay: false
}
