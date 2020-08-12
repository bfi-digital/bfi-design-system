import React from "react"
import styled from "styled-components"
import Moment from "react-moment"
import theme from "../_theme"
import PropTypes from "prop-types"
import LazyImage from "react-lazy-progressive-image"
import { Headline } from "../Headline"
import { LeadParagraph } from "../LeadParagraph"
import { Wrapper } from "../PageContainer"
import AnchorLink from "react-anchor-link-smooth-scroll"

const StyledWrapper = styled(Wrapper)`
    max-width: calc(${theme.xl} + 125px) !important;
    padding: 0 !important;
`

const Outer = styled.div`
    margin: 0 auto;
    text-align: left;
    width: 100%;
    flex: 0 0 100%;
    margin-bottom: 15px;

    h1 {
        margin-left: 0;
        margin-block-start: 0.25em;
        margin-block-end: 0.25em;
    }

    p {
        max-width: 775px;
        margin-bottom: ${theme.standardSpace}px;
    }
    ol {
        max-width: 775px;
        margin-bottom: ${theme.standardSpace*1.5}px;
        margin-top: ${theme.standardSpace*0.75}px;
    }

    &.with_image {
        @media screen and (min-width: ${theme.m}){
            display: flex;
            margin-bottom: ${theme.standardSpace*1.5}px;
            background: ${theme.black};
            position: relative;
            &:before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: -9999px;
                right: 0;
                border-left: 9999px solid ${theme.black};
                box-shadow: 9999px 0 0 ${theme.black};
                z-index: -1;
            }

            .page_meta {
                height: 100%;
                padding: ${theme.standardSpace*0.75}px ${(theme.standardSpace*0.75)*2}px;

                p {
                    font-size: 1rem;
                }
                ol {
                    max-width: 80%;
                }
            }
        }
        @media screen and (min-width: ${theme.l}){
            .page_meta {
                padding: ${theme.standardSpace}px ${theme.standardSpace*2}px;

                p {
                    font-size: 1.4rem;
                }
            }
        }
        @media screen and (min-width: ${theme.xl}){
            background: ${theme.black};
            .page_meta {
                p {
                    font-size: 1.6rem;
                }
            }
        }
    }
    
    @media screen and (min-width: ${theme.m}){
        p, ol {
            max-width: 1000px;
        }
    }

`
const Meta = styled.div`
    background: ${theme.black};
    color: ${theme.white};
    padding: ${theme.standardSpace}px;
    display: flex;
    flex-direction: column;
    
    @media screen and (min-width: ${theme.m}){
        flex: 0 0 50%;
    }
    @media screen and (min-width: ${theme.xl}){
        flex: 0 0 35%;
    }
    
    h1, p {
        color: ${theme.white};
    }
    p {
        margin-bottom: ${theme.standardSpace}px;
    }
    h1 {
        @media screen and (max-width: ${theme.m}){
            font-size: ${props => props.titleLength > 35 ? "1.5rem" : (props.titleLength > 25 ? "1.8rem" : "2rem")};
            max-width: 90%;
            margin-block-end: 0.5em;
        }

        @media screen and (min-width: ${theme.m}){
            font-size: ${props => props.titleLength > 35 ? "2rem" : (props.titleLength > 25 ? "2.3rem" : "2.5rem")};
        }  
        @media screen and (min-width: ${theme.l}){
            font-size: ${props => props.titleLength > 35 ? "2.2rem" : (props.titleLength > 25 ? "2.5rem" : "2.7rem")};
        }       
        @media screen and (min-width: ${theme.xl}){
            font-size: ${props => props.titleLength > 35 ? "2.3rem" : (props.titleLength > 25 ? "2.6rem" : "3rem")};
        }
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;

    img {
        margin-bottom: -5px;
    }
    
    @media screen and (max-width: ${theme.m}){
        background: ${theme.black};
        position: relative;
    }

    @media screen and (min-width: ${theme.m}){
        order: -1;
        height: fit-content;
        align-self: center;
    }
    @media screen and (min-width: ${theme.l}){

    }
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    @media screen and (min-width: ${theme.m}){
        flex: 0 0 50%;
    }
    @media screen and (min-width: ${theme.xl}){
        flex: 0 0 65%;
    }
`
const ButtonContainer = styled.div`
    margin-top: auto;

    a {
        width: 100%;
    }
`

