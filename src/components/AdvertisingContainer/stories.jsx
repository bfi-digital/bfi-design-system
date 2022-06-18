import * as React from "react"
import { AdvertisingContainer } from "./index"

export default {
    title: "4 Components/All/Advertising Container"
}

export const mpuExample = () =>
    <div style={{width: "320px", height: "270px", margin: "20px"}}>
        <AdvertisingContainer>
            <div style={{width: "300px", height: "250px", background: "grey"}}></div>
        </AdvertisingContainer>
    </div>

export const nativeExample = () =>
    <div style={{width: "600px", margin: "20px"}}>
        <AdvertisingContainer withCaption={false}>
            <div style={{width: "580px", height: "400px", background: "grey"}}></div>
        </AdvertisingContainer>
    </div>

export const failedToLoadExample = () =>
    <div style={{width: "600px", margin: "20px"}}>
        <AdvertisingContainer></AdvertisingContainer>
    </div>
