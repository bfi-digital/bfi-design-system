import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { LinkSwitch as Link } from "../LinkSwitch"

const Outer = styled.div`
    width: 100%;
    background: ${theme.black};
    z-index: 99;
    height: 40px;
    @media screen and (min-width: ${theme.s}){
        height: 46px;
    }
    @media screen and (min-width: ${theme.m}){
        height: 56px;
    }
    @media screen and (min-width: ${theme.l}){
        height: 66px;
    }
`
const OuterLink = styled(Link)`
    width: 100%;
    background: ${theme.black};
    display: block;
    z-index: 99;
    height: 40px;
    
    @media screen and (min-width: ${theme.s}){
        height: 46px;
    }
    @media screen and (min-width: ${theme.m}){
        height: 56px;
    }
    @media screen and (min-width: ${theme.l}){
        height: 66px;
    }

    &:focus {
        outline: none;
        div {
            -webkit-box-shadow: inset 0px 0px 0px 4px ${theme.focus};
            -moz-box-shadow: inset 0px 0px 0px 4px ${theme.focus};
            box-shadow: inset 0px 0px 0px 4px ${theme.focus};
        }
    }
`

const Banner = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 0px ${theme.horizontalPadding};
    background: url(${props => props.image}) no-repeat;
    max-width: ${theme.l};
    background-size: auto 100%;

    @media screen and (min-width: ${theme.l}){
        background-size: 125% 100%;
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
        background-size: auto 100%;
    }
`
const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)

export const ProgrammeBannerTop = ({
    image,
    link,
    title
}) =>
    image && 
        <ConditionalWrapper
            condition={link}
            wrapper={children => <OuterLink to={link} aria-label={title} title={`View ${title}`}>{children}</OuterLink>}
            wrapper2={children => <Outer>{children}</Outer>}
        >
        
            <Banner image={image} />
        </ConditionalWrapper>

ProgrammeBannerTop.propTypes = {
    /** 
	 * A url for the image that will be used in the programme banner
	 **/
    image: PropTypes.string,
    /** 
	 * A url for the homepage of the programme
	 **/
    link: PropTypes.string,
    /** 
	 * A title for the programme used for sreen readers
	 **/
    title: PropTypes.string
}

ProgrammeBannerTop.defaultProps = {
    image: "",
    link: "",
    title: ""
}