import * as React from "react"
import { Image } from "./index"
import { Text } from "../Text"

export default {
    title: "4 Components/All/Image"
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

export const fullWidth = () =>
    <div style={{padding: "20px"}}>
        <Image
            alt="Alt text"
            src="https://via.placeholder.com/1440x768"
            placeholder="https://via.placeholder.com/144x77"
            caption="Example image caption"
        />
        <Text>{exampleText}</Text>
    </div>

export const leftAndBig = () =>
    <div style={{padding: "20px"}}>
        <Image
            side="left"
            alt="Alt text"
            src="https://via.placeholder.com/600x400"
            placeholder="https://via.placeholder.com/60x40"
            caption="Example image caption"
        />
        <Text>{exampleText}</Text>
    </div>

export const rightAndSmall = () =>
    <div style={{padding: "20px"}}>
        <Image
            isClickable={true}
            side="right"
            alt="Alt text"
            src="https://via.placeholder.com/250x200"
            placeholder="https://via.placeholder.com/25x20"
            caption="Example image caption"
        />
        <Text>{exampleText}</Text>
    </div>
