import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import { ImageSponsorLinks } from "../ImageSponsorLinks"

import lotteryLocal from "./lottery-logo.svg"
import dcmsLocal from "./dcms.svg"

import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import youtube from "./youtube.svg"
import instagram from "./instagram.svg"
import linkedin from "./linkedin.svg"

const Outer = styled.footer`
    padding: 40px 0px 20px 0px;
    background: ${theme.lightFocus};
    color: ${theme.black};
    // border-top: 4px solid ${theme.dark};
`

const Inner = styled.div`
    max-width: ${theme.l};
    padding: 0px ${theme.horizontalPadding};
    margin: 0 auto;

    ul {
        padding: 0;
    }

    &.dont_restrict {
        padding: 0px;
        @media screen and (min-width: ${theme.m}) {
            padding: 0px ${theme.horizontalPadding};
        }
    }

    @media screen and (min-width: ${theme.xl}) {
        max-width: calc(${theme.xl} - 100px);
    }
`

const TopRow = styled.section`
    margin-bottom: 30px;
    @media screen and (min-width: ${theme.m}) {
        .container {
            display: flex;
            -webkit-flex-direction: row;
            -moz-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

const MiddleRow = styled.section`
    margin-bottom: 30px;
    border-top: 1px solid ${theme.black};
    border-bottom: 1px solid ${theme.black};
    padding-top: 35px;
    padding-bottom: 35px;

    @media screen and (min-width: ${theme.m}) {
        .container {
            display: flex;
            -webkit-flex-direction: row;
            -moz-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`
const SupportLogos = styled.div`
    width: 100%;
    margin-bottom: ${theme.standardSpace}px;

    img {
        height: 60px;
    }
    @media screen and (min-width: ${theme.m}) {
        margin-right: 70px;
        margin-bottom: 0;
        width: 75%;
    }
    @media screen and (min-width: ${theme.l}) {
        margin-right: 170px;
    }
    @media screen and (min-width: ${theme.xl}) {
        margin-right: 280px;
    }
`
const FollowMenu = styled.div`
    width: 70%;
    @media screen and (min-width: ${theme.m}) {
        width: 25%;
    }
`


const BottomRow = styled.section`
    font-size: ${theme.small_fontSize_m};
    text-align: center;

    @media screen and (min-width: ${theme.m}) {
        text-align: left;
        .container {
            display: flex;
            -webkit-flex-direction: row;
            -moz-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`

const BottomLinks = styled.ul`
    margin-bottom: 20px;
    
    a {
        margin-right: 15px;
        font-weight: ${theme.fontWeight_semiBold};
        text-decoration: underline;
    }
    @media screen and (min-width: ${theme.m}) {
        margin-bottom: 0;
        a {
            text-decoration: none;
    
            &:hover {
                text-decoration: underline;
            }
        }
        li {
            display: inline-block;
        }
    }
`


const Menu = styled.nav`
    margin-top: 30px;
    width: 100%;
    @media screen and (min-width: ${theme.m}) {
        margin-top: 0px;
        margin-left: 40px;
        width: 25%;

        &:first-of-type {
            margin-left: 0;
        }
    }
    @media screen and (min-width: ${theme.l}) {
        margin-left: 60px;
    }
    @media screen and (min-width: ${theme.xl}) {
        margin-left: 100px;
    }
`

const Heading = styled.h2`
    margin-top: 0px;
    display: block;
    font-size: 1.3rem;
    font-weight: ${theme.fontWeight_bold};
    margin-bottom: ${theme.standardSpace}px;
`

const SubHeading = styled.h2`
    margin-top: 0px;
    display: block;
    font-size: 1.3rem;
    font-weight: ${theme.fontWeight_bold};
    margin-bottom: 15px;
`

const Copyright = styled.p`
    @media screen and (min-width: ${theme.m}) {
        text-align: right;
        padding-left: ${theme.standardSpace}px;
    }
`

const LinkContainer = styled.li`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`
const IconLinkContainer = styled.div`
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`

const linkStyles = `
    color: black;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        div.logo {
            opacity: 0.6;
        }
    }
    &:focus{
        outline: 2px solid ${theme.focus};
        background: ${theme.dark};
        color: ${theme.white};

        div.logo {
            background: ${theme.white};
        }
    }
    &:active {
        text-decoration: underline;
    }
    &::-moz-focus-inner {
        border: 0;
    }

    &.title_link {
        display: block;
        padding-top: 15px;
        border-top: 3px solid ${theme.black};
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
        &:focus{
            background: none;
            outline: none;
            h2 {
                outline: 2px solid ${theme.focus};
                background: ${theme.dark};
                color: ${theme.white};
            }
        }
    }
    span.hidden_title {
        display: none;
    }

    h2 {
        margin-bottom: ${theme.standardSpace*0.5}px;
    }
`

const MenuItem = styled(Link)`${linkStyles}`

const ExternalMenuItem = styled.a`${linkStyles}
    // margin-right: 10px;
`

const Icon = styled.div`
    vertical-align: bottom;
    width: 35px;
    height: 35px;
    display: inline-block;

    background-color: ${theme.black};
    background: url(${props => props.url}) no-repeat center;
`

export const Footer = ({
    menus,
    copyrightText,
    copyrightLinks,
    sponsorImages
}) =>
    <>
        <Outer>
            <TopRow>
                <Inner className="container">
                    {menus.map((menu, index) =>
                        <Menu key={menu.id} role="navigation" aria-label={"Footer-"+index}>
                            <ul>
                                {menu.titleLink ?
                                    <LinkContainer key={index}>
                                        <MenuItem className="title_link" to={menu.titleLink} data-tracking="footer-navigation">
                                            <Heading>{menu.title}</Heading>
                                        </MenuItem>
                                    </LinkContainer>
                                    :
                                    <Heading>{menu.title}</Heading>
                                }
                                {menu.children.map(menuItem =>
                                    <LinkContainer key={menuItem.id}>
                                        <MenuItem to={menuItem.url} data-tracking="footer-navigation">{menuItem.title}</MenuItem>
                                    </LinkContainer>
                                )}
                            </ul>
                        </Menu>
                    )}
                </Inner>
            </TopRow>
            <MiddleRow>
                <Inner className="container">
                    <SupportLogos>
                        <SubHeading>Supported by</SubHeading>
                        <ImageSponsorLinks images={sponsorImages ? sponsorImages : [
                            {
                                url: lotteryLocal,
                                alt: "BFI receives National Lottery funding"
                            },
                            {
                                url: dcmsLocal,
                                alt: "Department for Digital Culture Media & Sport"
                            }
                        ]} />
                    </SupportLogos>
                    <FollowMenu>
                        <SubHeading>Follow us</SubHeading>
                        <IconLinkContainer>
                            <ExternalMenuItem href="https://twitter.com/BFI" data-tracking="footer-navigation" title="View our Twitter">
                                <Icon className="logo" url={twitter} title="Twitter"/>
                                <span className="hidden_title">Twitter</span>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.facebook.com/BritishFilmInstitute/" data-tracking="footer-navigation" title="View our Facebook">
                                <Icon className="logo" url={facebook} title="Facebook"/>
                                <span className="hidden_title">Facebook</span>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.instagram.com/britishfilminstitute/" data-tracking="footer-navigation" title="View our Instagram">
                                <Icon className="logo" url={instagram} title="Instagram"/>
                                <span className="hidden_title">Instagram</span>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.linkedin.com/company/british-film-institute" data-tracking="footer-navigation" title="View our LinkedIn">
                                <Icon className="logo" url={linkedin} title="LinkedIn"/>
                                <span className="hidden_title">LinkedIn</span>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.youtube.com/user/BFIfilms" data-tracking="footer-navigation" title="View our YouTube">
                                <Icon className="logo" url={youtube} title="YouTube"/>
                                <span className="hidden_title">YouTube</span>
                            </ExternalMenuItem>
                        </IconLinkContainer>
                    </FollowMenu>
                </Inner>
            </MiddleRow>
            <BottomRow>
                <Inner className="container">
                    <BottomLinks>
                        {copyrightLinks && copyrightLinks.map((copyrightLink) =>
                            <LinkContainer key={copyrightLink.title}>
                                <MenuItem to={copyrightLink.url} key={copyrightLink.url} data-tracking="footer-navigation">{copyrightLink.title}</MenuItem>
                            </LinkContainer>
                        )}
                    </BottomLinks>
                    <Copyright>{parse(copyrightText)}</Copyright>
                </Inner>
            </BottomRow>
        </Outer>
    </>

Footer.propTypes = {
    /**
    * An array of the menus the footer should display. Each menu has a title which is a 2nd level link and a list of 3rd level links underneath it.
    **/
    menus: PropTypes.array,
    /**
    * A HTML string for the copyright notice
    **/
    copyrightText: PropTypes.string,
    /**
    * An array of the links for the bottom menu links next to the copyright text
    **/
    copyrightLinks: PropTypes.array,
}
