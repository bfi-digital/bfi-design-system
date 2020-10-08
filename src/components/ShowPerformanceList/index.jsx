import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Moment from "react-moment"
import "moment-timezone"
import { Headline } from "../Headline"
import { Button } from "../Button"
import { PlayButton } from "../PageContainer"
import { ShowAddToCalendar } from "../ShowAddToCalendar"

const Outer = styled.div`
    font-size: ${theme.fontSize_s};

    h2:first-child {
        margin-block-start: 0;
        margin-block-end: ${theme.standardSpace}px;
    }

    @media screen and (min-width: ${theme.l}){
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.fontSize_xl};
    }
`
const PerformanceList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`
const Performance = styled.li`
    width: 100%;
    padding: ${theme.standardSpace}px;
    margin-bottom: ${theme.standardSpace}px;
    background: ${theme.lightGrey};

    p {
        margin-bottom: 7px;
        margin-top: ${theme.standardSpace/4}px;

        &:first-of-type {
            margin-top: 0;
        }
    }
    strong {
        font-weight: ${theme.fontWeight_semiBold};
    }

    @media screen and (min-width: ${theme.m}){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const PerformanceDetails = styled.div`
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.m}){
        margin-bottom: 0px;
    }
`
const PerformanceCTA = styled.div`

`
const DetailsContainer = styled.div`
    display: flex;
    p {
        margin-top: 0;
        &:first-of-type {
            margin-right: 20px;
        }
    }
`
const StyledButton = styled(Button)`
    min-width: 180px;
    &::first-letter {
        text-transform: uppercase;
    }
`
export const ShowPerformanceList = ({
    showTitle,
    performances,
    showType,
    showDescription
}) => {
    const datesAreOnSameDayCheck = (first, second) => 
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    
    const dateIsInPast = (firstDate, secondDate) => {
        return firstDate.setHours(0,0,0,0) > secondDate.setHours(0,0,0,0)
    }

    const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
        condition ? wrapper(children) : wrapper2(children)
    return( 
        <Outer>
            <Headline
                level={2} 
                text={`${showTitle} ${showType === "event" ? "dates and times" : "screenings"}`}
            />
            <PerformanceList id="performance-list">
                {performances.map((performance) => {
                    let performanceTimeCheck = (new Date(performance.dateTimeStart).getHours() === 0) && (new Date(performance.dateTimeStart).getMinutes() === 0) ? false : true
                    return(
                        <Performance key={performance.id}>
                            <PerformanceDetails>
                                {getPerformanceInfo(performance)}

                                {datesAreOnSameDayCheck(new Date(performance.dateTimeStart), new Date(performance.dateTimeEnd)) ? 
                                    <>
                                        <p>
                                            <strong>
                                                <Moment format="dddd D MMMM YYYY">{performance.dateTimeStart}</Moment><br />
                                                {performanceTimeCheck && 
                                                    <>
                                                        <Moment tz="Europe/London" format="HH:mm">{performance.dateTimeStart}</Moment>
                                                        {performance.dateTimeEnd &&
                                                            <>
                                                                &nbsp;&ndash;&nbsp;
                                                                <Moment tz="Europe/London" format="HH:mm">{performance.dateTimeEnd}</Moment>
                                                            </>
                                                        }
                                                        &nbsp;<Moment tz="Europe/London" format="z">{performance.dateTimeEnd}</Moment>
                                                    </>
                                                }
                                            </strong>
                                        </p>
                                        <ShowAddToCalendar 
                                            title={showTitle} 
                                            description={showDescription} 
                                            location={performance.platform === "southbank" ? "BFI Southbank, Belvedere Rd, Bishop's, London SE1 8XT" : performance.ctaURL} 
                                            dateTimeStart={performance.dateTimeStart} 
                                            dateTimeEnd={performance.dateTimeEnd ? performance.dateTimeEnd : new Date(performance.dateTimeEnd).setHours(new Date(performance.dateTimeEnd).getHours() + 2)} 
                                        />
                                    </>
                                    :
                                    <DetailsContainer>
                                        {performance.dateTimeEnd &&
                                            <p>
                                                <strong>From: </strong>
                                                <br/>
                                                <strong>Until: </strong>
                                            </p>
                                        }
                                        <p>
                                            <ConditionalWrapper
                                                condition={performance.dateTimeEnd}
                                                wrapper={children => <span>{children}</span>}
                                                wrapper2={children => <strong>{children}</strong>}
                                            >
                                                {performanceTimeCheck ?
                                                    <Moment tz="Europe/London" format="dddd D MMMM YYYY - HH:mm z">{performance.dateTimeStart}</Moment> 
                                                    :
                                                    <Moment tz="Europe/London" format="dddd D MMMM YYYY">{performance.dateTimeStart}</Moment> 
                                                }
                                            </ConditionalWrapper>
                                            {performance.dateTimeEnd &&
                                                <>
                                                    <br />
                                                    <span>
                                                        {performanceTimeCheck ?
                                                            <Moment tz="Europe/London" format="dddd D MMMM YYYY - HH:mm z">{performance.dateTimeEnd}</Moment>
                                                            :
                                                            <Moment tz="Europe/London" format="dddd D MMMM YYYY">{performance.dateTimeEnd}</Moment>
                                                        }
                                                    </span>
                                                </>
                                            }
                                        </p>
                                    </DetailsContainer>
                                }
                            </PerformanceDetails>
                            <PerformanceCTA>
                                {getPerformanceButton(performance)}
                            </PerformanceCTA>
                        </Performance>
                    )
                })}
            </PerformanceList>
        </Outer>
    )

    function getPerformanceInfo(performance) {
        let info
        performance.performanceInfo ? 
            info = <span>{performance.performanceInfo}</span>
            :
            performance.platform === "southbank" ? 
                info = <span>{performance.availability === "soldout" ? "No longer available to see " : "Screening" } at {performance.screen? performance.screen: "BFI Southbank"}</span>
                :
                performance.platform === "player" ?
                    info = <span>{performance.availability === "soldout" ? "No longer available" : performance.availability === "unavailable" ? "Soon to be available" : "Available"} on {performance.screen? performance.screen: "BFI Player"} </span>
                    :
                    performance.platform === "youtube" ?
                        info = <span>Watch on YouTube</span>     
                        : 
                        null
        return <p>{info}</p>
    }

    function getPerformanceButton(performance) {
        let button

        if(performance.availability === "available"){
            performance.availability === "available" ?
                performance.platform === "southbank" ?
                    button = <StyledButton level={1} url={performance.ctaURL} external={true}>Book now</StyledButton>
                    :
                    performance.platform === "player" || performance.platform === "youtube" ?
                        performance.paywall === "free" ?
                            button = <PlayButton url={performance.ctaURL} external={true} level={1}>Watch now</PlayButton>
                            :
                            button = <StyledButton level={1} url={performance.ctaURL} external={true}>Book now</StyledButton>
                        :
                        performance.platform === "xr" ?
                            button = <StyledButton level={1} url={performance.ctaURL} external={true}>Find out more</StyledButton>
                            :
                            performance.platform === "external" ?
                                button = <StyledButton level={1} url={performance.ctaURL} external={true}>Check availability</StyledButton>
                                :null
                :button =""            
        }
        else if(performance.availability === "On sale now"){
            performance.availability === "On sale now" ?
                performance.platform === "southbank" ?
                    button = <StyledButton level={1} url={performance.ctaURL} external={true}>Book now</StyledButton>
                    :
                    performance.platform === "player" || performance.platform === "youtube" ?
                        performance.paywall === "free" ?
                            button = <PlayButton url={performance.ctaURL} external={true} level={1}>Book now</PlayButton>
                            :
                            button = <StyledButton level={1} url={performance.ctaURL} external={true}>Book now</StyledButton>
                        :
                        performance.platform === "xr" ?
                            button = <StyledButton level={1} url={performance.ctaURL} external={true}>Find out more</StyledButton>
                            :
                            performance.platform === "external" ?
                                button = <StyledButton level={1} url={performance.ctaURL} external={true}>Check availability</StyledButton>
                                :null
                :button =""
        }else{
            button = <StyledButton level={1} disabled>
                {performance.availability === "unavailable" && performance.paywall === "free" ? "Coming soon" :
                    performance.availability === "soldout" ? "Sold out"
                        : (dateIsInPast(new Date(performance.dateTimeStart), new Date()) ? 
                            (performance.paywall === "free" && performance.platform !== "southbank" ? "Coming soon" : "Check back for tickets") 
                            : "No longer available")}
            </StyledButton>
        }
        return button
    }
}

