import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Header } from "./index"
import navItems from "./data"

export default {
    title: "All Components/Header",
    decorators: [withA11y],
    parameters: {
        backgrounds: [
            { name: "black", value: "#000000", default: true },
            { name: "white", value: "#ffffff" },
        ]
    }
}

export const opaque = () =>
    <>
        <Header navItems={navItems} overlay={false}/>
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