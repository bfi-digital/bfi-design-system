import * as React from "react"
import theme from "../../_theme"
import styled from "styled-components"
import { LinkSwitch as Link } from "../../LinkSwitch"

const Wrapper = styled.div`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
    }
`
const QuickLink = styled(Link)`
    color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.primary) : theme.primary};
    font-weight: ${props => props.isTransparent ? (!props.isSticky ? theme.fontWeight_semiBold : theme.fontWeight_bold) : theme.fontWeight_bold};
    text-decoration: none;
    padding: 21px 15px;
    text-shadow: ${props => props.isTransparent ?(!props.isSticky ? "0px 0px 10px rgba(0,0,0,0.3)" : "none") : "none"};

    -webkit-transition: background ease 0.3s;
    -moz-transition: background ease 0.3s;
    -o-transition: background ease 0.3s;
    transition: background ease 0.3s;

    &:hover {
        color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.dark) : theme.dark};
        background: ${props => props.isTransparent ? (!props.isSticky ? (theme.lightGrey + "45") : theme.lightGrey) : theme.lightGrey};
    }
`

const QuickLinks = ({links, isOverlaid, isSticky}) => {
    return(
        links ?
            <Wrapper>
                {links[0] &&
                    <QuickLink to={links[0].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[0].title}</QuickLink>
                }
                {links[1] &&
                    <QuickLink to={links[1].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[1].title}</QuickLink>
                }
                {links[2] &&
                    <QuickLink to={links[2].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[2].title}</QuickLink>
                }
            </Wrapper>
            :
            null
    )
}

export default QuickLinks