import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch as Link } from "../../LinkSwitch"
import { Headline } from "../../Headline"

const Outer = styled.li`
    position: relative;

    background: ${theme.light};

    box-shadow: 0px 5px 0px ${theme.primary};
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    text-align: center;
    overflow: hidden;

    width: 100%;
    padding: 15px;

    @media screen and (min-width: ${theme.m}){
        min-height: 300px;
        width: 190px;
        padding: ${theme.standardSpace}px;
    }

    .h3 {
        margin-top: 20px;
        color: ${theme.black};
        margin-bottom: 20px;
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
    &:active{
        box-shadow: 0px 1px 0px ${theme.primary};
        transform: translate(0px, 3px);
    }
    &:focus-within{
        color: red !important;
        box-shadow: 0px 0px 0px 5px ${theme.focus};
        transition: box-shadow .3s;
        a {
            outline: none;
        }
    }

`

const Meta = styled.div`
    color: ${theme.black};
    p {
        margin: 0;
    }
`

const Format = styled.p`
    margin-bottom: 0;
    margin-top: 0px;
`

const CallToAction = styled(Link)`
    display: block;         
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    width: 100%;
    &:active{
        outline: none;
        text-decoration: underline;
    }
    span {
        display: none;
    }
`

export const EventCard = ({
    pageWithSideBar,
    title,
    url,
    dateTime,
    format,
    type,
    external,
    upcoming
}) =>
    <Outer className="eventCard">

        <Meta>
            {upcoming && <Format>Upcoming</Format>}
            {format && <Format>{format}</Format>}
        </Meta>
        <Headline level={6} text={title} />
        <Meta>
            {dateTime && <Format>{dateTime}</Format>}
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
    </Outer>

