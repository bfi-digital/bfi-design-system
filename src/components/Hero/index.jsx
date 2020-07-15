import React from "react"
import { Headline } from "../Headline"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import LazyImage from "react-lazy-progressive-image"
import { LeadParagraph } from "../LeadParagraph"
import { Wrapper } from "../PageContainer"

const Outer = styled.section`
    margin: 0 auto;
    background: ${theme.black};
    width: 100%;
    max-width: calc(${theme.xl} + 125px);
    position: relative;
    height: auto;
    min-height: 40vh;
    padding-top: ${props => props.withHeader ? "64px" : "75px"};
    padding-bottom: 25px;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: top center;
    display: flex;
    align-items: flex-end;
    margin-top: ${props => props.withHeader ? "175px" : "0px"};
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9999px;
        right: 0;
        box-shadow: 9999px 0 0 ${theme.lightGrey};
        border-left: 9999px solid ${theme.lightGrey};
        z-index: -1;
    }

    a {
        color: ${theme.black} !important;
        svg {
            fill: ${theme.black} !important;
        }
        &:hover, &:focus {
            color: ${theme.white} !important;
            svg {
                fill: ${theme.white} !important;
            }
        }
    }

    &.with_image {
        h1 {
            color: ${theme.white};
            text-shadow: 0px 0px 30px ${theme.black}50;
            margin-bottom: 0px;
            font-size: 2.4rem;
            font-size: ${props => props.titleLength > 65 ? "2rem" : (props.titleLength > 45 ? "2.4rem" : "2.6rem")};
            @media screen and (min-width: ${theme.m}){
                margin-bottom: ${theme.standardSpace}px;
                font-size: ${props => props.titleLength > 65 ? "2.4rem" : (props.titleLength > 45 ? "2.6rem" : "2.9rem")};
            }
            @media screen and (min-width: ${theme.l}){
                font-size: ${props => props.titleLength > 65 ? "2.6rem" : (props.titleLength > 45 ? "2.8rem" : "3.2rem")};
            }
            @media screen and (min-width: ${theme.xl}){
                font-size: ${props => props.titleLength > 65 ? "2.8rem" : (props.titleLength > 45 ? "3rem" : "3.6rem")};
            }
        }
        p {
            color: ${theme.white};
            margin-top: -15px;
            text-shadow: 0px 0px 30px ${theme.black}50;
        }
    }


    &.hero_without_image {
        background: ${theme.primary};
        padding-bottom: ${theme.standardSpace}px;
        margin-bottom: ${theme.standardSpace}px;
        position: relative; 
        padding-top: ${theme.standardSpace}px;

        @media screen and (min-width: ${theme.m}){
            padding-top: 175px;
            padding-bottom: ${theme.standardSpace*1.5}px; 
        }
        @media screen and (min-width: ${theme.l}){
            padding-top: 200px;
            padding-bottom: ${theme.standardSpace*2}px;        
            margin-bottom: ${theme.standardSpace*1.5}px;
        }
        &:before {
            box-shadow: 9999px 0 0 ${theme.primary};
            border-left: 9999px solid ${theme.primary};
        }
        h1, p, ul, li, a {
            color: ${theme.white};
        }

        a {
            &:after {
                background: ${theme.darkPink};
            }
            &:hover, &:focus {
                color: ${theme.black} !important;
                svg {
                    fill: ${theme.black} !important;
                }
            }
        }
    }


    @media screen and (min-width: ${theme.m}){
        margin-top: 0px;
        min-height: 390px;
        align-items: flex-end;
        max-height: 80vh;

        padding-top: ${props => props.withHeader ? "275px" : "211px"};

        h1 {
            max-width: calc( 0.8 * ${theme.m});
        }
        p {
            max-width: 80%;
        }
    }
    @media screen and (min-width: ${theme.l}){
        padding-top: ${props => props.withHeader ? "325px" : "261px"};
    }
    @media screen and (min-width: ${theme.xl}){
        min-height: 500px;
        padding-bottom: 40px;
        padding-top: ${props => props.withHeader ? "375px" : "311px"};

        h1{
            max-width: calc( 0.5 * ${theme.xl});
        }
    }
`
const InnerGradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: ${props => props.withHeader ? "-moz-linear-gradient(top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 1%, rgba(255,255,255,0) 50%, rgba(0,0,0,65) 100%)" : "-moz-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%)"};
    background: ${props => props.withHeader ? "-webkit-linear-gradient(top, rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 1%,rgba(255,255,255,0) 50%,rgba(0,0,0,65) 100%)" : "-webkit-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%)"};
    background: ${props => props.withHeader ? "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 1%,rgba(255,255,255,0) 50%,rgba(0,0,0,65) 100%)" : "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%)"};
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#99000000', endColorstr='#000000',GradientType=0 );
`
const Container = styled.div`
    max-width: ${theme.l};
    width: 100%;
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    z-index: 1;
    position: relative;

    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }

    ol + h1 {
        margin-top: 20px;
    }
    li, a {
        color: ${theme.white};
        text-shadow: 0px 0px 30px ${theme.black}50;
        &:focus{
            background: ${theme.dark};
        }
    }
