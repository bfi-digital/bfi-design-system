import React from "react"
import { Wrapper, MainContent, Sidebar, Actions, PlayButton } from "./index"

import navItems, { quickLinksData } from "../Header/data"
import {longData as crumbs} from "../Breadcrumbs/data"
import footerMenus from "../Footer/data"
import demoArticles from "../ArticleGrid/data"

import { AdvertisingContainer } from "../AdvertisingContainer"
import { ArticleGrid } from "../ArticleGrid"
import { ArticleKeywords } from "../ArticleKeywords"
import { Breadcrumbs } from "../Breadcrumbs"
import { Blockquote } from "../Blockquote"
import { Button } from "../Button"
import { CallToAction } from "../CallToAction"
import { Divider } from "../Divider"
import { DownloadableFiles } from "../DownloadableFiles"
import { FilmCardSingle } from "../FilmCardSingle"
import { FilmGrid } from "../FilmGrid"
import { FilmShowing } from "../FilmShowing"
import { FilmShowingGrid } from "../FilmShowingGrid"
import { FilterableArticles } from "../FilterableArticles"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Headline } from "../Headline"
import { Hero } from "../Hero"
import { HeroArticle } from "../HeroArticle"
// import { Highlights } from "../Highlights"
import { Image } from "../Image"
import { ImageGallery } from "../ImageGallery"
import { ImageSponsorLinks } from "../ImageSponsorLinks"
import { NewsletterSignUp } from "../NewsletterSignUp"
import { LeadParagraph } from "../LeadParagraph"
import { Oembed } from "../Oembed"
import { PageLinks } from "../PageLinks"
import { PromoBanner } from "../PromoBanner"
import { QuickFacts } from "../QuickFacts"
import { SidebarPageLinks } from "../SidebarPageLinks"
import { SidebarFilmLinks } from "../SidebarFilmLinks"
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
        <Header navItems={navItems} quickLinks={quickLinksData} />
        <Wrapper>
            <Hero 
                title="Headline goes here"
                standfirst="God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Do you have any idea how long it takes those cups to decompose. Yes, Yes, without the oops! Yes, Yes, without the oops! Drive us out of here!"
                breadcrumbs={crumbs}
            />
            <MainContent>
                <Text> 
                    So you two dig up, dig up dinosaurs? Hey, you know how I&apos;m, like, always trying to save the planet? Here&apos;s my chance. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but your scientists were so preoccupied with whether or not they could, they didn&apos;t stop to think if they should.
                </Text>
            </MainContent>
            <Sidebar>
                <SidebarPageLinks links={pageLinksData} blockTitle="Related pages" />
            </Sidebar>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>

export const normalPageWithHeroImage = () =>
<>
    <Header navItems={navItems} quickLinks={quickLinksData} />
    <Wrapper>
        <Hero 
            title="Headline goes here"
            standfirst="God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Do you have any idea how long it takes those cups to decompose. Yes, Yes, without the oops! Yes, Yes, without the oops! Drive us out of here!"
            breadcrumbs={crumbs}
            image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            imageAltText="Alt text for the image"
            imageCopyright="HELP MUSICIANS, directed by Thomas Guthrie"
        />
        <MainContent>
            <Text> 
                So you two dig up, dig up dinosaurs? Hey, you know how I&apos;m, like, always trying to save the planet? Here&apos;s my chance. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but your scientists were so preoccupied with whether or not they could, they didn&apos;t stop to think if they should.
            </Text>
        </MainContent>
        <Sidebar>
            <SidebarPageLinks links={pageLinksData} blockTitle="Related pages" />
        </Sidebar>
    </Wrapper>
    <Footer
        menus={footerMenus}
        copyrightLinks={[
            {
                title: "Cookies & privacy",
                url: "#"
            },
            {
                title: "Terms & conditions",
                url: "#"
            },
            {
                title: "Accessibility",
                url: "#"
            },
            {
                title: "Help & FAQs",
                url: "#"
            }
        ]}
        copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
    />
</>

