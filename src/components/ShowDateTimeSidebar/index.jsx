import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Moment from "react-moment"
import AddToCalendar from "react-add-to-calendar"

const Outer = styled.div`
    font-size: 1.2rem;
    color: ${theme.black};
    margin-top: 0px;
    line-height: 150%;
    margin-bottom: ${theme.standardSpace*2}px;
`
const AddToCalOuter = styled.button`
    background: transparent;
    color: ${theme.primary};
    font-weight: bold;
    border: none;
    font-size: 1.2rem;
    padding: 0;
    cursor: pointer;
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
    otherInfo
}) => {
    const datesAreOnSameDayCheck = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    const datesAreOnSameDay = datesAreOnSameDayCheck(new Date(dateTimeStart), new Date(dateTimeEnd))

    let calendarEvent = {
        title: title,
        description: description,
        location: location,
        startTime: dateTimeStart,
        endTime: dateTimeEnd
    }
    let calendarItems = [
        { apple: "Apple Calendar" },
        { google: "Google" },
        { outlookcom: "Outlook" }
    ]
    let calendarIcon = { "calendar-plus-o": "left" }

    return(
        <Outer>
            {datesAreOnSameDay && <strong>Date &amp; Time</strong> }
            <DateP>
                {!datesAreOnSameDay && <strong>From: </strong>}
                <time dateTime={dateTimeStart}>
                    {!datesAreOnSameDay && <span><Moment local format="HH:mm">{dateTimeStart} BST</Moment></span>}
                    <Moment format="dddd Do MMMM YYYY" date={dateTimeStart} />
                </time>
            </DateP>
            {!datesAreOnSameDay && 
                <DateP>
                    <strong>To: </strong>
                    <span><Moment local format="HH:mm">{dateTimeEnd} BST</Moment></span>
                    <time dateTime={dateTimeEnd}><Moment format="dddd Do MMMM YYYY" date={dateTimeEnd} /></time>
                </DateP>
            }
            {datesAreOnSameDay && 
                <TimeP>
                    <time dateTime={dateTimeStart}><Moment local format="HH:mm">{dateTimeStart}</Moment></time>
                    &nbsp;&ndash;&nbsp;
                    <time dateTime={dateTimeEnd}><Moment local format="HH:mm">{dateTimeEnd}</Moment></time>
                </TimeP>
            }

            {otherInfo && <p>{otherInfo}</p>}
            {/* NEED TO UPDATE THIS TO MAKE IT ACCESSIBLE, MAYBE LOOK AT http://leibowitz.me/react-add-to-calendar-hoc/ */}
            {datesAreOnSameDay && 
                <AddToCalOuter>
                    <AddToCalendar event={calendarEvent} listItems={calendarItems} buttonTemplate={calendarIcon} displayItemIcons={true} />
                </AddToCalOuter>
            }
        </Outer>
    )
}
