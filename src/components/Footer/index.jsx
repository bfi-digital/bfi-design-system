import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import logo from "./logo.svg"
import LotteryLogo from "./lottery-logo.jsx"
import { LinkSwitch as Link } from "../LinkSwitch"
import PropTypes from "prop-types"
import parse from "html-react-parser"

import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import youtube from "./youtube.svg"
import instagram from "./instagram.svg"

const Outer = styled.footer`
    padding: 40px 0px 20px 0px;
    background: ${theme.black};
    color: ${theme.white};
`

const Inner = styled.div`
    max-width: ${theme.l};
    padding: 0px ${theme.horizontalPadding};
    margin: 0 auto;
    @media screen and (min-width: ${theme.xl + 200}) {
        max-width: ${theme.xl}
    }
`

const LogoImage = styled.img`
    height: 80px;
    @media screen and (min-width: ${theme.m}) {
        margin-right: auto;
    }
`

const TopRow = styled.section`
    margin-bottom: 50px;
    @media screen and (min-width: ${theme.m}) {
        display: flex;
        flex-direction: row;
    }
`

const BottomRow = styled.section`
    @media screen and (min-width: ${theme.m}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

const Menu = styled.nav`
    margin-top: 30px;
    /* width: 100%; */
    max-width: 160px;
    @media screen and (min-width: ${theme.m}) {
        margin-top: 0px;
        margin-left: 30px;
    }
    @media screen and (min-width: ${theme.l}) {
        margin-left: 50px;
    }
`

const Heading = styled.h4`
    margin-top: 0px;
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    margin-bottom: 10px;
`

const Copyright = styled.p``

const linkStyles = `
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    text-decoration: none;
    margin-bottom: 7px;
    &:hover{
        text-decoration: underline;
    }
    &:focus{
        outline: 2px solid ${theme.dark};
        background: ${theme.dark};
    }
    &::-moz-focus-inner {
        border: 0;
    }
`

const MenuItem = styled(Link)`${linkStyles}`

const ExternalMenuItem = styled.a`${linkStyles}`

const Icon = styled.img`
    margin-right: 7px;
`

export const Footer = ({
    menus,
    copyrightText
}) => 
    <Outer>
        <Inner>
            <TopRow>
                <LogoImage src={logo} alt="British Film Institute. Film Forever."/>
                {menus.map(menu =>
                    <Menu key={menu.id}>
                        <Heading>{menu.title}</Heading>
                        {menu.children.map(menuItem =>
                            <MenuItem key={menuItem.id} to={menuItem.url}>{menuItem.title}</MenuItem>    
                        )}
                    </Menu>
                )}
                <Menu>
                    <Heading>Keep in touch</Heading>
                    <MenuItem to="/">Contact us</MenuItem> 
                    <ExternalMenuItem href="#">
                        <Icon src={facebook} alt=""/>
                        Facebook
                    </ExternalMenuItem>
                    <ExternalMenuItem href="#">
                        <Icon src={twitter} alt=""/>
                        Twitter
                    </ExternalMenuItem>
                    <ExternalMenuItem href="#">
                        <Icon src={youtube} alt=""/>
                        YouTube
                    </ExternalMenuItem>
                    <ExternalMenuItem href="#">
                        <Icon src={instagram} alt=""/>
                        Instagram
                    </ExternalMenuItem>
                </Menu>
            </TopRow>
            <BottomRow>
                <LotteryLogo colourFill={theme.white} alt="The BFI recieves National Lottery funding" />

                <Copyright>{parse(copyrightText)}</Copyright>
            </BottomRow>
        </Inner>
    </Outer>

Footer.propTypes = {
    // An array of the menus the footer should display. Each menu has a title, id and an array of child menu items
    breadcrumbs: PropTypes.array,
    // A HTML string for the copyright notice
    copyrightText: PropTypes.string
}