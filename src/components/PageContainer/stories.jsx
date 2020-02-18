import React from "react"
import { Wrapper, MainContent, Sidebar } from "./index"

import navItems from "../Header/data"
import crumbs from "../Breadcrumbs/data"

import { Headline } from "../Headline"
import { Breadcrumbs } from "../Breadcrumbs"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { LeadParagraph } from "../LeadParagraph"
import { Text } from "../Text"

export default {
    title: "All Components/Page"
}

export const normal = () =>
    <>
        <Header navItems={navItems}/>
        <Wrapper>
            <MainContent>
                <Breadcrumbs 
                    breadcrumbs={crumbs} 
                />
                <Headline 
                    level={1} 
                    text="Headline goes here"
                />
                <LeadParagraph 
                    text="God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Do you have any idea how long it takes those cups to decompose. Yes, Yes, without the oops! Yes, Yes, without the oops! Drive us out of here!"
                />
                <Text 
                    html="So you two dig up, dig up dinosaurs? Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."
                />
            </MainContent>
            <Sidebar>
                Sidebar here
            </Sidebar>
        </Wrapper>
        <Footer/>
    </>