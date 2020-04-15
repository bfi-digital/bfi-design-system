import React from "react"
import { Wrapper, MainContent, GreySection } from "./index"

import navItems from "../Header/data"
import {default as crumbs} from "../Breadcrumbs/data"
import footerMenus from "../Footer/data"
import demoArticles from "../ArticleGrid/data"

// import { AdvertisingContainer } from "../AdvertisingContainer"
import { ArticleGrid } from "../ArticleGrid"
import { Breadcrumbs } from "../Breadcrumbs"
import { Blockquote } from "../Blockquote"
import { Button } from "../Button"
import { Divider } from "../Divider"
import { ErrorPage } from "../ErrorPage"
import { DownloadableFiles } from "../DownloadableFiles"
import { FilmGrid } from "../FilmGrid"
import { FilmShowing } from "../FilmShowing"
// import { FilmShowingGrid } from "../FilmShowingGrid"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Headline } from "../Headline"
import { Hero } from "../Hero"
import { Highlights } from "../Highlights"
import { Image } from "../Image"
import { ImageGallery } from "../ImageGallery"
import { LeadParagraph } from "../LeadParagraph"
import { Oembed } from "../Oembed"
import { PageLinks } from "../PageLinks"
import { PromoBanner } from "../PromoBanner"
// import { QuickFacts } from "../QuickFacts"
// import { SidebarPageLinks } from "../SidebarPageLinks"
// import { StepByStep } from "../StepByStep"
import { Text } from "../Text"

import demoFilms from "../FilmGrid/data"
import demoShowings from "../Highlights/data"

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
                    {
                        title: "Development fund",
                        description: "We welcome development applications from new and established filmmakers.",
                        url: "#",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    },
                    {
                        title: "Production Fund",
                        url: "#",
                        description: "We welcome production applications from new and established filmmakers.",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    }
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
            headline="Discover the world of cinema with the BFI"
        />
        <Wrapper>
            <MainContent>
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
                <Headline 
                    level={2} 
                    text="Watch with us"
                />
                <FilmGrid films={demoFilms} allFilmsUrl="#"/>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>

