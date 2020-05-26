import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import LotteryLogo from "./lottery-logo.svg"
import DCMSLogo from "./dcms.svg"
import { LinkSwitch as Link } from "../LinkSwitch"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import { FeedbackForm } from "../FeedbackForm"
import { ImageSponsorLinks } from "../ImageSponsorLinks"

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
    @media screen and (min-width: ${theme.xl + 200}) {
        max-width: ${theme.xl}
    }
`

const TopRow = styled.section`
    margin-bottom: 30px;
    @media screen and (min-width: ${theme.m}) {
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

const MiddleRow = styled.section`
    margin-bottom: 30px;
    border-top: 1px solid ${theme.dark};
    border-bottom: 1px solid ${theme.dark};
    padding-top: 35px;
    padding-bottom: 35px;

    @media screen and (min-width: ${theme.m}) {
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`
const SupportLogos = styled.div`
    width: 75%;
    margin-bottom: 25px;

    img {
        height: 60px;
    }
    @media screen and (min-width: ${theme.m}) {
        margin-right: 60px;
        margin-bottom: 0;
    }
`
const FollowMenu = styled.div`
    width: 25%;
`


const BottomRow = styled.section`
    font-size: 0.8rem;
    text-align: center;

    @media screen and (min-width: ${theme.m}) {
        text-align: left;
        font-size: 0.85rem;
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`

const BottomLinks = styled.div`
    margin-bottom: 20px;
    
    a {
        margin-right: 15px;
        font-weight: 600;
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
    }
`


const Menu = styled.nav`
    margin-top: 30px;
    width: 100%;
    @media screen and (min-width: ${theme.m}) {
        margin-top: 0px;
        margin-left: 30px;
        width: 25%;

        &:first-of-type {
            margin-left: 0;
        }
    }
`

const Heading = styled.h2`
    margin-top: 0px;
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 15px;
    border-top: 3px solid ${theme.black};
    margin-bottom: 25px;
`

const SubHeading = styled.h2`
    margin-top: 0px;
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 15px;
`

const Copyright = styled.p`
    @media screen and (min-width: ${theme.m}) {
        text-align: right;
        padding-left: 25px;
    }
`

const LinkContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`
const IconLinkContainer = styled(LinkContainer)`
    display: flex;
    justify-content: space-between;
`

const linkStyles = `
    color: black;
    text-decoration: underline;

    &:hover{
        text-decoration: none;
        div.logo {
            background: rgba(0,0,0,0.6);
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
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
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
    -webkit-mask: url(${props => props.url}) no-repeat center;
    mask: url(${props => props.url}) no-repeat center;
`

export const Footer = ({
    menus,
    copyrightText,
    copyrightLinks
}) => 
    <>  
        <Inner>
            <FeedbackForm />
        </Inner>
        <Outer>
            <TopRow>
                <Inner className="container">
                    {menus.map(menu =>
                        <Menu key={menu.id}>
                            {menu.titleLink ?
                                <MenuItem className="title_link" to={menu.titleLink}><Heading>{menu.title}</Heading></MenuItem>
                                :
                                <Heading>{menu.title}</Heading>
                            }
                            {menu.children.map(menuItem =>
                                <LinkContainer key={menuItem.id}>
                                    <MenuItem to={menuItem.url}>{menuItem.title}</MenuItem>    
                                </LinkContainer>
                            )}
                        </Menu>
                    )}
                </Inner>
            </TopRow>
            <MiddleRow>
                <Inner className="container">  
                    <SupportLogos>
                        <SubHeading>Supported by</SubHeading>
                        <ImageSponsorLinks images={[
                            {
                                url: LotteryLogo,
                                alt: "The BFI recieves National Lottery funding"
                            },
                            {
                                url: DCMSLogo,
                                alt: "Department for Digital Culture Media & Sport"
                            }
                        ]} />
                    </SupportLogos>
                    <FollowMenu>
                        <SubHeading>Follow us</SubHeading>
                        <IconLinkContainer>
                            <ExternalMenuItem href="https://twitter.com/BFI">
                                <Icon className="logo" url={twitter} alt="Twitter"/>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.facebook.com/BritishFilmInstitute/">
                                <Icon className="logo" url={facebook} alt="Facebook"/>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.instagram.com/britishfilminstitute/">
                                <Icon className="logo" url={instagram} alt="Instagram"/>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.linkedin.com/company/british-film-institute">
                                <Icon className="logo" url={linkedin} alt="LinkedIn"/>
                            </ExternalMenuItem>
                            <ExternalMenuItem href="https://www.youtube.com/user/BFIfilms">
                                <Icon className="logo" url={youtube} alt="YouTube"/>
                            </ExternalMenuItem>
                        </IconLinkContainer>
                        
                    </FollowMenu>
                </Inner>
            </MiddleRow>
            <BottomRow>
                <Inner className="container">
                    <BottomLinks>
                        {copyrightLinks && copyrightLinks.map(copyrightLink =>
                            <MenuItem to={copyrightLink.url}>{copyrightLink.title}</MenuItem>    

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