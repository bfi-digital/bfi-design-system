import React from "react"
import { Wrapper, MainContent, GreySection } from "./index"

import navItems from "../Header/data"
import {default as crumbs} from "../Breadcrumbs/data"
import footerMenus from "../Footer/data"

import { Headline } from "../Headline"
import { Breadcrumbs } from "../Breadcrumbs"
import { Header } from "../Header"
import { Hero } from "../Hero"
import { Footer } from "../Footer"
import { LeadParagraph } from "../LeadParagraph"
import { PageLinks } from "../PageLinks"
import four from "../PageLinks/data"
import { Highlights } from "../Highlights"
import demoShowings from "../Highlights/data"

import { FilmGrid } from "../FilmGrid"
import demoFilms from "../FilmGrid/data"

export default {
    title: "1 Page Examples/Page Full Width"
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
                <PageLinks links={[
                    ...four, ...four
                ]} colorScheme={1}/>
                
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
            withHeader
            image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            headline="Watch a new film, rediscover your old favourites, and get inspired."
        />
        <Wrapper>
            <MainContent>
                <Headline 
                    level={2} 
                    text="Highlights this week"
                />
                <Highlights
                    highlight={{
                        image600x600: "https://placehold.it/600x600",
                        imageAltText: "",
                        caption: "18 - 29 March at BFI Southbank",
                        title: "BFI Flare: London LGBTIQ+ Film Festival 2020 programme announced",
                        description: "The best new and classic LGBTIQ+ films from around the world. Priority booking opens to BFI Members at 11:30 on 25 Feb. Champion booking is open.",
                        callToActionUrl: "#",
                        callToActionTitle: "Explore the programme"
                    }}
                    todayHighlight={{
                        image480x320: "https://placehold.it/480x320",
                        imageAltText: "",
                        caption: "Current season",
                        title: "Fellini Season, Jan-Feb 2020",
                        description: "The great Italian director’s centenary will be celebrated with a major two-month retrospective at BFI Southbank.",
                        callToActionUrl: "#",
                        callToActionTitle: "Explore the season"
                    }}
                    todayShowings={demoShowings}
                    weekHighlight={{
                        image480x320: "https://placehold.it/480x320",
                        imageAltText: "",
                        caption: "Current season",
                        title: "Cronenberg Season, Jan-Feb 2020",
                        description: "Canadian director David Cronenberg has been making...",
                        callToActionUrl: "#",
                        callToActionTitle: "Explore the season"
                    }}
                    weekShowings={demoShowings}
                    allShowingsUrl="#"
                />
            </MainContent>
    
        </Wrapper>
        <GreySection>
            <MainContent>
                <Headline 
                    level={2} 
                    text="Watch with us"
                />
                <FilmGrid films={demoFilms} allFilmsUrl="#"/>
            </MainContent>
        </GreySection>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>