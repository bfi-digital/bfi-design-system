import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Moment from "react-moment"
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
    location,
    dateTimeStart,
    dateTimeEnd,
    performanceInfo
}) => {
    const datesAreOnSameDayCheck = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    const datesAreOnSameDay = datesAreOnSameDayCheck(new Date(dateTimeStart), new Date(dateTimeEnd))

    return(
        <Outer>
            {performanceInfo && <p>{performanceInfo}</p>}

            {datesAreOnSameDay && <strong>Date &amp; Time</strong> }
            <DateP>
                {!datesAreOnSameDay && <strong>From: </strong>}
                {!datesAreOnSameDay && <span><Moment local format="HH:mm">{dateTimeStart}</Moment> BST</span>}
                <Moment format="dddd Do MMMM YYYY" date={dateTimeStart} />
            </DateP>
            {!datesAreOnSameDay && 
                <DateP>
                    <strong>To: </strong>
                    <span><Moment local format="HH:mm">{dateTimeEnd}</Moment> BST</span>
                    <Moment format="dddd Do MMMM YYYY" date={dateTimeEnd} />
                </DateP>
            }
            {datesAreOnSameDay && 
                <TimeP>
                    <Moment local format="HH:mm">{dateTimeStart}</Moment>
                    &nbsp;&ndash;&nbsp;
                    <Moment local format="HH:mm">{dateTimeEnd}</Moment>
                </TimeP>
            }

            {datesAreOnSameDay && 
                <ShowAddToCalendar title={title} description={description} location={location} dateTimeStart={dateTimeStart} dateTimeEnd={dateTimeEnd} />
            }
        </Outer>
    )
}
