import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch as Link } from "../../LinkSwitch"
import { Headline } from "../../Headline"
import LazyImage from "react-lazy-progressive-image"
import heart from "./heart.svg"
import heartFilled from "./heart-filled.svg"

const Outer = styled.li`
    position: relative;
    background: ${props => props.pageWithSideBar ? theme.lightGrey : theme.white};
    box-shadow: 0px 5px 0px ${theme.primary};
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 130px;
    width: 100%;
    padding: 15px;
    padding-top: ${props => props.withImage ? "258px" : "45px"};

    @media screen and (min-width: ${theme.m}){
        width: 190px;
        padding: ${theme.standardSpace}px;
        padding-top: ${props => props.withImage ? "120px" : "45px"};
    }
    @media screen and (min-width: ${theme.l}){
        padding-top: ${props => props.withImage ? "215px" : "45px"};
    }
    @media screen and (min-width: ${theme.xl}){
        padding-top: ${props => props.withImage ? "275px" : "45px"};
    }


    .h3 {
        margin-top: 0;
        color: ${theme.black};
        margin-bottom: 0px;
    }

    &:hover, &:focus-within {
        box-shadow: 0px 5px 0px ${theme.dark};
        background: ${theme.lightest};

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
    &:active{
        box-shadow: 0px 1px 0px ${theme.primary};
        transform: translate(0px, 3px);
    }
`
const Meta = styled.div`
    color: ${theme.darkGrey};
    margin-top: auto;

    p {
        margin-top: 15px;
    }
`
// const Date = styled.p`
//     margin-bottom: 10px;
// `
const Author = styled.p`
    margin-bottom: 0;
    margin-top: 15px;
`

const CallToAction = styled(Link)`
    width: 100%;
    
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
    height: 228px;

    @media screen and (min-width: ${theme.m}){
        height: 160px;
    }
    @media screen and (min-width: ${theme.l}){
        height: 175px;
    }
    @media screen and (min-width: ${theme.xl}){
        height: 235px;
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

const CategoryTag = styled.div`
    background: ${theme.primary};
    color: ${theme.white};
    padding: 5px;
    padding-left: 15px;
    padding-right: 10px;
    position: absolute;
    font-weight: ${theme.fontWeight_semiBold};
    top: ${props => props.withImage ? "213px" : "0px"};
    right: ${props => props.withImage ? "15px" : "0px"};
    z-index: 1;

    @media screen and (min-width: ${theme.m}){
        padding-right: 15px;
        padding-left: 15px;
        top: ${props => props.withImage ? "145px" : "0px"};
    }
    @media screen and (min-width: ${theme.l}){
        top: ${props => props.withImage ? "160px" : "0px"};
    }
    @media screen and (min-width: ${theme.xl}){
        top: ${props => props.withImage ? "220px" : "0px"};
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
    pageWithSideBar,
    title,
    url,
    image480x270,
    image48x27,
    format,
    dateTime,
    // type,
    external,
    
    favouritable,
    favourited,
    onFavourite,
    onUnfavourite
}) =>
    <Outer className="eventCard" pageWithSideBar={pageWithSideBar} withImage={image480x270 && image48x27}>

        {format && <CategoryTag withImage={image480x270 && image48x27}>{format}</CategoryTag>}

        {image480x270 && image48x27 &&
            <PageImageContainer>
                <LazyImage
                    src={image480x270}
                    placeholder={image48x27 ? image48x27 : image480x270}
                >
                    {src => <PageImage className="image" imageSrc={src} alt="" />}
                </LazyImage>
            </PageImageContainer>
        }

        <Headline level={6} text={title} />
        <Meta>
            {/* <Date>{date}</Date> */}
            {dateTime && <Author>{dateTime}</Author>}
        </Meta>

        <CallToAction 
            to={url}
            external={external} 
            className={external ? "external_link" : ""}
            rel={external ? "noreferrer" : ""} 
            target={external ? "_blank" : "_self"}
            title={"Read " + title + (external ? " in a new tab" : "")}
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

    </Outer>

