import React, { useState, useEffect, useRef } from "react"
import theme from "../_theme"
import styled from "styled-components"
import PropTypes from "prop-types"
import { LinkSwitch as Link } from "../LinkSwitch"
import QuickLinks from "./QuickLinks"
import MobilePanel from "./MobilePanel"
import MenuButton from "./MenuButton"
import Nav from "./Nav"

import logo from "./logo-black.svg"
import logoWhite from "./logo-white.svg"

const Outer = styled.header`
    background: ${theme.white};
    border-bottom: 1px solid ${theme.grey};
    margin-bottom: ${props => props.isTransparent ? "-175px" : "0px"};
    position: relative;
    z-index: 999;
    min-height: 50px;
    position: sticky;
    top: 0px;

    @media screen and (min-width: ${theme.m}){
        background: ${props => props.isTransparent ? (!props.isSticky ? "transparent" : theme.white) : theme.white};
        border-bottom: 1px solid ${props => props.isTransparent ? (!props.isSticky ? "transparent" : theme.grey) : theme.grey};
    }
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width:  ${theme.l};
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    @media screen and (min-width: ${theme.xl + 200}){
        max-width: ${theme.xl};
    }
    a, button {
        &:focus {
            // border-radius: 7px;
            box-shadow: inset ${theme.focus} 0px 0px 0px 4px;
            outline: none !important;
        }
    }
`

const Logo = styled.img`
    width: 75px;
`

const LogoLink = styled(Link)`
    padding: 6px 2px;
    z-index: 9999;
`

const MobileLogoLink = styled(Link)`
    padding: 0;
    display: block;
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
    img {
        width: 40px;
        margin-top: 5px;
    }
`

const MobileMenuBuffer = styled.div`
    width: 90px;

    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`


const TopSection = styled.div`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
        background: ${props => props.isTransparent ? (!props.isSticky ? "transparent" : theme.white) : theme.white};
        padding-top: 15px;
    }
`
const QuickLinksInner = styled(Inner)`
    position: relative;
`

const SkipLink = styled.a`
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: 0 !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    white-space: nowrap !important;
    padding: 10px 25px;
    background: ${theme.primary};
    font-weight: 700;
    display: block;
    text-decoration: none;
    z-index: 99999;
    color: ${theme.black};
    
    .inner {
        max-width:  ${theme.l};
        margin: 0 auto;
    }
    .button_like {
        background: ${theme.white};
        padding: 10px 15px;
        display: inline-block;
        border: 3px solid ${theme.focus};
    }

    &:focus {
        position: static !important;
        width: 100% !important;
        height: auto !important;
        margin: inherit !important;
        overflow: visible !important;
        clip: auto !important;
        -webkit-clip-path: none !important;
        clip-path: none !important;
        white-space: inherit !important;
        outline: none;
    }
`

export const Header = ({
    navItems,
    quickLinks,
    overlay
}) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)
    const [isSticky, setSticky] = useState(false)
    const ref = useRef(null)

    const handleScroll = () => {
        setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    return(
        <>
            <SkipLink href="#content-start"><div className="inner"><div className="button_like">Skip to content</div></div></SkipLink>
            <TopSection 
                isTransparent={overlay}
                isSticky={isSticky}
            >
                <Inner>
                    <LogoLink to="/">
                        <Logo src={overlay ? logoWhite : logo} alt="British Film Institute"/>
                    </LogoLink>
                </Inner>
            </TopSection>
            <Outer 
                ref={ref}
                onMouseLeave={() => {
                    setSelected(false)
                }}
                isTransparent={overlay}
                isSticky={isSticky}
            >
                <Inner>
                    <MenuButton 
                        handleClick={() => setOpen(!open)}
                        open={open}
                        isWhite={overlay}
                    />
                    <MobileLogoLink to="/">
                        <Logo src={logo} alt="British Film Institute"/>
                    </MobileLogoLink>
                    <MobileMenuBuffer />
                    <Nav
                        navItems={navItems}
                        selected={selected}
                        setSelected={setSelected}
                        isOverlaid={overlay}
                        isSticky={isSticky}
                    />
                    <QuickLinks 
                        links={quickLinks}
                        Inner={QuickLinksInner} 
                        isOverlaid={overlay} 
                        isSticky={isSticky}
                    />
                </Inner>
            </Outer>
            {open && <MobilePanel navItems={navItems} quickLinks={quickLinks} />}
            <div id="content-start"></div>
        </>
    )
}

Header.propTypes = {
    /** 
	 * An array of all the navigation items on the BFI website. Each element of the array contains a top level pillar with a `title` and a `url` field and a `children` array, containing all the sub pages of this pillar which also have a `title` and `url field. 
	 **/
    navItems: PropTypes.array,
    /** 
	 * A boolean to determine if the header is set to opaque or transparent - defaulting to false, it should only be set to true if the page/post contains a hero element.
	 **/
    overlay: PropTypes.bool
}

Header.defaultProps = {
    overlay: false
}