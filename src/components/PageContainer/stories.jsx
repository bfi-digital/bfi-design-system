import React from "react"
import { Wrapper, MainContent, Sidebar, Actions, PlayButton } from "./index"

import navItems from "../Header/data"
import {longData as crumbs} from "../Breadcrumbs/data"
import footerMenus from "../Footer/data"
import demoArticles from "../ArticleGrid/data"

import { AdvertisingContainer } from "../AdvertisingContainer"
import { ArticleGrid } from "../ArticleGrid"
import { Breadcrumbs } from "../Breadcrumbs"
import { Blockquote } from "../Blockquote"
import { Button } from "../Button"
import { Divider } from "../Divider"
import { DownloadableFiles } from "../DownloadableFiles"
import { FilmGrid } from "../FilmGrid"
import { FilmShowing } from "../FilmShowing"
import { FilmShowingGrid } from "../FilmShowingGrid"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Headline } from "../Headline"
import { Hero } from "../Hero"
// import { Highlights } from "../Highlights"
import { Image } from "../Image"
import { ImageGallery } from "../ImageGallery"
import { LeadParagraph } from "../LeadParagraph"
import { Oembed } from "../Oembed"
import { PageLinks } from "../PageLinks"
import { PromoBanner } from "../PromoBanner"
import { QuickFacts } from "../QuickFacts"
import { SidebarPageLinks } from "../SidebarPageLinks"
import { StepByStep } from "../StepByStep"
import { Text } from "../Text"

const pageLinksData = [
    {
        title: "BFI London Film Festival",
        url: "#",
        image: "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/16x9_small/public/sitestructure/lff-2019-1000x750.jpg?itok=vsVDKGIh"
    },
    {
        title: "BFI Flare: London LGBTIQ+ Film Festival",
        url: "#",
        image: "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/16x9_small/public/sitestructure/flare-2020-artwork-1000-750-v1.jpg?itok=0oZOJp2r"
    }
]

const days = [
    {
        date: "24th February",
        times: [
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
        ]
    },
    {
        date: "24th February",
        times: [
            {
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                time: "6:30pm",
                url: "#"
            }
        ]
    },
    {
        date: "24th February",
        times: [
            {
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                time: "6:30pm",
                url: "#"
            }
        ]
    },
    {
        date: "24th February",
        times: [
            {
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                time: "6:30pm",
                url: "#",
                soldOut: true
            }
        ]
    },
]


export default {
    title: "1 Page Examples/Page With Sidebar"
}

export const normalPage = () =>
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
                <SidebarPageLinks links={pageLinksData} blockTitle="Related pages" />
            </Sidebar>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>

