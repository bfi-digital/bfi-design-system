import * as React from "react"
import { Header } from "./index"
import navItems, { quickLinksData } from "./data"

export default {
    title: "4 Components/All/Header",
    parameters: {
        backgrounds: [
            { name: "black", value: "#000000", default: true },
            { name: "white", value: "#ffffff" },
        ]
    }
}

export const opaque = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} overlay={false}/>
        <div style={{
            height: "200vh",
            width: "100%",
            background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)"
        }}></div>
    </>

export const transparent = () =>
    <>
        <Header 
            navItems={navItems} 
            overlay={true}
        />
        <div style={{
            height: "200vh",
            width: "100%",
            background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)"
        }}></div>
    </>
