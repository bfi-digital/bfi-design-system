import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { EventGrid } from "./index"
import demoEvents from "./data"

export default {
    title: "2 All Components/EventGrid",
    decorators: [withA11y],
}

export const multipleEvents = () =>
    <div style={{
        padding: "10px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>
        <EventGrid 
            events={[...demoEvents, ...demoEvents, ...demoEvents, ...demoEvents, ...demoEvents, ...demoEvents, ...demoEvents]}
        />
    </div>

export const multipleEventsWithFavouriting = () =>
    <div style={{
        padding: "10px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>
        <EventGrid 
            events={[...demoEvents, ...demoEvents]}
            favouritable={true}
            onFavourite={e => console.log(e)} 
            onUnfavourite={e => console.log(e)} 
        />
    </div>
