import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import AddToCalendar from "react-add-to-calendar"

const Outer = styled.p`
    background: transparent;
    color: ${theme.primary};
    font-weight: bold;
    border: none;
    font-size: 1.2rem;
    padding: 0;
    cursor: pointer;
`


export const ShowAddToCalendar = ({
    title,
    description,
    location,
    dateTimeStart,
    dateTimeEnd
}) => {
    let calendarEvent = {
        title: title,
        description: description,
        location: location,
        startTime: dateTimeStart,
        endTime: dateTimeEnd
    }
    let calendarIcon = { "calendar-plus-o": "left" }
    let calendarItems = [
        { apple: "Apple Calendar" },
        { google: "Google" },
        { outlookcom: "Outlook" }
    ]

    return(
        <Outer>
            {/* NEED TO UPDATE THIS TO MAKE IT ACCESSIBLE, MAYBE LOOK AT http://leibowitz.me/react-add-to-calendar-hoc/ */}
            <AddToCalendar event={calendarEvent} listItems={calendarItems} buttonTemplate={calendarIcon} displayItemIcons={true} />
        </Outer>
    )
}