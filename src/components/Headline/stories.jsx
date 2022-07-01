import * as React from "react"
import { Headline } from "./index"

export default {
    title: "4 Components/All/Headline"
}

export const HeroH1 = () =>
    <Headline level={0} text="My example headline" />

export const level1 = () =>
    <Headline level={1} text="My example headline" />

export const level2 = () =>
    <Headline level={2} text="My example headline" />
    
export const level3 = () =>
    <Headline level={3} text="My example headline" />
