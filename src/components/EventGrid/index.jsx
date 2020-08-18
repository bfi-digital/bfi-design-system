import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { EventCard } from "./EventCard"
import { Button } from "../Button"
import { Headline } from "../Headline"
import { Skeleton } from "./EventCard/Skeleton"

const Outer = styled.div`
    margin: 15px 0;
    padding: 15px 0;
    padding-top: ${props => props.pageWithSideBar ? "15px" : "35px"};
    margin-top: ${theme.standardSpace}px;
    position: relative; 
    background: ${props => props.pageWithSideBar ? "transparent" : theme.grey};

    h2 {
        margin-top: 0;
        margin-bottom: ${theme.standardSpace}px;
        text-align: center;
    }

    &:before {
        display: ${props => props.pageWithSideBar ? "none" : "block"};
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9998px;
        right: 0;
        box-shadow: 9999px 0 0 ${theme.grey};
        border-left: 9999px solid ${theme.grey};
        z-index: -1;
    }
`
const Events = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;

    .eventCard, .loadingEventCard {
        width: 100%;

        @media screen and (min-width: ${theme.s}){
            width: calc(50% - 7px);
            margin-right: 14px;
            margin-bottom: 20px;
        }

        @media screen and (min-width: ${theme.m}){
            width: ${props => props.lessColumns ? "calc(50% - 12.5px)" : "calc(33.333% - 16.666px)"};
            margin-bottom: 35px;
            margin-right: ${theme.standardSpace}px;
        }
        @media screen and (min-width: ${theme.l}){
            min-width: 275px;
        }
    }

    &.noHighlight {
        .eventCard, .loadingEventCard {
            @media screen and (min-width: ${theme.s}){
                &:nth-of-type(2n) {
                    margin-right: 0px;
                }
            }
            @media screen and (min-width: ${theme.m}){
                &:nth-of-type(2n) {
                    margin-right: ${props => props.lessColumns ? "0px" : (theme.standardSpace + "px")};
                }
                &:nth-of-type(3n) {
                    margin-right: ${props => props.lessColumns ? (theme.standardSpace + "px") : "0px"};
                }
                // &:nth-of-type(4n) {
                //     margin-right: ${props => props.lessColumns ? "0px" : (theme.standardSpace + "px")};
                // }  
            }
        }
    }

`
const CentredButton = styled(Button)`
    margin: ${theme.standardSpace}px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

const StyledHeadline = styled(Headline)`
    text-align: center;
`   

export const EventGrid = ({
    events,
    optionalTitle,
    optionalCTALink,
    optionalCTATitle,
    pageWithSideBar,
    children,
    skeletons = 6,
    loadMoreLoading,
    limitEvents,

    favouritable,
    onFavourite,
    onUnfavourite
}) => {
    const [currentNumber, setCurrentNumber] = useState(3)

    return(
        <Outer pageWithSideBar={pageWithSideBar} className="article_grid_block">
            {optionalTitle && 
                <StyledHeadline level={2} text={optionalTitle} />
            }
            {limitEvents ? 
                <>
                    <Events 
                        lessColumns={(events.length === 2)} 
                        className={"noHighlight" + (pageWithSideBar ? " noBackground" : " withBackground")}
                    >
                        {events.slice(0, currentNumber).map(article =>
                            <EventCard favouritable={favouritable} onFavourite={onFavourite} onUnfavourite={onUnfavourite} key={article.uuid} pageWithSideBar={pageWithSideBar} {...article}/>    
                        )
                        }
                    </Events>
                    {currentNumber < events.length &&
                        <CentredButton href="#4" onClick={() => setCurrentNumber(currentNumber+3)}>Load more</CentredButton>
                    }
                </>
                :
                <>
                    {events ?
                        <Events 
                            lessColumns={(events.length === 2 || events.length === 4)} 
                            className={"noHighlight" + (pageWithSideBar ? " noBackground" : " withBackground")}
                        >
                            {events.map(article =>
                                <EventCard favouritable={favouritable} onFavourite={onFavourite} onUnfavourite={onUnfavourite} key={article.uuid} pageWithSideBar={pageWithSideBar} {...article}/>    
                            )}
                        </Events>
                        :
                        <Events lessColumns={events.length === 2 || events.length === 4} className="noHighlight skeletons">
                            {[...Array(skeletons)].map((i) => <Skeleton key={i} noBackground={pageWithSideBar} loadMoreLoading={loadMoreLoading} /> )}
                        </Events>
                    }
                    { optionalCTALink &&
                        <CentredButton to={optionalCTALink}>{optionalCTATitle ? optionalCTATitle : "See more events"}</CentredButton>
                    }
                    {children}
                </>
            }
        </Outer>
    )
}