export const everyComponent = () =>
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
                    html="<p>So you two dig up, dig up dinosaurs? Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
                    <p>Yes, Yes, without the oops! <a href='http://google.com</MainContent>'>Yes, Yes, without the oops!</a> Drive us out of here!</p>"
                />
                <Blockquote 
                    quote="Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should." 
                    citation="Ian Malcolm"
                />
                <Text
                    html="<p>Fellini’s epic La dolce vita stands as a towering achievement of 1960s cinema. Set in Rome during the height of the ‘Hollywood on the Tiber’ era, the episodic narrative follows jaded journalist Marcello Rubini (Mastroianni) on the trail of gossip on VIPs, including Swedish-American film star Sylvia Rank (Ekberg).</p> 
                    <p>The film caused a sensation on its initial release, angering censors and polarising opinion among critics and audiences, but is now rightly considered a masterpiece that’s had a profound influence on popular culture.</p>"
                />
                <Divider />
                <Headline 
                    level={1} 
                    text="Headline 1"
                />
                <Headline 
                    level={2} 
                    text="Headline 2"
                />
                <Headline 
                    level={3} 
                    text="Headline 3"
                />
                <Headline 
                    level={4} 
                    text="Headline 4"
                />
                <Divider />
                <Text
                    html="<p>Fellini’s epic La dolce vita stands as a towering achievement of 1960s cinema. Set in Rome during the height of the ‘Hollywood on the Tiber’ era, the episodic narrative follows jaded journalist Marcello Rubini (Mastroianni) on the trail of gossip on VIPs, including Swedish-American film star Sylvia Rank (Ekberg).</p>"
                />
                <DownloadableFiles
                    files={{
                        title: "Young Audiences Content Fund production application guidelines",
                        type: "PDF",
                        url: "https://www.bfi.org.uk/sites/bfi.org.uk/files/downloads/bfi-young-audiences-content-fund-production-application-guidelines-2019-10.pdf",
                        size: "1.2 MB"
                    }}
                />
                <Text
                    html="<p>The film caused a sensation on its initial release, angering censors and polarising opinion among critics and audiences, but is now rightly considered a masterpiece that’s had a profound influence on popular culture.</p>"
                />
                
                <Button url="#" colorScheme={0}>Apply for funding</Button>
                <Divider />
                <Headline 
                    level={2} 
                    text="Image slices"
                />
                <Image
                    isClickable={true}
                    side="right"
                    alt="Alt text"
                    src="http://placehold.it/450x300"
                    caption="Example image caption"
                />
                <Text
                    html="<p>Fellini’s epic La dolce vita stands as a towering achievement of 1960s cinema. Set in Rome during the height of the ‘Hollywood on the Tiber’ era, the episodic narrative follows jaded journalist Marcello Rubini (Mastroianni) on the trail of gossip on VIPs, including Swedish-American film star Sylvia Rank (Ekberg).</p> 
                    <p>The film caused a sensation on its initial release, angering censors and polarising opinion among critics and audiences, but is now rightly considered a masterpiece that’s had a profound influence on popular culture.</p>"
                />
                <Headline 
                    level={3} 
                    text="An image gallery"
                />
                <ImageGallery 
                    images={[
                        {
                            url: "http://placehold.it/300x200",
                            alt: "Example image",
                            caption: "Example image"
                        },
                        {
                            url: "http://placehold.it/300x300",
                            alt: "Example image 2"
                        },
                        {
                            url: "http://placehold.it/600x400",
                            alt: "Example image 3",
                            caption: "Example image 3"
                        },
                        {
                            url: "http://placehold.it/1200x800",
                            alt: "Example image 4",
                            caption: "Example image 4"
                        },
                        {
                            url: "http://placehold.it/600x400",
                            alt: "Example image 5",
                            caption: "Example image 5"
                        }
                    ]}
                    galleryCaption="A gallery of images"
                />
                <Headline 
                    level={2} 
                    text="Checkout these films"
                />
                <FilmGrid films={[
                    {
                        name: "La La Land",
                        image480x270: "http://placehold.it/480x270",
                        imageAltText: "Example image",
                        channels: [
                            "Southbank"
                        ],
                        url: "#"
                    },
                    {
                        name: "The Lighthouse",
                        image480x270: "",
                        imageAltText: "Example image",
                        channels: [
                            "BFI Player",
                            "Southbank"
                        ],
                        url: "#"
                    },
                    {
                        name: "Santa Claus Conquers the Martians",
                        image480x270: "http://placehold.it/480x270",
                        imageAltText: "Example image",
                        channels: [
                            "BFI Player"
                        ],
                        url: "#"
                    }
                ]} />
                <Headline 
                    level={4} 
                    text="With these times"
                />
                <FilmShowing
                    name="La La Land"
                    date="24th February"
                    times={[
                        {
                            time: "3:30pm",
                            url: "#"
                        },
                        {
                            time: "6:30pm",
                            url: "#"
                        },
                        {
                            time: "8:45pm",
                            url: "#",
                            soldOut: true
                        }
                    ]}
                />
                <Headline 
                    level={2} 
                    text="Checkout our YouTube"
                />
                <Oembed oembedObject={{
                    author_url: "https://www.youtube.com/user/BFIfilms",
                    title: "Misbehaviour director Phillipa Lowthorpe and producer Suzanne Mackie | BFI Q\u0026A",
                    height: 337,
                    provider_url: "https://www.youtube.com/",
                    type: "video",
                    version: "1.0",
                    thumbnail_height: 337,
                    thumbnail_url: "https://i.ytimg.com/vi/vpqYxK6mmSU/hqdefault.jpg",
                    thumbnail_width: 600,
                    provider_name: "YouTube",
                    width: 600,
                    author_name: "BFI",
                    html: "\u003ciframe width=\"600\" height=\"337\" src=\"https://www.youtube.com/embed/vpqYxK6mmSU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />
                <Divider />
                <Headline 
                    level={2} 
                    text="View some other pages"
                />
                <PageLinks links={[
                    {
                        title: "Development fund",
                        description: "We welcome development applications from new and established filmmakers.",
                        url: "#",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    },
                    {
                        title: "Production Fund",
                        url: "#",
                        description: "We welcome production applications from new and established filmmakers.",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    }
                ]} />
                <Divider />
                <Headline 
                    level={2} 
                    text="Click this promotion!"
                />
                <PromoBanner 
                    colorScheme={0}
                    headline="Watch BFI-picked contemporary and classic films in cinema"
                    description="EU demands UK keep chlorinated chicken ban to get trade deal"
                    image="http://placehold.it/600x600"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                    secondImage="http://placehold.it/150x40"
                    secondImageAltText="Test image"
                />
                <ArticleGrid articles={demoArticles} />
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>

export const errorPageExample = () =>
    <>
        <Header navItems={navItems}/>
        <Wrapper>
            <ErrorPage 
                error={404}
            />
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>
