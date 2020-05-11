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
    background: ${theme.light};
    color: ${theme.black};
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
    border-bottom: 1px solid rgba(0,0,0,0.5);
    margin-bottom: 10px;
`

const Copyright = styled.p``

const LinkContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 7px;
`

const linkStyles = `
    color: black;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
    &:focus{
        outline: 2px solid ${theme.focus};
        background: ${theme.dark};
        color: ${theme.white};

        div {
            background: ${theme.white};
        }
    }
    &:active {
        text-decoration: underline;
    }
    &::-moz-focus-inner {
        border: 0;
    }
`

const MenuItem = styled(Link)`${linkStyles}`

const ExternalMenuItem = styled.a`${linkStyles}`

const Icon = styled.div`
    margin-right: 7px;
    vertical-align: bottom;
    width: 25px;
    height: 25px;
    display: inline-block;

    background-color: ${theme.black};
    -webkit-mask: url(${props => props.url}) no-repeat center;
    mask: url(${props => props.url}) no-repeat center;
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
                            <LinkContainer key={menuItem.id}>
                                <MenuItem to={menuItem.url}>{menuItem.title}</MenuItem>    
                            </LinkContainer>
                        )}
                    </Menu>
                )}
                <Menu>
                    <Heading>Keep in touch</Heading>
                    <LinkContainer>
                        <MenuItem className="with_break" to="/">Contact us</MenuItem> 
                    </LinkContainer>
                    <LinkContainer>
                        <ExternalMenuItem href="https://www.facebook.com/BritishFilmInstitute/">
                            <Icon url={facebook} alt=""/>
                            Facebook
                        </ExternalMenuItem>
                    </LinkContainer>
                    <LinkContainer>
                        <ExternalMenuItem href="https://twitter.com/BFI">
                            <Icon url={twitter} alt=""/>
                            Twitter
                        </ExternalMenuItem>
                    </LinkContainer>
                    <LinkContainer>
                        <ExternalMenuItem href="https://www.youtube.com/user/BFIfilms">
                            <Icon url={youtube} alt=""/>
                            YouTube
                        </ExternalMenuItem>
                    </LinkContainer>
                    <LinkContainer>
                        <ExternalMenuItem href="https://www.instagram.com/britishfilminstitute/">
                            <Icon url={instagram} alt=""/>
                            Instagram
                        </ExternalMenuItem>
                    </LinkContainer>
                </Menu>
            </TopRow>
            <BottomRow>
                <LotteryLogo colourFill={theme.black} alt="The BFI recieves National Lottery funding" />

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