export const actionPage = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} />
        <Wrapper>
            <Hero 
                title="Development Fund"
                standfirst="We want to support work that takes risks and does something different. This means we fund projects that can’t find other, commercial finance at development stage."
                breadcrumbs={crumbs}
            />
            <MainContent>
                <Text> 
                    <p>The BFI Development Fund supports live action or animated fiction projects, including:</p>
                    <ul>
                        <li>feature films and other longform work</li>
                        <li>emerging media including, virtual reality</li>
                    </ul>
                    <p>If you want to make a documentary, contact our partner Doc Society which provides this funding.</p>
                </Text>

                <Headline 
                    level={2} 
                    text="Who can apply"
                />
                <Text> 
                    <p>This fund supports projects which have a writer and a producer. Your team can also include a director, if you have one at this stage.</p>

                    <p>The producer needs to apply through their company, based in the UK (or another state of the EU or European Economic Area).</p>

                    <p>Writers, directors and producers will need to tell us about their creative track record in the application. This can be in other film work or different media, including theatre and TV.</p>

                    <p>Other development funding is available through BFI NETWORK for writers</p>

                    <ul>
                        <li>at an early career stage</li>
                        <li>without a producer</li>
                    </ul>
                </Text>
                <Divider />

                <Headline 
                    level={2} 
                    text="What you need to provide"
                />
                <Text> 
                    <p>You’ll need to submit an example of the writer’s and/or director’s previous work. This can be in any format, including:</p>
                    <ul>
                        <li>scripts</li>
                        <li>pitch documents</li>
                        <li>treatments</li>
                        <li>mood boards</li>
                        <li>storyboards</li>
                        <li>sizzle reel</li>
                    </ul>
                </Text>
                <Divider />

                <Headline 
                    level={2} 
                    text="What kind of projects we fund"
                />
                <Text> 
                    <p>We’re looking for projects which:</p>
                    <ul>
                        <li>have cultural impact and spark debate</li>
                        <li>take risks in platform, content or form</li>
                        <li>give new perspectives and widen the range of voices and audiences in film</li>
                        <li>come from outside London and the South East of England</li>
                        <li>enable talent development and progression achieve creative excellence</li>
                    </ul>
                </Text>
                <Divider />

                <Headline 
                    level={2} 
                    text="Apply for funding"
                />
                <Text> 
                    <p>You’ll need to make an account if you’ve not applied before.</p>
                </Text>
                <CallToAction linkURL="/" linkText="Apply for funding" />
                <Divider />

                <Headline
                    level={2}
                    text="Contact us"
                />
                <Text>
                    <p>Contact us if you have a question about your application: <a href="mailto:developmentcoordinator@bfi.org.uk" title="Email us">developmentcoordinator@bfi.org.uk</a>.</p>
                </Text>
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
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>





