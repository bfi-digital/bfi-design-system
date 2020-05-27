import React from "react"
import { Wrapper, MainContent } from "./index"

import navItems, { quickLinksData } from "../Header/data"
import {default as crumbs} from "../Breadcrumbs/data"
import footerMenus from "../Footer/data"
import demoArticles from "../ArticleGrid/data"

import { AdvertisingContainer } from "../AdvertisingContainer"
import { ArticleGrid } from "../ArticleGrid"
import { Breadcrumbs } from "../Breadcrumbs"
import { Blockquote } from "../Blockquote"
import { Button } from "../Button"
import { CallToAction } from "../CallToAction"
import { Divider } from "../Divider"
import { ErrorPage } from "../ErrorPage"
import { DownloadableFiles } from "../DownloadableFiles"
import { FilmGrid } from "../FilmGrid"
import { FilmShowing } from "../FilmShowing"
// import { FilmShowingGrid } from "../FilmShowingGrid"
import { FilterableArticles } from "../FilterableArticles"
import { FilterLinks } from "../FilterLinks"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Headline } from "../Headline"
// import { Hero } from "../Hero"
import { HeroLanding } from "../HeroLanding"
// import { Highlights } from "../Highlights"
import { Image } from "../Image"
import { ImageGallery } from "../ImageGallery"
import { NewsletterSignUp } from "../NewsletterSignUp"
import { LeadParagraph } from "../LeadParagraph"
import { Oembed } from "../Oembed"
import { PageLinks } from "../PageLinks"
import { PromoBanner } from "../PromoBanner"
// import { QuickFacts } from "../QuickFacts"
// import { SidebarPageLinks } from "../SidebarPageLinks"
// import { StepByStep } from "../StepByStep"
import { Text } from "../Text"

import demoFilms from "../FilmGrid/data"
// import demoShowings from "../Highlights/data"

export default {
    title: "1 Page Examples/Page Full Width"
}

export const discoveryPage = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} overlay={true} />
        <HeroLanding
            withHeader
            image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            headline="Discover the world of cinema with the BFI"
        />
        <Wrapper>
            <MainContent>
                <PromoBanner 
                    colorScheme={1}
                    headline="Become a BFI member"
                    description="Get priority booking and enjoy special events for £37 a year."
                    callToActionTitle="Join today"
                    callToActionUrl="#"
                />
                {/* <Highlights
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
                /> */}

                <Headline 
                    level={2} 
                    text="Now showing"
                />
                <FilmGrid films={demoFilms} />

                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={0}
                    headline="Watch the greatest global cinema online on BFI Player"
                    description="From £2.50 per film, or £4.99 a month."
                    image="http://placehold.it/600x350"
                    callToActionTitle="Try 14 days free now"
                    callToActionUrl="#"
                    reversed={true}
                />
                
                <Divider istransparent={true} />

                <Headline 
                    level={2} 
                    text="What to watch"
                />
                <PageLinks withImages={true} links={[
                    {
                        title: "100 great films streaming on Netflix and Amazon Prime",
                        url: "#",
                        callToAction: "Read this list",
                        image480x320: "http://placehold.it/480x270"
                    },
                    {
                        title: "Production Fund",
                        url: "#",
                        callToAction: "Read this list",
                        image480x320: "http://placehold.it/480x270"
                    },
                    {
                        title: "Production Fund",
                        url: "#",
                        callToAction: "Read this list",
                        image480x320: "http://placehold.it/480x270"
                    }
                ]} />
                <CallToAction linkText="See more lists" linkURL="/" center={true} />
                
                <Divider istransparent={true} />

                <Headline 
                    level={2} 
                    text="News &amp; Articles"
                />
                <FilterLinks
                    links={[
                        {
                            url: "/",
                            label: "All"
                        },
                        {
                            url: "/",
                            label: "Review"
                        },
                        {
                            url: "/",
                            label: "Video"
                        },
                        {
                            url: "/",
                            label: "Opinion"
                        },
                        {
                            url: "/",
                            label: "Recommendations"
                        },
                        {
                            url: "/",
                            label: "Long Read"
                        },
                        {
                            url: "/",
                            label: "Interviews"
                        }
                    ]}
                />

                <FilterableArticles
                    limit={7}
                    parameter="category"
                    internalLink="#"
                />
                
                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={1}
                    headline="Sight & Sound"
                    description="Subscribe today - in print and/ or digital - and discover the world’s best cinema."
                    image="http://placehold.it/600x350"
                    callToActionTitle="Subscribe now"
                    callToActionUrl="#"
                />
                
                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={1}
                    headline="National archive"
                    description="National archive"
                    image="http://placehold.it/600x350"
                    callToActionTitle="Read more"
                    callToActionUrl="#"
                    reversed={true}
                />
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






