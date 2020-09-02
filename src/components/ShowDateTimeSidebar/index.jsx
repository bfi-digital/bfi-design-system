import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Moment from "react-moment"
import "moment-timezone"
import { ShowAddToCalendar } from "../ShowAddToCalendar"

const Outer = styled.div`
    font-size: 1.2rem;
    color: ${theme.black};
    margin-top: 0px;
    line-height: 150%;
    margin-bottom: ${theme.standardSpace*2}px;

    & p:first-child {
        margin-top: 0;
    }
`

const DateP = styled.span`
    display: block;
    margin-bottom: 5px;
    strong, span {
        display: block;
    }
`
const TimeP = styled.span`
    display: block;
`
export const ShowDateTimeSidebar = ({
    title,
    description,
    singlePerformance
}) => {
    const processedStartDateTime = new Date(singlePerformance.dateTimeStart)
    const datesAreOnSameDayCheck = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    const datesAreOnSameDay = singlePerformance.dateTimeEnd ? datesAreOnSameDayCheck(processedStartDateTime, new Date(singlePerformance.dateTimeEnd)) : true

    return(
        <Outer>
            {getPerformanceInfo(singlePerformance)}

            {datesAreOnSameDay && <strong>Date &amp; Time</strong> }
            <DateP>
                {!datesAreOnSameDay && <strong>From: </strong>}
                {!datesAreOnSameDay && <span><Moment tz="Europe/London" format="HH:mm z">{singlePerformance.dateTimeStart}</Moment></span>}
                <Moment format="dddd Do MMMM YYYY" date={singlePerformance.dateTimeStart} />
            </DateP>
            {!datesAreOnSameDay && 
                <DateP>
                    <strong>Until: </strong>
                    <span><Moment tz="Europe/London" format="HH:mm z">{singlePerformance.dateTimeEnd}</Moment></span>
                    <Moment format="dddd Do MMMM YYYY" date={singlePerformance.dateTimeEnd} />
                </DateP>
            }
            {datesAreOnSameDay && 
                <TimeP>
                    <Moment tz="Europe/London" format="HH:mm">{singlePerformance.dateTimeStart}</Moment>
                    {singlePerformance.dateTimeEnd ? 
                        <>
                            &nbsp;&ndash;&nbsp;
                            <Moment tz="Europe/London" format="HH:mm z">{singlePerformance.dateTimeEnd}</Moment>
                        </>
                        :
                        <span>&nbsp;<Moment tz="Europe/London" format="z">{singlePerformance.dateTimeStart}</Moment></span>
                    }
                </TimeP>
            }

            {datesAreOnSameDay && 
                <ShowAddToCalendar 
                    title={title} 
                    description={description} 
                    location={singlePerformance.platform} 
                    dateTimeStart={singlePerformance.dateTimeStart} 
                    dateTimeEnd={singlePerformance.dateTimeEnd ? singlePerformance.dateTimeEnd : processedStartDateTime.setHours(processedStartDateTime.getHours() + 2)} 
                />
            }
        </Outer>
    )

    function getPerformanceInfo(performance) {
        let info
        performance.performanceInfo ? 
            info = <span>{performance.performanceInfo}</span>
            :
            performance.platform === "southbank" ? 
                info = <span>{performance.availability === "soldout" ? "No longer available to see " : "Screening" } at BFI Southbank</span>
                :
                performance.platform === "player" ?
                    info = <span>{performance.availability === "soldout" ? "No longer available" : performance.availability === "unavailable" ? "Soon to be available" : "Available"} to watch on BFI Player</span>
                    :
                    performance.platform === "youtube" ?
                        info = <span>Watch on YouTube</span>     
                        : 
                        null

        return <p>{info}{performance.screen && <span>&nbsp;&ndash;&nbsp;{performance.screen}</span>}</p>
    }
}
