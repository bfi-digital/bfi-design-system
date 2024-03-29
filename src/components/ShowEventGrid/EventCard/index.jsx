import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch as Link } from "../../LinkSwitch"
import { Headline } from "../../Headline"
import heart from "./heart.svg"
import heartFilled from "./heart-filled.svg"

const strandColors = [
    theme.primary,
    theme.strandLove,
    theme.strandDebate,
    theme.strandCult,
    theme.strandLaugh,
    theme.strandDare,
    theme.strandJourney,
    theme.strandCreate,
    theme.strandFamily,
    theme.strandExperimenta,
    theme.strandTreasures,
    theme.strandExpanded,
    theme.strandEpisodic,
    theme.strandEvents,
]

const Outer = styled.div`
    position: relative;
    background: ${theme.lightGrey};
    box-shadow: 0px 5px 0px ${props => strandColors[props.strandColorScheme]};

    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 130px;
    padding: 15px;
    padding-top: ${props => props.withImage ? `${(theme.standardSpace*0.75)+130}px` : "45px"};
    width: calc(50% - 6.5px);
    margin-right: ${theme.standardSpace*0.5}px;
    margin-bottom: ${theme.standardSpace*0.75}px;

    &:nth-of-type(2n) {
        margin-right: 0;
    }
    &:nth-of-type(3n) {
        margin-right: ${theme.standardSpace*0.5}px;
    }
    @media screen and (min-width: ${theme.s}){
        padding-top: ${props => props.withImage ? `${(theme.standardSpace*0.75)+160}px` : "45px"};
    }
    @media screen and (min-width: ${theme.m}){
        width: calc(33.333% - 25px);
        margin-bottom: 35px;
        margin-right: ${theme.standardSpace}px;
        padding: ${theme.standardSpace}px;
        padding-top: ${props => props.withImage ? "188px" : "45px"};
        &:nth-of-type(2n) {
            margin-right: ${theme.standardSpace}px;
        }
        &:nth-of-type(3n) {
            margin-right: 0;
        }
    }
    @media screen and (min-width: ${theme.l}){
        width: calc(25% - 14.5px);
        margin-bottom: ${theme.standardSpace}px;
        margin-right: ${theme.standardSpace*0.75}px;
        padding: ${theme.standardSpace*0.75}px;
        padding-top: ${props => props.withImage ? `${(theme.standardSpace*0.75)+150}px` : "45px"};

        &:nth-of-type(2n) {
            margin-right: ${theme.standardSpace*0.75}px;
        }
        &:nth-of-type(3n) {
            margin-right: ${theme.standardSpace*0.75}px;
        }
        &:nth-of-type(4n) {
            margin-right: 0;
        }
    }
    @media screen and (min-width: ${theme.xl}){
        padding-top: ${props => props.withImage ? `${(theme.standardSpace*0.75)+135}px` : "40px"};
    }


    .h3 {
        margin-top: 0;
        color: ${theme.black};
        margin-bottom: 0px;

        @media screen and (max-width: ${theme.s}){
            font-size: ${theme.fontSize_m};
        }
        @media screen and (min-width: ${theme.l}){
            font-size: ${theme.fontSize_m};
        }
    }

    &:hover, &:focus-within {
        box-shadow: 0px 5px 0px ${theme.dark};
        background: ${theme.lightest};
        img {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
        .placeholder {
            opacity: 0.5;
        }
        p {
            color: ${theme.dark};
        }
        .filmcard_description {
            @media screen and (min-width: ${theme.l}){
              display: block;
            } 
            transform: translateY(0);
        }
        .filmcard_description_background {
            opacity: 1;
        }
        a svg{
            transform: translateX(4px);
        }
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 5px ${theme.focus};
        transition: box-shadow .3s;
        a {
            outline: none;
        }
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 5px white, 0px 0px 0px 9px ${theme.focus};

        .highlight_banner {
            background: ${theme.primary};
        }
        .filmcard_description {
            transform: translateY(0);
        }
        .filmcard_description_background {
            opacity: 1;
        }
    }
    &:active{
        box-shadow: 0px 1px 0px ${props => strandColors[props.strandColorScheme]};
        transform: translate(0px, 3px);
    }
`
const Meta = styled.div`
    color: ${theme.darkGrey};
    margin-top: auto;

    p {
        margin-top: 15px;
    }
    @media screen and (max-width: ${theme.s}){
        font-size: ${theme.small_fontSize_m};
        right: 0;
    }
`

const InsideScroller = styled(Outer)`
    flex: 0 0 40%;
    margin-right: 25px !important;

    &:last-of-type {
        margin-right: 0px !important;
    }

    @media screen and (min-width: ${theme.m}){
        flex: ${props => props.pageWithSidebar ? "0 0 35%" : "0 0 23%"};
        &:nth-of-type(even){
            margin-right: 25px !important;
        }
    }
    @media screen and (min-width: ${theme.l}){
        &:nth-of-type(3n){
            margin-right: 25px !important;
        }
    }
`