export const industryPage = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} overlay={true} />
        <HeroLanding
            withHeader
            image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/1410/500/1/2020-03/industry.jpg"
            headline="We support filmmakers and champion films that push boundaries"
        />
        <Wrapper>
            <MainContent>
                <PromoBanner 
                    colorScheme={1}
                    headline="Get funding and support"
                    description="At BFI, we champion films that push boundaries. We’re passionate about discovering unfamiliar voices. We support filmmakers – from first features, to world-class shorts."
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                />
                <PageLinks links={[
                    {
                        title: "Progress my career and grow my business",
                        url: "#",
                        description: "If you&apos;re an emerging filmmaker, apply for funding to build skills and experience to stand out in the industry.",
                        callToAction: "Explore funding options"
                    },
                    {
                        title: "Create film, TV, or new formats of storytelling",
                        url: "#",
                        description: "If you&apos;re an adventurous storyteller, we can help you with funding to create your film, tv or emerging media like VR or AR.",
                        callToAction: "Explore funding options"
                    },
                    {
                        title: "Bring great films to a wider audience",
                        url: "#",
                        description: "We want to help film exhibitors and distributors show bold films to diverse UK audiences.",
                        callToAction: "Explore funding options"
                    }
                ]} />

                <Headline level={3} text="Previously awarded funds" />
                <Text><p>Search the funding awards for films, projects and organisations made by the BFI since April 2011.</p></Text>
                <CallToAction linkText="See previously awarded funds" linkURL="/" />
                
                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={2}
                    headline="Applying for tax relief & British Certification"
                    description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    image="http://placehold.it/600x350"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                    reversed={true}
                />

                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={2}
                    headline="Licensing or screening a BFI film"
                    description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    image="http://placehold.it/600x350"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                />
                
                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={2}
                    headline="Understanding Film Industry with Statistics & insights"
                    description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    image="http://placehold.it/600x350"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                    reversed={true}
                />

                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={2}
                    headline="Film Audience Network"
                    description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    image="http://placehold.it/600x350"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                />

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



export const educationPage = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} overlay={true} />
        <HeroLanding
            withHeader
            image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/1440/670/1/2020-03/education.jpg"
            headline="Learn, teach and research about films, through films"
        />
        <Wrapper>
            <MainContent>
                <Headline
                    level={2}
                    text="Resources and opportunities"
                />
                <PageLinks links={[
                    {
                        title: "Opportunities for young creatives",
                        url: "#",
                        description: "Aged 16-25? If you are wondering where to get start with filmmaking or explore a career in film, we have a range of opportunities, workshops and courses for you.",
                        callToAction: "Find out more"
                    },
                    {
                        title: "Courses, conferences and resources for teacher",
                        url: "#",
                        description: "We have a wealth of knowledge and tools to help you introduce students to specialist, independent and archive films for teaching with or about film.",
                        callToAction: "Find out more"
                    },
                    {
                        title: "Make the best use of our Reuben Library",
                        url: "#",
                        description: "Access national archive, a huge collection of books, journals and digitised material about films, television and moving images through our Reuben Lirary at Southbank.",
                        callToAction: "Find out more"
                    }
                ]} />

                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={2}
                    headline="Events & activities for families at the BFI Southbank"
                    description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    image="http://placehold.it/600x350"
                    callToActionTitle="Browse family programme"
                    callToActionUrl="#"
                />

                <Divider istransparent={true} />

                <PromoBanner 
                    colorScheme={2}
                    headline="Meet our team"
                    description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    image="http://placehold.it/600x350"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                    reversed={true}
                />

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







