import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import AddToCalendar from "react-add-to-calendar"

const Outer = styled.button`
    margin-top: 15px;
    @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    background: transparent;
    color: ${theme.primary};
    font-weight: bold;
    border: none;
    font-size: 1rem;
    padding: 0;
    cursor: pointer;
    padding-left: 7px;
    margin-left: -7px;

    &:focus {
        outline: 2px solid ${theme.focus};
        border-radius: 0;
    }

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
        a:focus {
            outline: 2px solid ${theme.focus};
            border-radius: 0;
        }
        i {
            margin-right: 5px;
        }
    }
    .react-add-to-calendar__icon--left.fa-calendar-plus-o {
        vertical-align: top;
        margin-top: 5px;
    }

    .react-add-to-calendar {
        display: inline-block;
        margin-left: 5px;
    }
    .react-add-to-calendar__dropdown {
        background: ${theme.lightest};
        padding: 15px 25px;
        margin-left: -32px;
    }
    .react-add-to-calendar__button {
        display: block;
        border: 3px solid transparent;
        padding-left: 30px;
        margin-left: -32px;

        &.open {
            border: 3px solid ${theme.lightest};
            color: ${theme.dark};
        }
    }
    .react-add-to-calendar__icon--right {
        margin-left: 7px;
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
    const onButtonClick = () => {
        var link = document.getElementById("calendar_button")
        link.childNodes[1].childNodes[0].childNodes[0].click()
    }
     
    return(
        <Outer onClick={onButtonClick} id="calendar_button" aria-haspopup="listbox">
            <AddToCalendar 
                event={calendarEvent} 
                listItems={calendarItems} 
                buttonTemplate={icon} 
                displayItemIcons={true} 
                buttonClassOpen="open"
                buttonLabel="Add to calendar"
            />
        </Outer>
    )
}