const Author = styled.p`
    margin-bottom: 0;
    margin-top: 15px;
`

const CallToAction = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    &:active{
        outline: none;
        text-decoration: underline;
    }
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    span {
        display: none;
    }
`

const PageImageContainer = styled.div`
    background: ${theme.light};
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 130px;

    @media screen and (min-width: ${theme.s}){
        height: 160px;
    }
    @media screen and (min-width: ${theme.l}){
        height: 150px;
    }
    @media screen and (min-width: ${theme.xl}){
        height: 135px;
    }
`
const PageImage = styled.div`
    width: 100%;
    background: url("${props => props.imageSrc}");
    height: 100%;
    background-position: center center;
    background-size: cover;
    display: block;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
`

const HighlightTag = styled.div`
    background: ${props => strandColors[props.strandColorScheme]};
    color: ${theme.white};
    padding: 5px;
    padding-left: 15px;
    padding-right: 10px;
    position: absolute;
    font-weight: ${theme.fontWeight_semiBold};
    top: ${props => props.withImage ? "115px" : "0px"};
    right: ${props => props.withImage ? "15px" : "0px"};
    z-index: 1;

    &::first-letter {
        text-transform: uppercase;
    }

    @media screen and (max-width: ${theme.s}){
        font-size: ${theme.small_fontSize_m};
        right: 0;
    }
    @media screen and (min-width: ${theme.s}){
        top: ${props => props.withImage ? "140px" : "0px"};
    }
    @media screen and (min-width: ${theme.m}){
        padding-right: 15px;
        padding-left: 15px;
        top: ${props => props.withImage ? "145px" : "0px"};
    }
    @media screen and (min-width: ${theme.l}){
        top: ${props => props.withImage ? "133px" : "0px"};
    }
    @media screen and (min-width: ${theme.xl}){
        top: ${props => props.withImage ? "117px" : "0px"};
    }
`
const DescriptionBG = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
    opacity: 0;
    transition: opacity 0.4s;
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 60%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 60%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 60%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#99000000',GradientType=0 ); /* IE6-9 */
    @media screen and (max-width: 400px){
        display: none;
    }  
`
const Description = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
    color: ${theme.white};
    z-index: 1;
    font-size: ${theme.fontSize_s};
    width: 100%;
    transform: translateY(100%);
    transition: .3s ease-in-out;
    max-height: 75%;
    display: none;
    @media screen and (max-width: 400px){
        display: none;
    }   
`

const FavButton = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    border-radius: 100%;
    padding: 7px;
    margin-top: 20px;
    cursor: pointer;
    z-index: 3;
    position: relative;
    &:hover{
        background: ${theme.light};
    }
    &:focus {
        box-shadow: 0px 0px 0px 5px ${theme.focus};
        outline: none;
    }
`

export const EventCard = ({
    title,
    url,
    image480x270,
    dateTime,
    external,
    inScroller,
    pageWithSidebar,

    strandColorScheme = 0,
    strandTitle,
    description,
    favouritable,
    favourited,
    onFavourite,
    onUnfavourite
}) => {
    const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
        condition ? wrapper(children) : wrapper2(children)
    return(
        <ConditionalWrapper
            condition={inScroller}
            wrapper={children => <InsideScroller pageWithSidebar={pageWithSidebar} withImage={image480x270} strandColorScheme={strandColorScheme} className="scrollcard">{children}</InsideScroller>}
            wrapper2={children => <Outer withImage={image480x270} strandColorScheme={strandColorScheme}>{children}</Outer>}
        >
            {strandTitle && <HighlightTag withImage={image480x270} strandColorScheme={strandColorScheme}>{strandTitle}</HighlightTag>}

            {image480x270 &&
                <PageImageContainer>
                    <PageImage className="image" imageSrc={image480x270} alt="" />
                    { description && <DescriptionBG className="filmcard_description_background" /> }
                    { description && <Description className="filmcard_description">{description.substr(0,90)}</Description> }
                </PageImageContainer>
            }

            <Headline level={6} text={title} />
            {dateTime && 
                <Meta>
                    <Author>{dateTime}</Author>
                </Meta>
            }

            <CallToAction 
                to={url}
                external={external} 
                className={external ? "external_link" : ""}
                title={"Read " + title}
            >
                <span>{title}</span>
            </CallToAction>

            {favouritable &&
                <>
                    {favourited ?
                        <FavButton onClick={onFavourite} title="Add to favourites">
                            <img src={heart} alt="Favourite event"/>
                        </FavButton>
                        :
                        <FavButton onClick={onUnfavourite} title="Remove from favourites">
                            <img src={heartFilled} alt="Remove from favourites"/>
                        </FavButton>
                    }
                </>
            }
        </ConditionalWrapper>
    )
}