export const serviceListPageExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}/>
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






export const articlePostListPageExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}/>
        <Wrapper>
            <MainContent>
                <Headline 
                    level={1} 
                    text="News &amp; Articles"
                />

                <FilterableArticles
                    parameter="category"
                    filters={[
                        {
                            value: "review",
                            label: "Review"
                        },
                        {
                            value: "video",
                            label: "Video"
                        },
                        {
                            value: "opinion",
                            label: "Opinion"
                        },
                        {
                            value: "recommendations",
                            label: "Recommendations"
                        },
                        {
                            value: "long-read",
                            label: "Long Read"
                        },
                        {
                            value: "interviews",
                            label: "Interviews"
                        }
                    ]}
                />
                
                <Headline 
                    level={3} 
                    text="Promoted links from around the web"
                />
                <AdvertisingContainer withCaption={false}>
                    <div style={{width: "100%", height: "400px", background: "grey"}}></div>
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





export const everyComponent = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}/>
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
                    <p>So you two dig up, dig up dinosaurs? Hey, you know how I&apos;m, like, always trying to save the planet? Here&quot;s my chance. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
                    <p>Yes, Yes, without the oops! <a href="http://google.com</MainContent>">Yes, Yes, without the oops!</a> Drive us out of here!</p>
                </Text>
                <Blockquote 
                    quote="Yeah, but your scientists were so preoccupied with whether or not they could, they did&apos;t stop to think if they should." 
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
                    },
                    {
                        title: "Something Fund",
                        url: "#",
                        description: "We welcome production applications from new and established filmmakers.",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    }
                ]} />
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
                <PageLinks links={[
                    {
                        title: "Development fund",
                        description: "We welcome development applications from new and established filmmakers.",
                        url: "#",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    }
                ]} />


                <Headline 
                    level={2} 
                    text="Page links with iamges"
                />
                <PageLinks withImages={true} links={[
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
                    },
                    {
                        title: "Something Fund",
                        url: "#",
                        description: "We welcome production applications from new and established filmmakers.",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    },
                    {
                        title: "Something Fund",
                        url: "#",
                        description: "We welcome production applications from new and established filmmakers.",
                        callToAction: "Apply to this fund",
                        image480x320: "http://placehold.it/480x270"
                    }
                ]} />
                <PageLinks withImages={true} links={[
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
                <PageLinks withImages={true} links={[
                    {
                        title: "Development fund",
                        description: "We welcome development applications from new and established filmmakers.",
                        url: "#",
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
                    headline="Enjoy screenings and special events as a member"
                    description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
                    image="http://placehold.it/600x600"
                    callToActionTitle="Find out more"
                    callToActionUrl="#"
                    secondImage="http://placehold.it/150x40"
                    secondImageAltText="Test image"
                />
                <ArticleGrid articles={demoArticles} />

                <Headline 
                    level={2} 
                    text="A promo banner with a video!"
                />
                <PromoBanner 
                    colorScheme={2}
                    reversed={true}
                    headline="Watch BFI-picked contemporary and classic films in cinema"
                    description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
                    oembedObject={{ html: "\u003ciframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/vpqYxK6mmSU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"}}
                />
                <NewsletterSignUp />
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

export const errorPageExample = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData}/>
        <Wrapper>
            <ErrorPage 
                error={404}
            />
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
