import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { AdvertisingContainer } from "./index"

export default {
    title: "All Components/Advertising Container",
    decorators: [withA11y]
}

export const mpuExample = () =>
    <div style={{width: "320px", height: "270px", margin: "20px"}}>
        <AdvertisingContainer>
            <div style={{width: "300px", height: "250px", background: "pink"}}></div>
        </AdvertisingContainer>
    </div>

export const nativeExample = () =>
    <div style={{width: "600px", margin: "20px"}}>
        <h4 style={{marginBottom: "10px"}}>Promoted links from around the web</h4>
        <AdvertisingContainer withCaption={false}>
            <div style={{width: "580px", height: "400px", background: "pink"}}></div>
        </AdvertisingContainer>
    </div>

export const failedToLoadExample = () =>
    <div style={{width: "600px", margin: "20px"}}>
        <AdvertisingContainer></AdvertisingContainer>
    </div>