`

const Copyright = styled.p`
    color: ${theme.white};
    text-shadow: 0px 0px 30px ${theme.black}50;
    font-size: ${theme.small_fontSize_m};
    position: absolute;
    bottom: 5px;
    display: none;

    @media screen and (min-width: ${theme.m}){
        right: ${theme.horizontalPadding};
        bottom: 5px;
    }

`

const ChildContainerDesktop = styled.div`
    &.child_with_image {
        display: none;
    }
    &.child_without_image {
        display: block;
    }
    @media screen and (min-width: ${theme.m}){
        &.child_with_image {
            display: block;
        }
    }
`
const ChildContainerMobile = styled.div`
    display: block;
    a {
        color: ${theme.white};
        background: ${theme.black};
    }
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`

export const Hero = ({
    image1920x1080,
    image192x108,
    headline,
    standfirst,
    withHeader,
    copyright,
    children
}) =>
    <LazyImage
        src={image1920x1080}
        placeholder={image192x108 ? image192x108 : image1920x1080}
        visibilitySensorProps={{
            partialVisibility: true
        }}
    >
        {src => 
            <>
                <Outer 
                    image={src} 
                    withHeader={withHeader}
                    className={image1920x1080 ? "with_image" : "hero_without_image"}
                    titleLength={headline.length}
                >
                    {image1920x1080 && <InnerGradient withHeader={withHeader} /> }
                    <Container>
                        {headline && <Headline level={0} text={headline}/>}
                        <ChildContainerDesktop className={image1920x1080 ? "child_with_image" : "child_without_image"}>
                            {standfirst && <LeadParagraph text={standfirst}/>}
                            {children}
                        </ChildContainerDesktop>
                        {copyright && <Copyright>{copyright}</Copyright>}
                    </Container>
                </Outer>
                {image1920x1080 && (children || standfirst) && 
                    <ChildContainerMobile>
                        <Wrapper>
                            {standfirst && <LeadParagraph text={standfirst}/>}
                            {children}
                        </Wrapper>
                    </ChildContainerMobile>
                }
            </>
        }
    </LazyImage>


Hero.propTypes = {
    /** 
    * Urls to the image for the hero. 
    **/
    image1920x1080: PropTypes.string,
    /** 
    * The text for the title which will be used as the H1 for this page/post. Optional. You might choose not to give this and pass children in instead
    **/
    headline: PropTypes.string,
    /** 
    * A boolean to tell the hero whether it has a header over the top of it, so that content in the hero never overlaps the header. Defaults to false.
    **/
    withHeader: PropTypes.bool,
    /** 
    * A string giving the copyright attribution of the background image
    **/
    copyright: PropTypes.string
    
}