export const activePage = () =>
    <>
        <Header navItems={navItems}/>
        <Wrapper>
            <MainContent>
                <Breadcrumbs 
                    breadcrumbs={crumbs} 
                />
                <Headline 
                    level={1} 
                    text="Development Fund"
                />
                <LeadParagraph 
                    text="We want to support work that takes risks and does something different. This means we fund projects that can’t find other, commercial finance at development stage."
                />
                <Text 
                    html="
                        <p>The BFI Development Fund supports live action or animated fiction projects, including:</p>
                        <ul>
                            <li>feature films and other longform work</li>
                            <li>emerging media including, virtual reality</li>
                        </ul>
                        <p>If you want to make a documentary, contact our partner Doc Society which provides this funding.</p>
                    "
                />

                <Headline 
                    level={2} 
                    text="Who can apply"
                />
                <Text 
                    html="
                        <p>This fund supports projects which have a writer and a producer. Your team can also include a director, if you have one at this stage.</p>

                        <p>The producer needs to apply through their company, based in the UK (or another state of the EU or European Economic Area).</p>

                        <p>Writers, directors and producers will need to tell us about their creative track record in the application. This can be in other film work or different media, including theatre and TV.</p>

                        <p>Other development funding is available through BFI NETWORK for writers</p>

                        <ul>
                            <li>at an early career stage</li>
                            <li>without a producer</li>
                        </ul>
                    "
                />
                <Divider />

                <Headline 
                    level={2} 
                    text="What you need to provide"
                />
                <Text 
                    html="
                        <p>You’ll need to submit an example of the writer’s and/or director’s previous work. This can be in any format, including:</p>
                        <ul>
                            <li>scripts</li>
                            <li>pitch documents</li>
                            <li>treatments</li>
                            <li>mood boards</li>
                            <li>storyboards</li>
                            <li>sizzle reel</li>
                        </ul>
                    "
                />
                <Divider />

                <Headline 
                    level={2} 
                    text="What kind of projects we fund"
                />
                <Text 
                    html="
                        <p>We’re looking for projects which:</p>
                        <ul>
                            <li>have cultural impact and spark debate</li>
                            <li>take risks in platform, content or form</li>
                            <li>give new perspectives and widen the range of voices and audiences in film</li>
                            <li>come from outside London and the South East of England</li>
                            <li>enable talent development and progression achieve creative excellence</li>
                        </ul>
                    "
                />
                <Divider />

                <Headline 
                    level={2} 
                    text="Apply for funding"
                />
                <Text 
                    html="
                        <p>You’ll need to make an account if you’ve not applied before.</p>
                    "
                />
                <Button url="#" colorScheme={0}>Apply for funding</Button>
                <Divider />

                <Headline
                    level={2}
                    text="Contact us"
                />
                <Text
                    html="<p>Contact us if you have a question about your application: <a href='mailto:developmentcoordinator@bfi.org.uk' title='Email us'>developmentcoordinator@bfi.org.uk</a>.</p>"
                />
            </MainContent>
            <Sidebar>
                <StepByStep 
                    title="Applying for film funding"
                    steps={[
                        {
                            title: "Is this fund right for you?",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Prepare your supporting materials",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Apply",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Wait to hear from us",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Your decision",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                    ]} 
                />
            </Sidebar>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>

export const FilmPage = () =>
    <>
        <Header navItems={navItems} overlay={true} />
        <Hero 
            copyright="Image: Firstname Surname"
            image1920x1080="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/La-Dolce-vita-1.jpg"
        >
            <Headline level={0} text="La Dolce Vita"/>
        </Hero>
        <Wrapper>
            <Actions>
                <Button to="#">Buy tickets</Button>
                <PlayButton to="#">Watch on BFI Player</PlayButton>
            </Actions>
        </Wrapper>
        <Wrapper sidebarLeft={true}>           
            <MainContent>
                <Text
                    html="<p>Fellini’s epic La dolce vita stands as a towering achievement of 1960s cinema. Set in Rome during the height of the ‘Hollywood on the Tiber’ era, the episodic narrative follows jaded journalist Marcello Rubini (Mastroianni) on the trail of gossip on VIPs, including Swedish-American film star Sylvia Rank (Ekberg).<p> 
                    <p>The film caused a sensation on its initial release, angering censors and polarising opinion among critics and audiences, but is now rightly considered a masterpiece that’s had a profound influence on popular culture.</p> 
                    <p>It was La dolce vita, for instance, that coined the term ‘paparazzo’, which came to describe a certain type of relentless celebrity photographer.</p>"
                />
                
                <Headline 
                    level={2} 
                    text="Book tickets at BFI Southbank"
                />
                <FilmShowingGrid showings={days} />
                <Button to="#" level={3}>All showings</Button>
            </MainContent>
            <Sidebar>
                <QuickFacts
                    facts={[
                        "Italy, France \n1960",
                        {
                            label: "Directed by",
                            value: "Frederico Fellini"
                        },
                        {
                            label: "Featuring",
                            value: "Marcello Mastroianni, Anita Ekberg, Anouk Aimée"
                        },
                    ]}
                />
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>
        <Wrapper>
            <MainContent>  
                <ArticleGrid articles={demoArticles} />

                <Headline 
                    level={4} 
                    text="Promoted links from around the web"
                />
                <AdvertisingContainer withCaption={false}>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
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
                    description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
                    image="http://placehold.it/600x600"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                    secondImage="http://placehold.it/150x40"
                    secondImageAltText="Test image"
                />
                <ArticleGrid articles={demoArticles} />
                <ArticleGrid withSideBar={true} articles={demoArticles} />
            </MainContent>
            

            <Sidebar>
                <SidebarPageLinks links={pageLinksData} blockTitle="Related pages" />
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
                <StepByStep 
                    title="Applying for film funding"
                    steps={[
                        {
                            title: "Is this fund right for you?",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Prepare your supporting materials",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Apply",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Wait to hear from us",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                        {
                            title: "Your decision",
                            description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                        },
                    ]} 
                />
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>