export const ArticleFeatureExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  />
        <HeroArticle 
            image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            imageAltText="Alt text for the image"
            imageCopyright="HELP MUSICIANS, directed by Thomas Guthrie"
            title="Britain on Lockdown: How online videos have shaped the crisis"
            standfirst="As the BFI National Archive calls on the British public to help map the digital video response to coronavirus across the UK, our curators begin a regular new series highlighting the online videos that have made an impact during the lockdown period."
            category="Article category"
            categoryLink="#"
            type="Feature"
            date="28 April 2020"
            authors={[
                {
                    name: "Ros Cranston",
                    url: "#"
                },
                {
                    name: "William Fowler",
                    url: "#"
                },
                {
                    name: "Steve Foxon",
                    url: "#"
                },
                {
                    name: "Will Massa",
                    url: "#"
                },
                {
                    name: "Patrick Russell",
                    url: "#"
                },
                {
                    name: "Jez Stewart",
                    url: "#"
                },
                {
                    name: "James Taylor",
                    url: "#"
                }
            ]}
        />
        <Wrapper>           
            <MainContent>
                <Text>
                    <p>Today the BFI launches a public campaign, Britain on Lockdown, calling on the public to recommend those online videos that best represent how Britain has experienced the impact of coronavirus.</p>

                    <p>From Joe Wicks to Boris Johnson, and from films showing solidarity for NHS frontline workers or bringing local communities coming together to music videos and comedy parodies, not to mention public health videos about proper handwashing, charity campaign pieces and much more – online video has played a key role in our collective experience of the lockdown in a way that has never been experienced before.</p>

                    <p>Whether it’s to tell us about videos that have entertained, informed or inspired, or that have challenged, moved, outraged or simply made us smile, the BFI wants to hear from you. A simple submissions form allows you to share your recommendations.</p>

                    <p>The impact of these digitally created films – distributed across multiple platforms and in some cases shared with millions of viewers – has been phenomenal. TikTok alone is reporting its video collection of #coronavirus themed content has had a jaw-dropping 46.8bn views. The curatorial team at the BFI National Archive has already started mapping the digital video response to the coronavirus crisis. In the first of a regular series, curators here choose a selection of titles from early in the lockdown period that give a flavour of the breadth of filmmaking that landed on people’s screens as we all began to Stay Home, Protect the NHS and Save Lives.</p>
                </Text>
                
                <Headline 
                    level={2} 
                    text="PE with Joe – 3 April 2020"
                />
                <Oembed oembedObject={{
                    html: "\u003ciframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/vpqYxK6mmSU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />

                <ArticleKeywords
                    keywords={[
                        {
                            label: "Covid-19",
                            url: "#"
                        },
                        {
                            label: "BFI National Archive",
                            url: "#"
                        },
                        {
                            label: "Video",
                            url: "#"
                        }
                    ]}
                />
            </MainContent>
            <Sidebar>
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>

        <Wrapper>
            <MainContent>
                <FilterableArticles
                    limit={3}
                    includeHighlight={false}
                    internalTitle="Other things to explore"
                />

                <AdvertisingContainer>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>





export const ArticleRecommendsExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  />
        <HeroArticle 
            title="BFI Recommends: Carol"
            standfirst="The perfect adaptation: Todd Haynes’ exquisite film of Patricia Highsmith’s novel The Price of Salt is the latest in our daily series of recommendations, chosen by Emma Smart."
            category="BFI Recommends"
            categoryLink="#"
            type="Feature"
            date="1 May 2020"
            authors={[
                {
                    name: "Emma Smart",
                    url: "#"
                }
            ]}
        />
        <Wrapper>           
            <MainContent>
                <Text>
                    <p>My love affair with Carol began a long time ago, before the film was even made. A friend gave me a copy of Patricia Highsmith’s The Price of Salt (the book on which Carol is based) with a knowing smile and told me I might like it. She wasn’t wrong. I loved it: devouring it in one sitting and then immediately turning back to the first page to read it again. Highsmith’s writing is instinctually cinematic and I remember thinking all those years ago that this needed to be made into a film. I desperately wanted to see Carol and Therese’s love affair on the big screen, and I fervently hoped for the right creative team to come along and make my wish come true. Because Carol needed to be flawless as a film – my love for the book would accept nothing less…</p>

                    <p>Well, I needn’t have worried. With Todd Haynes at the helm and Cate Blanchett the perfect Carol (I’d always pictured Cate when I read the book!) how could it falter? Watching it is like seeing the pages of Highsmith’s novel come to life, more exquisitely than I could have imagined. It made me fall in love with the story and the characters all over again. And just like with the book, I revisit Carol as often as I can.</p>

                    <p><a href="https://www.bfi.org.uk/people/emma-smart">Emma Smart</a><br/>Head of Library &amp; Mediatheque</p>
                </Text>
                
                <FilmCardSingle 
                    image225x225="https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/carol-1920.jpg"
                    title="Carol"
                    type="Film"
                    director="Todd Haynes"
                    year="2014"
                    playerUrl="https://player.bfi.org.uk/rentals/film/watch-carol-2014-online"
                />
            </MainContent>
            <Sidebar>
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>

        <Wrapper>
            <MainContent>
                <FilterableArticles
                    limit={3}
                    includeHighlight={false}
                    internalTitle="Other things to explore"
                />

                <AdvertisingContainer>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>







export const ArticleVideoExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  />
        <HeroArticle 
            title="Video: BFI CEO Ben Roberts talks to Screen about navigating the ongoing COVID-19 crisis"
            standfirst="The perfect adaptation: Todd Haynes’ exquisite film of Patricia Highsmith’s novel The Price of Salt is the latest in our daily series of recommendations, chosen by Emma Smart."
            category="Screen talk"
            categoryLink="#"
            type="Video"
            date="1 May 2020"
        />
        <Wrapper>           
            <MainContent>
                <Oembed oembedObject={{
                    html: "\u003ciframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/jEwTINVl4xM?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />
                <Text>
                    <p>In his first major interview with film industry trade paper Screen International since becoming BFI Chief Executive, Ben Roberts talks to editor Matt Mueller about the measures the BFI is putting in place to support the UK screen industries during the COVID-19 crisis.</p>

                    <p>Roberts, who was only two weeks into the CEO role when the government lockdown was imposed, discusses the impact of the crisis on the BFI and the wider industry, revealing how the strategy for recovery is being worked up with partners across the screen sector.</p>
                </Text>
                
                <ArticleKeywords
                    keywords={[
                        {
                            label: "Covid-19",
                            url: "#"
                        },
                        {
                            label: "Video",
                            url: "#"
                        }
                    ]}
                />
            </MainContent>
            <Sidebar>
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>

        <Wrapper>
            <MainContent>
                <FilterableArticles
                    limit={3}
                    includeHighlight={false}
                    internalTitle="Other things to explore"
                />

                <AdvertisingContainer>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>







export const ArticleAnnouncementExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  />
        <HeroArticle 
            image1920x1080="https://www.bfi.org.uk/sites/bfi.org.uk/files/homepage/bfi-covid-19-support-for-uk-industry-1000x343.jpg"
            imageAltText="Alt text for the image"
            title="£2m BFI COVID-19 Production Continuation Fund now open"
            standfirst="National Lottery funding is now available for UK independent productions in serious financial need as a result of unavoidable interruption due to COVID-19."
            category="Announcements"
            categoryLink="#"
            type="Video"
            date="1 May 2020"
        />
        <Wrapper>           
            <MainContent>
                <Text>
                    <p>The BFI today opens the £2m BFI COVID-19 Production Continuation Fund, a temporary new fund for UK independent productions unavoidably interrupted as a direct result of the COVID-19 pandemic. National Lottery funding – up to £150,000 per project – is available for productions in critical financial need to help cover unexpected additional costs, aiming to ensure producers are in a position to restart when it is safe and practical to do so. The deadline for applications is Wednesday 27 May.</p>

                    <p>A number of independently financed UK films that were already filming or in late stage pre-production have incurred significant and unexpected costs in having to shut down as a result of the pandemic. The majority of these productions are, as a result, at serious risk of collapsing, as they are unlikely to find other sources of funding to cover these costs. This exceptional new National Lottery production fund is focused on ensuring productions can be stabilised, increasing their ability to resume production when social distancing guidance allows.</p>

                    <p>Ben Roberts, Chief Executive of the BFI, said:</p>

                    <Blockquote 
                        quote="We are focused on restarting the industry as quickly as possible, and central to that is ensuring we have a strong and vibrant independent film sector in the UK, which was under considerable pressure before the shutdown. This fund is part of that work, providing a vital lifeline to independent productions directly and significantly impacted by the lockdown. It aims to ensure the production companies, along with the creatives and crew they were working with, are in a position to restart when it is safe and appropriate to do so, and crucially, encouraging our talented workforce to remain in the sector." 
                        citation="Ben Roberts, Chief Executive of the BFI" 
                    />

                    <p>Applications are invited from independently financed films with a production budget of less than £8m, that are produced by a UK production company and are capable of qualifying as a “British film”, including UK qualifying co-productions. Productions can apply for up to £150,000, which can be exceeded in exceptional circumstances where critical need for a higher amount is demonstrated. Funding can only be applied to help cover identified COVID-19 related additional costs that cannot be covered from other sources (including from successful insurance or completion bond claims, Government supported COVID-19 schemes, or existing or new third party funders), and may not be used to reimburse funds advanced by existing funders. In the case of qualifying UK co-productions, such costs must relate to UK production elements for which the UK co-producer is responsible. All awards from the fund will be recoupable.</p>

                    <p>The BFI COVID-19 Production Continuation Fund mirrors the financial support already provided to the eight BFI funded features that were filming or in late stage pre-production when they were forced to stand down due to the COVID-19 crisis.</p>

                    <p>The fund is part of a package of support the BFI has rolled out to support individuals, organisations and businesses across the sector that have been most impacted by COVID-19. The BFI is also continuing to work closely with industry and Government to develop and implement a robust, sector-wide strategy for recovery. Out of its Screen Sector Task Force, a number of working groups are focused on key areas: inward investment; independent film; distribution and exhibition; and television and broadcasting.</p>
                </Text>
                
                <ArticleKeywords
                    keywords={[
                        {
                            label: "Covid-19",
                            url: "#"
                        },
                        {
                            label: "Production funding",
                            url: "#"
                        }
                    ]}
                />
            </MainContent>
            <Sidebar>
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>

        <Wrapper>
            <MainContent>
                <FilterableArticles
                    limit={3}
                    includeHighlight={false}
                    internalTitle="Other things to explore"
                />

                <AdvertisingContainer>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>






export const ArticleListExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  />
        <HeroArticle 
            title="Five things to watch this weekend – 1-3 May"
            standfirst="Japanese ghost stories, Brits abroad and a seven-hour epic – what are you watching this weekend?"
            category="What to watch"
            categoryLink="#"
            type="List"
            date="1 May 2020"
            authors={[
                {
                    name: "Emma Smart",
                    url: "#"
                }
            ]}
        />
        <Wrapper>           
            <MainContent>
                <FilmCardSingle
                    listNumber={1}
                    image225x225="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/assistant2.jpg?itok=4PvazePC"
                    title="The Assistant"
                    type="Film"
                    director="Kitty Green"
                    year="2019"
                    playerUrl="https://player.bfi.org.uk/rentals/film/watch-the-assistant-2019-online"
                />
                <Oembed oembedObject={{
                    html: "\u003ciframe width=\"600\" height=\"337\" src=\"https://www.youtube.com/embed/GQTKC4p8dWY?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />
                <Text>
                    <p>After a festival run taking in Telluride, Sundance and Berlin, this very of-the-moment fiction debut from documentary director Kitty Green had its cinema release abandoned amid the coronavirus crisis but now arrives as a digital release across several platforms, including BFI Player. It’s being touted as a defining film of the #MeToo era, particularly relating to the downfall of Harvey Weinstein, tackling as it does the topic of an abusive film mogul and the complicit silence that entrenches as habit among his staff. Ozark’s Julia Garner plays the young new assistant in the man’s New York office, slowly uncovering a breadcrumb trail of abuses and their toxic spread into the office climate. Green’s film is distinctively low on dialogue, instead foregrounding the low, corporate hubbub of office life and the offhand remarks that rise above its air-conditioned fug.</p>
                </Text>
                


                <FilmCardSingle
                    listNumber={2}
                    image225x225="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/kwaidan1.jpg?itok=cls1MQ_E"
                    title="Kwaidan"
                    type="Film"
                    director="Masaki Kobayashi"
                    year="1946"
                    filmLink="#"
                />
                <Oembed oembedObject={{
                    html: "\u003ciframe width=\"600\" height=\"337\" src=\"https://www.youtube.com/embed/YadApPG8W7Q?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />
                <Text>
                    <p><strong>Where’s it on?</strong> Blu-ray</p>
                    <p>High up in the pantheon of horror anthology films is this epic compendium of Japanese ghost stories – a rare scary movie that’s as visually resplendent as it is unnerving. On a winning streak following his mammoth Human Condition trilogy (1959-61) and samurai suspenser Harakiri (1962), director Masaki Kobayashi turned to the 19th-century writings of Lafcadio Hearn, the Greek-born collector of Japanese folk tales. Over three hours long in its complete version (one section was chopped out for its initial UK release), Kwaidan comprises four fables in which woebegotten swordsmen, woodcutters and a temple musician take their turns in meeting imaginatively chilling fates. Hand-painted sets and anti-realistic backdrops give Kobayashi’s film a storybook timelessness, and the colours pop in this new Blu-ray collectors’ edition from Eureka, which also includes a 100-page book. You’ll find the film on BFI Player too.</p>
                </Text>
                
                

                <FilmCardSingle
                    listNumber={3}
                    image225x225="https://www.bfi.org.uk/films-tv-people/sites/bfi.org.uk.films-tv-people/files/styles/gallery_full/public/image/room-with-a-view-bfi-00m-nuz.jpg?itok=XDugDJoM"
                    title="A Room with a View"
                    type="Film"
                    director="James Ivory"
                    year="1986"
                    filmLink="#"
                />
                <Text>
                    <p><strong>Where’s it on?</strong> Film4, Sunday, 4.40pm</p>
                    <p>Film4 has a Sunday teatime slot for this always welcome offering from the Merchant Ivory stable; the film that helped bring household familiarity to their brand of well-upholstered period dramas. The first in their trio of E.M. Forster adaptations, A Room with a View puts us in company with the likes of Judi Dench, Helena Bonham Carter, Maggie Smith and Denholm Elliott playing Edwardian Brits on holiday in Florence. The headiness of the Mediterranean mood has a destabilising effect, and Bonham Carter’s English rose Lucy Honeychurch will have a scandalous clinch with Julian Sands’ dashing philosophiser before a return to Surrey and engagement to Daniel Day-Lewis’s priggish Cecil Vyse. Despite the Merchant Ivory reputation for starch and propriety, this one delivers plenty by way of sensual pleasures. It’s one that anyone who loved the much later, Ivory-scripted Italian romance Call Me by Your Name (2017) should circle back to.</p>
                </Text>


                <FilmCardSingle
                    listNumber={4}
                    image225x225="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/tristana1-under2MB.jpg?itok=AjP4Dsas"
                    title="Tristana"
                    type="Film"
                    director="Luis Buñuel"
                    year="1970"
                    playerUrl="https://player.bfi.org.uk/subscription/film/watch-tristana-1970-online"
                />
                <Text>
                    <p><strong>Where’s it on?</strong> Film4, Sunday, 4.40pm</p>
                    <p>Three of Luis Buñuel’s great, late films have been added for BFI Player subscribers this week. Belle de jour (1967) is the one with Catherine Deneuve as a well-heeled Parisian who seeks excitement by taking secret work in a brothel, while The Discreet Charm of the Bourgeoisie (1972) is his Oscar-winning satire about a group of chattering-class friends who are repeatedly, surreally frustrated in their efforts to dine. Coming between them, Tristana is less famous and perhaps the odd one out in being one of the only films this Spaniard ever made in Spain, but it’s no less essential and just as unmistakably Buñuelian. Set in 1930s Toledo, it brings together the stars of those two sandwiching films – Deneuve and Fernando Rey – for a typically teasing fable about a lascivious nobleman who is undone by his desire for the young woman left in his charge. </p>
                </Text>


                <FilmCardSingle
                    listNumber={5}
                    image225x225="https://www.bfi.org.uk/films-tv-people/sites/bfi.org.uk.films-tv-people/files/styles/gallery_full/public/image/satanatango.jpg?itok=jJ_1dlo3"
                    title="Sátántangó"
                    type="Film"
                    director="Béla Tarr"
                    year="1994"
                    filmLink="https://www.bfi.org.uk/films-tv-people/4ce2b7d2993a2"
                />
                <Oembed oembedObject={{
                    html: "\u003ciframe width=\"600\" height=\"337\" src=\"https://www.youtube.com/embed/UuyznqAILAM?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />
                <Text>
                    <p>This is the week that sees Béla Tarr’s legendary Hungarian epic Sátántangó come in out of the cold. Finally released in a restored version on Blu-ray and to stream at Curzon Home Cinema, it comes down to us wrapped in an aura of untouchability. Voted the 35th best film ever made in the most recent Sight &amp; Sound critics’ poll, yet undeniably forbidding at seven hours long, it’s one every cinephile should make time for. If descriptions of a plot set in a collapsed collective farm in a godforsaken village sound crushingly bleak then they’ve done their work, but the majesty of Sátántangó is in the hallucinatory long-take style and mordant humour with which Tarr evokes this world and its inhabitants. It might sound perverse to pitch this as escapism, but the mud, despair and lowering skies of Sátántangó offer total atmospheric immersion like little else.</p>
                </Text>
            </MainContent>
            <Sidebar>
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>

        <Wrapper>
            <MainContent>
                <FilterableArticles
                    limit={3}
                    includeHighlight={false}
                    internalTitle="Other things to explore"
                />

                <AdvertisingContainer>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>


export const ArticleSightAndSoundExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  />
        <HeroArticle 
            image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            imageAltText="Alt text for the image"
            imageCopyright="HELP MUSICIANS, directed by Thomas Guthrie"
            title="Britain on Lockdown: How online videos have shaped the crisis"
            standfirst="As the BFI National Archive calls on the British public to help map the digital video response to coronavirus across the UK, our curators begin a regular new series highlighting the online videos that have made an impact during the lockdown period."
            category="Article category"
            categoryLink="#"
            type="Feature"
            date="28 April 2020"
            brand="sight-and-sound"
            authors={[
                {
                    name: "Ros Cranston",
                    url: "#"
                },
                {
                    name: "William Fowler",
                    url: "#"
                },
                {
                    name: "Steve Foxon",
                    url: "#"
                },
                {
                    name: "Will Massa",
                    url: "#"
                },
                {
                    name: "Patrick Russell",
                    url: "#"
                },
                {
                    name: "Jez Stewart",
                    url: "#"
                },
                {
                    name: "James Taylor",
                    url: "#"
                }
            ]}
        />
        <Wrapper>           
            <MainContent>
                <Text>
                    <p>Today the BFI launches a public campaign, Britain on Lockdown, calling on the public to recommend those online videos that best represent how Britain has experienced the impact of coronavirus.</p>

                    <p>From Joe Wicks to Boris Johnson, and from films showing solidarity for NHS frontline workers or bringing local communities coming together to music videos and comedy parodies, not to mention public health videos about proper handwashing, charity campaign pieces and much more – online video has played a key role in our collective experience of the lockdown in a way that has never been experienced before.</p>

                    <p>Whether it’s to tell us about videos that have entertained, informed or inspired, or that have challenged, moved, outraged or simply made us smile, the BFI wants to hear from you. A simple submissions form allows you to share your recommendations.</p>

                    <p>The impact of these digitally created films – distributed across multiple platforms and in some cases shared with millions of viewers – has been phenomenal. TikTok alone is reporting its video collection of #coronavirus themed content has had a jaw-dropping 46.8bn views. The curatorial team at the BFI National Archive has already started mapping the digital video response to the coronavirus crisis. In the first of a regular series, curators here choose a selection of titles from early in the lockdown period that give a flavour of the breadth of filmmaking that landed on people’s screens as we all began to Stay Home, Protect the NHS and Save Lives.</p>
                </Text>
                
                <Headline 
                    level={2} 
                    text="PE with Joe – 3 April 2020"
                />
                <Oembed oembedObject={{
                    html: "\u003ciframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/vpqYxK6mmSU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />

                <ArticleKeywords
                    keywords={[
                        {
                            label: "Covid-19",
                            url: "#"
                        },
                        {
                            label: "BFI National Archive",
                            url: "#"
                        },
                        {
                            label: "Video",
                            url: "#"
                        }
                    ]}
                />
            </MainContent>
            <Sidebar>
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>

        <Wrapper>
            <MainContent>
                <FilterableArticles
                    limit={3}
                    includeHighlight={false}
                    internalTitle="Other things to explore"
                />

                <AdvertisingContainer>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>




export const ArticleSightAndSoundExampleNoImage = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  />
        <HeroArticle 
            title="Britain on Lockdown: How online videos have shaped the crisis"
            standfirst="As the BFI National Archive calls on the British public to help map the digital video response to coronavirus across the UK, our curators begin a regular new series highlighting the online videos that have made an impact during the lockdown period."
            category="Article category"
            categoryLink="#"
            type="Feature"
            date="28 April 2020"
            brand="sight-and-sound"
            authors={[
                {
                    name: "Ros Cranston",
                    url: "#"
                },
                {
                    name: "William Fowler",
                    url: "#"
                },
                {
                    name: "Steve Foxon",
                    url: "#"
                },
                {
                    name: "Will Massa",
                    url: "#"
                },
                {
                    name: "Patrick Russell",
                    url: "#"
                },
                {
                    name: "Jez Stewart",
                    url: "#"
                },
                {
                    name: "James Taylor",
                    url: "#"
                }
            ]}
        />
        <Wrapper>           
            <MainContent>
                <Text>
                    <p>Today the BFI launches a public campaign, Britain on Lockdown, calling on the public to recommend those online videos that best represent how Britain has experienced the impact of coronavirus.</p>

                    <p>From Joe Wicks to Boris Johnson, and from films showing solidarity for NHS frontline workers or bringing local communities coming together to music videos and comedy parodies, not to mention public health videos about proper handwashing, charity campaign pieces and much more – online video has played a key role in our collective experience of the lockdown in a way that has never been experienced before.</p>

                    <p>Whether it’s to tell us about videos that have entertained, informed or inspired, or that have challenged, moved, outraged or simply made us smile, the BFI wants to hear from you. A simple submissions form allows you to share your recommendations.</p>

                    <p>The impact of these digitally created films – distributed across multiple platforms and in some cases shared with millions of viewers – has been phenomenal. TikTok alone is reporting its video collection of #coronavirus themed content has had a jaw-dropping 46.8bn views. The curatorial team at the BFI National Archive has already started mapping the digital video response to the coronavirus crisis. In the first of a regular series, curators here choose a selection of titles from early in the lockdown period that give a flavour of the breadth of filmmaking that landed on people’s screens as we all began to Stay Home, Protect the NHS and Save Lives.</p>
                </Text>
                
                <Headline 
                    level={2} 
                    text="PE with Joe – 3 April 2020"
                />
                <Oembed oembedObject={{
                    html: "\u003ciframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/vpqYxK6mmSU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
                }} />

                <ArticleKeywords
                    keywords={[
                        {
                            label: "Covid-19",
                            url: "#"
                        },
                        {
                            label: "BFI National Archive",
                            url: "#"
                        },
                        {
                            label: "Video",
                            url: "#"
                        }
                    ]}
                />
            </MainContent>
            <Sidebar>
                <AdvertisingContainer>
                    <div style={{width: "300px", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>

        <Wrapper>
            <MainContent>
                <FilterableArticles
                    limit={3}
                    includeHighlight={false}
                    internalTitle="Other things to explore"
                />

                <AdvertisingContainer>
                    <div style={{width: "1020px", height: "400px", background: "grey"}}></div>
                </AdvertisingContainer>
            </MainContent>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>







export const FilmPage = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}  overlay={true} />
        <Hero 
            image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/2020-05/image.jpeg"
        >
            <Headline level={0} text="Raging Bull"/>
        </Hero>
        <Wrapper>
            <Actions>
                <Button to="#">Buy tickets</Button>
                <PlayButton to="#">Watch on BFI Player</PlayButton>
            </Actions>
        </Wrapper>
        <Wrapper>           
            <MainContent>
                <LeadParagraph text="Starring Robert De Niro as the middleweight boxer Jake La Motta, Scorsese’s biopic is widely acknowledged as one of the greatest films of the 1980s." />
                <Text>
                    <p>“Raging Bull is the most painful and heart-rending portrait of jealousy in the cinema – an Othello for our times. Boxing is the arena, not the subject.”<br />Roger Ebert, The Great Movies, 2002</p>
                    <p>Scorsese’s biographical portrait of the 1940s boxing champion Jake La Motta is a study of seething male aggression to rank alongside his 1976 film Taxi Driver. Adapted from La Motta’s memoirs by Paul Schrader and Mardik Martin, the film opens in the early 1960s with an overweight La Motta practising his post-boxing cabaret routine. Through flashbacks we witness the dramas of his time in the ring, his abusive marriages, and his turbulent relationship with his brother and manager Joey (Joe Pesci).</p>
                    <p>The sequences between the ropes are extraordinarily immediate, with Michael Chapman’s mobile black and white cinematography closely attending every blow, and Thelma Schoonmaker’s editing brutally precise and dynamic. Robert De Niro famously gained weight to play the out of shape La Motta of later years.</p>
                    <p>Boxing drama Body and Soul (1947) and Stanley Kubrick’s early documentary Day of the Fight (1951) are among the films that influenced Raging Bull.</p>
                </Text>
                
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
                            label: "Produced by",
                            value: "Irwin Winkler, Robert Chartoff, Peter Savage"
                        },
                        {
                            label: "Written by",
                            value: "Paul Schrader, Mardik Martin"
                        },
                        {
                            label: "Featuring",
                            value: "Robert De Niro, Joe Pesci, Cathy Moriarty"
                        },
                    ]}
                />
                <AdvertisingContainer>
                    <div style={{width: "100%", height: "250px", background: "grey"}}></div>
                </AdvertisingContainer>
            </Sidebar>
        </Wrapper>
        <Wrapper>
            <MainContent>  
                <ArticleGrid articles={
                    [{
                        title: "Joe Pesci: seven essential films",
                        image480x270: "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/api_4x3_thumb/public/news/raging-bull-1980-004-robert-de-niro-joe-pesci-bfi-00m-pbh-1000x750.jpg?itok=dc0VDnB3",
                        imageAltText: "Example image",
                        standfirst: "From Home Alone to GoodFellas: seven of the best films from an actor who pops out of the screen with menace and charisma.",
                        author: "Brogan Morris",
                        date: "9 February 2017",
                        url: "https://www.bfi.org.uk/news-opinion/news-bfi/lists/joe-pesci-seven-essential-films",
                        uuid: "06347a64-5abd-59de-a6b9-be0d4a9e31e1",
                        category: "News"
                    },
                    {
                        title: "Martin Scorsese: a career in 10 songs",
                        image480x270: "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/api_4x3_thumb/public/news/casino-1995-003-robert-de-niro-casino-00m-y3h-1000x750.jpg?itok=oTNU6QY4",
                        imageAltText: "Example image",
                        standfirst: "Songs in the key of Scorsese... how Marty revolutionised movie soundtracks.",
                        author: "Brogan Morris",
                        date: "3 January 2017",
                        url: "https://www.bfi.org.uk/greatest-films-all-time",
                        uuid: "4d1c842b-4d15-558b-82a4-5cb70546d6f3",
                        category: "What to watch"
                    },
                    {
                        title: "10 great boxing films",
                        image480x270: "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/api_16x9_thumb/public/news/raging-bull-1980-001-robert-de-niro-bxing-00m-rg2-1920x1080.jpg?itok=zOLbAs1k",
                        imageAltText: "Example image",
                        standfirst: "Get in the ring with these 10 knockout boxing movies, as Sylvester Stallone returns to the screen with Creed, the latest instalment of the Rocky saga.",
                        author: "Christina Newland",
                        date: "22 November 2019",
                        url: "https://www.bfi.org.uk/news-opinion/sight-sound-magazine/polls-surveys/stanley-kubrick-cinephiles",
                        uuid: "d1a4a7ac-44fa-56b3-9522-b865a49080c2",
                        category: "10 great"
                    }]
                } />

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
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>






export const sightAndSoundPageExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} />
        <Wrapper>
            <MainContent>
                <Breadcrumbs 
                    breadcrumbs={[
                        {
                            title: "Watch & Discover",
                            url: "#"
                        },
                        {
                            title: "Sight & Sound",
                            url: "#"
                        },
                        {
                            title: "Sight & Sound: the May 2020 issue"
                        }
                    ]} 
                />
                <Headline 
                    level={1} 
                    text="Sight &amp; Sound: the May 2020 issue"
                />
                <ImageSponsorLinks 
                    images={[{
                        url: "https://www.bfi.org.uk/sites/bfi.org.uk/files/styles/16x9_small/public/sight-and-sound-logo-280x69.png?itok=AEegRSbk",
                        alt: "Sight & Sound",
                        link: "#"
                    }]}
                />
                <LeadParagraph 
                    text="Break-out time: remembering Mathieu Kassovitz’s explosive debut La Haine, the film that turned French urban bust to boom, on its 25th anniversary."
                />
                <Text> 
                    <p>Plus contemporary banlieu tensions in Ladj Ly’s Les Miserables, Damien Chazelle’s Netflix jazz series The Eddy, Mark Cousins’s new history of female filmmaking and David Thomson on acting’s wrong turn.</p>
                    
                    <p>In print and digital from 6 April 2020. Buy a print issue, get the digital edition or subscribe.</p>
                </Text>
                
            </MainContent>
            <Sidebar>
                <SidebarPageLinks links={pageLinksData} blockTitle="Related pages" />
            </Sidebar>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>








export const everyComponent = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} />
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

                <Text> 
                    <p>So you two dig up, dig up dinosaurs? Hey, you know how I&apos;m, like, always trying to save the planet? Here&apos;s my chance. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
                    <p>Yes, Yes, without the oops! <a href="http://google.com</MainContent>">Yes, Yes, without the oops!</a> Drive us out of here!</p>
                </Text>
                <Blockquote 
                    quote="Yeah, but your scientists were so preoccupied with whether or not they could, they didn&apos;t stop to think if they should." 
                    citation="Ian Malcolm"
                />
                <Text>
                    <p>Fellini’s epic La dolce vita stands as a towering achievement of 1960s cinema. Set in Rome during the height of the ‘Hollywood on the Tiber’ era, the episodic narrative follows jaded journalist Marcello Rubini (Mastroianni) on the trail of gossip on VIPs, including Swedish-American film star Sylvia Rank (Ekberg).</p> 
                    <p>The film caused a sensation on its initial release, angering censors and polarising opinion among critics and audiences, but is now rightly considered a masterpiece that’s had a profound influence on popular culture.</p>
                </Text>
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
                <Text>
                    <p>Fellini’s epic La dolce vita stands as a towering achievement of 1960s cinema. Set in Rome during the height of the ‘Hollywood on the Tiber’ era, the episodic narrative follows jaded journalist Marcello Rubini (Mastroianni) on the trail of gossip on VIPs, including Swedish-American film star Sylvia Rank (Ekberg).</p>
                </Text>
                <DownloadableFiles
                    files={{
                        title: "Young Audiences Content Fund production application guidelines",
                        type: "PDF",
                        url: "https://www.bfi.org.uk/sites/bfi.org.uk/files/downloads/bfi-young-audiences-content-fund-production-application-guidelines-2019-10.pdf",
                        size: "1.2 MB"
                    }}
                />
                <Text>
                    <p>The film caused a sensation on its initial release, angering censors and polarising opinion among critics and audiences, but is now rightly considered a masterpiece that’s had a profound influence on popular culture.</p>
                </Text>
                
                <CallToAction linkURL="/" linkText="Apply for funding" />

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
                <Text>
                    <p>Fellini’s epic La dolce vita stands as a towering achievement of 1960s cinema. Set in Rome during the height of the ‘Hollywood on the Tiber’ era, the episodic narrative follows jaded journalist Marcello Rubini (Mastroianni) on the trail of gossip on VIPs, including Swedish-American film star Sylvia Rank (Ekberg).</p> 
                    <p>The film caused a sensation on its initial release, angering censors and polarising opinion among critics and audiences, but is now rightly considered a masterpiece that’s had a profound influence on popular culture.</p>
                </Text>
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
                    pageWithSideBar={true}
                    colorScheme={0}
                    headline="Watch BFI-picked contemporary and classic films in cinema"
                    description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
                    image="http://placehold.it/600x600"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                    secondImage="http://placehold.it/150x40"
                    secondImageAltText="Test image"
                />
                <ArticleGrid pageWithSideBar={true} articles={demoArticles.slice(0,2)} />
                <Headline 
                    level={2} 
                    text="A promo banner with a video!"
                />
                <PromoBanner 
                    pageWithSideBar={true}
                    colorScheme={2}
                    reversed={true}
                    headline="Watch BFI-picked contemporary and classic films in cinema"
                    description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
                    oembedObject={{ html: "\u003ciframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/vpqYxK6mmSU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"}}
                />
                <NewsletterSignUp />
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
                <SidebarFilmLinks 
                    blockTitle="Watch these films"
                    films={[
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
                    ]} 
                />
            </Sidebar>
        </Wrapper>
        <Footer
            menus={footerMenus}
            copyrightLinks={[
                {
                    title: "Cookies & privacy",
                    url: "#"
                },
                {
                    title: "Terms & conditions",
                    url: "#"
                },
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Help & FAQs",
                    url: "#"
                }
            ]}
            copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
        />
    </>
