import React from "react"
import { Wrapper, MainContent } from "./index"

import navItems from "../Header/data"
import {default as crumbs} from "../Breadcrumbs/data"
import footerMenus from "../Footer/data"

import { Headline } from "../Headline"
import { Breadcrumbs } from "../Breadcrumbs"
import { Header } from "../Header"
import { Hero } from "../Hero"
import { Footer } from "../Footer"
import { LeadParagraph } from "../LeadParagraph"
import { Text } from "../Text"

export default {
    title: "All Components/PageFullWidth"
}

export const serviceListPageExample = () =>
    <>
        <Header navItems={navItems}/>
        <Wrapper>
            <MainContent>
                <Breadcrumbs 
                    breadcrumbs={crumbs} 
                />
                <Headline 
                    level={1} 
                    text="Find a fund to create films, TV or new formats of storytelling"
                />
                <LeadParagraph 
                    text="If you’re an adventurous storyteller, we can help you with funding to create your film, TV, or emerging media like VR or AR."
                />
                <Text 
                    html="Page list goes here"
                />
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>




export const homePageExample = () =>
    <>
        <Header navItems={navItems} overlay={true} />
        <Hero 
            image="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            headline="Watch a new film, rediscover your old favourites, and get inspired."
        />
        <Wrapper>
            <MainContent>
                <Headline 
                    level={2} 
                    text="Highlights this week"
                />
            </MainContent>
    
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>