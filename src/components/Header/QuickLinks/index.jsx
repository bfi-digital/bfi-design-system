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
    color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.black) : theme.black};
    font-weight: 600;
    text-decoration: none;
    padding: 21px 15px;
    font-size: ${theme.fontSize_s};

    -webkit-transition: background ease 0.3s;
    -moz-transition: background ease 0.3s;
    -o-transition: background ease 0.3s;
    transition: background ease 0.3s;

    &:hover {
        color: ${props => props.isTransparent ? (!props.isSticky ? theme.grey : theme.black) : theme.black};
        background: ${props => props.isTransparent ? (!props.isSticky ? "transparent" : theme.lightGrey) : theme.lightGrey};
    }

    @media screen and (min-width: ${theme.m}){
        padding: 18px 11px;
    }
    @media screen and (min-width: ${theme.l}){
        padding: 21px 15px;
    }
`

const QuickLinks = ({links, Inner, isOverlaid, isSticky}) => {
    return(
        links ?
            <Wrapper>
                <Inner>
                    {links[0] &&
                        <QuickLink to={links[0].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[0].title}</QuickLink>
                    }
                    {links[1] &&
                        <QuickLink to={links[1].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[1].title}</QuickLink>
                    }
                    {links[2] &&
                        <QuickLink to={links[2].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[2].title}</QuickLink>
                    }
                </Inner>
            </Wrapper>
            :
            null
    )
}

export default QuickLinks