const DateWrapper = styled.div`
    margin-bottom: 1em;
    line-height: 1.15;
    font-size: 1.5rem;

    time {
        display: block
    }

    @media screen and (min-width: ${theme.m}){
        font-size: 1.4rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1.75rem;
    }
`

const StyledAnchorLink = styled(AnchorLink)`
    display: inline-block;
    position: relative;
    font-weight: ${theme.fontWeight_bold};
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    color: ${theme.black};
    background: ${theme.white};
    text-decoration: none;
    padding: 10px ${theme.standardSpace}px;
    z-index: 2;
    width: 100%;
    text-align: center;

    svg {
        fill: ${theme.black};
    }

    :after {
        content: "";
        width: 100%;
        height: 5px;
        transition: height .3s;
        position: absolute;
        bottom: -5px;
        left: 0;
        background: ${theme.primary};
        z-index: -1;
    }

    &:hover, &:focus{
        color: ${theme.white};

        svg {
            fill: ${theme.white};
        }
        
        :after {
            height: calc(100% + 5px);
        }
    }
    &:focus{
        box-shadow: 0px 0px 0px 4px ${theme.focus};
        outline: none;
        height: auto;

        :after {
            bottom: 0;
            height: 100%;
        }
    }
    &:active{
        background: ${theme.primary} !important;
        box-shadow: none;
        transform: translate(0, 5px);   
        :after {
            height: 1px;
            bottom: -1px;
        }
    }
`

export const HeroShow = ({
    image1920x1080,
    image192x108,
    imageAltText,
    title,
    standfirst,
    dateTimeStart,
    children
}) =>
    <StyledWrapper>
        <Outer className={image1920x1080 ? "with_image" : "without_image"}>
            <Meta className="page_meta" titleLength={title.length}>
                {dateTimeStart && 
                    <DateWrapper>
                        <Moment format="MMM">{dateTimeStart}</Moment>
                        <Moment format="DD">{dateTimeStart}</Moment>
                    </DateWrapper>
                }
                {title && <Headline level={1} text={title}/>}
                {standfirst && <LeadParagraph text={standfirst}/>}
                {dateTimeStart ?
                    children && <ButtonContainer>{children}</ButtonContainer>
                    :
                    // <Button href="#performance-list" colorScheme={1}>View all showings</Button>
                    <StyledAnchorLink offset="175" href="#performance-list">View all showings</StyledAnchorLink>
                }
            </Meta>
            {image1920x1080 &&
                <ImageContainer>
                    <LazyImage
                        src={image1920x1080}
                        placeholder={image192x108}
                        visibilitySensorProps={{
                            partialVisibility: true
                        }}
                    >
                        {src => 
                            <StyledImage
                                itemprop="image"
                                src={src}
                                alt={imageAltText ? imageAltText : ""}
                            />
                        }
                    </LazyImage>
                </ImageContainer>
            }
        </Outer>
    </StyledWrapper>


HeroShow.propTypes = {
    /** 
    * Urls to the image for the article hero. 
    **/
    image1920x1080: PropTypes.string,
    /** 
    * Alt text for hero image.
    **/
    imageAltText: PropTypes.string,
    /** 
    * Optional copyright text for the hero image.
    **/
    imageCopyright: PropTypes.string,
    /** 
    * The text for the title which will be used as the H1 for this page/post
    **/
    title: PropTypes.string,
    /** 
    * A summary of the article.
    **/
    standfirst: PropTypes.string,
    /** 
    * The breadcrumb array
    **/
    crumbs: PropTypes.array,
    /** 
    * An optional definition to define if this is a service list page or a regular page
    **/
    isServiceListPage: PropTypes.bool
}