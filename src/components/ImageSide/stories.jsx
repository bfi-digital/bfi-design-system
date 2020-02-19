import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ImageSide } from "./index"
import { Text } from "../Text"

export default {
    title: "All Components/ImageSide",
    decorators: [withA11y]
}

let exampleText = `

<p>We gotta burn the rain forest, <strong>dump toxic waste</strong>, pollute the air, and <a href="#">rip up the OZONE!</a> 'Cause maybe if we screw up this planet enough, they won't want it anymore! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!</p>

<ol>
    <li>What do they got in there? King Kong?</li>
    <li>You really think you can fly that thing?</li>
    <li>Must go faster</li>
</ol>

<p>You really think you can fly that thing? Eventually, you do plan to have dinosaurs on your dinosaur tour, right? <a href="#">I gave it a cold?</a> I gave it a virus. A computer virus. Did he just throw my cat out of the window? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?</p>

<ul>
    <li>What do they got in there? King Kong?</li>
    <li>You really think you can fly that thing?</li>
    <li>Must go faster</li>
</ul>

`

export const leftAndBig = () =>
    <div style={{padding: "20px"}}>
        <ImageSide
            side="left"
            alt="Alt text"
            src="http://placehold.it/600x400"
            caption="Example image caption"
        />
        <Text
            html={exampleText}
        />
    </div>

export const rightAndSmall = () =>
    <div style={{padding: "20px"}}>
        <ImageSide
            side="right"
            alt="Alt text"
            src="http://placehold.it/200x200"
            caption="Example image caption"
        />
        <Text
            html={exampleText}
        />
    </div>