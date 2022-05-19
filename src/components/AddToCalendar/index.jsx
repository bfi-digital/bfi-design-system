import React from "react"

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

export default function AddToCalendar({ title, description, start, end, location, source }){
    const googleParams = new URLSearchParams([
        ...Object.entries({
            action: "TEMPLATE",
            text: title,
            dates: `${formatDate(start)}/${formatDate(end)}`,
            details: description,
            location
        }),
        ["sprop", `website:${source.href}`],
        ["sprop", `source:${source.title}`]
    ])
    const googleUrl = `https://calendar.google.com/calendar/render?${googleParams}`

    const yahooParams = new URLSearchParams({
        v: 60,
        TITLE: title,
        ST: formatDate(start),
        ET: formatDate(end),
        DESC: description,
        in_loc: location,
        url: source.href,
        uid: source.href
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
		UID:${source.href}
		URL:${source.href}
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

    return <details>
        <summary>Add to calendar</summary>
        <menu>
            <li><a href={googleUrl}>Google</a></li>
            <li><a href={icalLink} download={filename}>Apple</a></li>
            <li><a href={yahooUrl}>Yahoo</a></li>
            <li><a href={outlookUrl}>Outlook</a></li>
            <li><a href={icalLink} download={filename}>Download .ics</a></li>
        </menu>
    </details>
}
