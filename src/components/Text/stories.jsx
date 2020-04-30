import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Text } from "./index"

export default {
    title: "2 All Components/Text",
    decorators: [withA11y],
}

export const normal = () =>
    <div style={{padding: "20px"}}>
        <Text>
            <p>We gotta burn the rain forest, <strong>dump toxic waste</strong>, pollute the air, and <a href="http://google.com">rip up the OZONE!</a> &apos;Cause maybe if we screw up this planet enough, they won&apos;t want it anymore! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! &apos;Cause maybe if we screw up this planet enough, they won&apos;t want it anymore!</p>

            <ol>
                <li>What do they got in there? King Kong?</li>
                <li>You really think you can fly that thing?</li>
                <li>Must go faster</li>
            </ol>

            <p>You really think you can fly that thing? Eventually, you do plan to have dinosaurs on your dinosaur tour, right? <a href="http://google.com">I gave it a cold?</a> I gave it a virus. A computer virus. Did he just throw my cat out of the window? You&apos;re a very talented young man, with your own clever thoughts and ideas. Do you need a manager?</p>

            <ul>
                <li>What do they got in there? King Kong?</li>
                <li>You really think you can fly that thing?</li>
                <li>Must go faster</li>
            </ul>
        </Text>
    </div>