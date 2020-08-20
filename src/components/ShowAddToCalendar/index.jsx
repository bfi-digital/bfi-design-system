import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import AddToCalendar from "react-add-to-calendar"

const Outer = styled.div`
    margin-top: 15px;
    @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    background: transparent;
    color: ${theme.primary};
    font-weight: bold;
    border: none;
    font-size: 1.2rem;
    padding: 0;
    cursor: pointer;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    li {
        padding-left: 0;
        a {
            color: ${theme.primary};
            display: block;
            padding: 7px 0px;
        }
        a:hover {
            text-decoration: none;
        }
        i {
            margin-right: 5px;
        }
    }

    .react-add-to-calendar__dropdown {
        background: ${theme.lightest};
        padding: 15px 25px;
        margin-left: -5px;
    }
    .react-add-to-calendar__button {
        display: block;
        border: 3px solid transparent;
        margin-left: -5px;
        padding-left: 2px;

        &.open {
            border: 3px solid ${theme.lightest};
            color: ${theme.dark};
        }
    }
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
    let icon = { "caret": "right" }
    let calendarItems = [
        { apple: "Apple Calendar" },
        { google: "Google" },
        { outlookcom: "Outlook" }
    ]

    return(
        <Outer>
            {/* NEED TO UPDATE THIS TO MAKE IT ACCESSIBLE, MAYBE LOOK AT http://leibowitz.me/react-add-to-calendar-hoc/ */}
            <i class="react-add-to-calendar__icon--left fa fa-calendar-plus-o"></i>
            <AddToCalendar 
                event={calendarEvent} 
                listItems={calendarItems} 
                buttonTemplate={icon} 
                displayItemIcons={true} 
                buttonClassOpen="open"
            />
        </Outer>
    )
}