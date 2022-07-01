import * as React from "react"
import { HeroBasic, HeroHeadline, Standfirst } from "./index"

export default {
    title: "4 Components/All/HeroBasic"
}

export const normal = () =>
    <HeroBasic 
        image="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/1920/1080/1/2020-03/Hero.jpg"
    >
        <HeroHeadline>Here&apos;s some content</HeroHeadline>
        <Standfirst>Here&apos;s a standfirst</Standfirst>
    </HeroBasic>

export const noImage = () =>
    <HeroBasic image={null}>
        <HeroHeadline>Here&apos;s some content</HeroHeadline>
        <Standfirst>Here&apos;s a standfirst</Standfirst>
    </HeroBasic>
