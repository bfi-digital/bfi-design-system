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
    background: ${props => props.isTransparent ? (props.isSticky ? theme.white : "transparent") : theme.white};
    color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.primary) : theme.primary};
    font-weight: 700;
    text-decoration: none;
    padding: 21px 15px;

    -webkit-transition: background ease 0.3s;
    -moz-transition: background ease 0.3s;
    -o-transition: background ease 0.3s;
    transition: background ease 0.3s;

    &:hover {
        color: ${props => props.isTransparent ? (!props.isSticky ? theme.grey : theme.dark) : theme.dark};
        background: ${theme.grey};
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