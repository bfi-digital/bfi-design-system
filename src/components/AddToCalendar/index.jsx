import theme from "../_theme"
import React from "react"
import styled from "styled-components"

// Information:
// https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs

function dedent(str) {
    const [indent] = str.match(/^\n\s+/)

    const output = str.replaceAll(indent, "\r\n").trim()
    return output
}

function formatDate(date) {
    return date.toISOString().replaceAll(/[-.:]/g, "").substr(0, 15) + "Z"
}

const MenuItem = styled.a`
	display: block;

	&:link,
	&:any-link {
		color: black;
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
		padding: 5px 10px;
	}

	&:hover,
	&:focus {
		background: ${theme.lightFocus};
	}
`

const Menu = styled.menu`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	background: white;

	& > li {
		list-style: none;
	}
`

const Details = styled.details`
	display: inline-block;

	// Relative position to contain the absolutely positioned menu
	position: relative;

	& > menu {
		// Absolute position so it doesn't change parent size when expanded
		position: absolute;
		width: 100%;
	}

	& > summary {
		color: ${theme.primary};
		font-weight: bold;
		font-size: 16px;
		padding: 10px;
		cursor: pointer;

		&::marker { content: ""; }
	}

	&:focus-within, &:hover, &[open] {
		outline: 3px solid ${theme.focus};
	}
`

const closeDetails = e=>e.currentTarget.open=e.currentTarget.contains(e.relatedTarget)

export default function AddToCalendar({ title, description, start, end, location, source, ...etc }){
    const id = source?.href || title+start
    const url = source?.href || "https://bfi.org.uk/"
    const googleParams = new URLSearchParams([
        ...Object.entries({
            action: "TEMPLATE",
            text: title,
            dates: `${formatDate(start)}/${formatDate(end)}`,
            details: description,
            location
        }),
        ["sprop", `website:${url}`],
        ["sprop", `source:${source?.title||url}`]
    ])
    const googleUrl = `https://calendar.google.com/calendar/render?${googleParams}`

    const yahooParams = new URLSearchParams({
        v: 60,
        TITLE: title,
        ST: formatDate(start),
        ET: formatDate(end),
        DESC: description,
        in_loc: location,
        url,
        uid: id
    })
    const yahooUrl = `https://calendar.yahoo.com/?${yahooParams}`


    const outlookParams = new URLSearchParams({
        path: "/calendar/action/compose",
        rru: "addevent",
        startdt: start.toISOString().substring(0,19)+"Z",
        enddt: end.toISOString().substring(0,19)+"Z",
        subject: title,
        body: description,

    })
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?${outlookParams}`

    const ical = dedent(`
		BEGIN:VCALENDAR
		PRODID:BFI
		VERSION:2.0
		BEGIN:VEVENT
		UID:${id}
		URL:${url}
		DTSTAMP:${formatDate(new Date())}
		DTSTART:${formatDate(start)}
		DTEND:${formatDate(end)}
		SUMMARY:${title}
		DESCRIPTION:${description.replaceAll("\n", "\\n")}
		LOCATION:${location}
		END:VEVENT
		END:VCALENDAR`)

    const icalLink = "data:text/calendar," + encodeURIComponent(ical)

    const filename = `${title}.ics`

    return <Details {...etc} onBlur={closeDetails}>
        <summary>Add to calendar</summary>
        <Menu>
            <li><MenuItem href={googleUrl}>Google</MenuItem></li>
            <li><MenuItem href={icalLink} download={filename}>Apple</MenuItem></li>
            <li><MenuItem href={yahooUrl}>Yahoo</MenuItem></li>
            <li><MenuItem href={outlookUrl}>Outlook</MenuItem></li>
            <li><MenuItem href={icalLink} download={filename}>Download .ics</MenuItem></li>
        </Menu>
    </Details>
}
