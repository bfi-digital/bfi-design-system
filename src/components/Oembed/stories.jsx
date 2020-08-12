import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Oembed } from "./index"

export default {
    title: "4 Components/All/Oembed",
    decorators: [withA11y]
}

const vimeoExampleData = [
    {
        type: "video",
        version: "1.0",
        provider_name: "Vimeo",
        provider_url: "https://vimeo.com/",
        title: "Film is Fragile - Film needs your help! | BFI Trailer",
        author_name: "BFI",
        author_url: "https://vimeo.com/bfi",
        is_plus: "0",
        account_type: "live_premium",
        html: "<iframe src=\"https://player.vimeo.com/video/143029218?app_id=122963\" width=\"480\" height=\"270\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen title=\"Film is Fragile - Film needs your help! | BFI Trailer\"></iframe>",
        width: 480,
        height: 270,
        duration: 90,
        description: "Help protect our nation's film collection. Donate now: https://www.bfi.org.uk/filmisfragile/\n\nThe BFI looks after one of the most important collections of film in the world - films from as early as 1895 to the latest British features just released in cinemas. But film is fragile. And restoring and preserving it is expensive.\nAs a charity we rely on the generosity and support of film-lovers such as you to continue this culturally important work.\n\nAny donation, large or small, makes a huge difference, and if you give today every donation we receive up to \u00a3400,000 will be matched by a generous supporter \u2013 so your gift will be worth twice as much!\n\nTrailer directed by Carl Addy\nProduced by The Mill +\nWith support from the Mohammed S. Farsi Foundation",
        thumbnail_url: "https://i.vimeocdn.com/video/541425212_295x166.webp",
        thumbnail_width: 295,
        thumbnail_height: 166,
        thumbnail_url_with_play_button: "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F541425212_295x166.webp&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
        upload_date: "2015-10-20 12:12:31",
        video_id: 143029218,
        uri: "/videos/143029218"
    }
]

const youtubeExampleData = [
    {
        author_url: "https://www.youtube.com/user/BFIfilms",
        title: "Misbehaviour director Phillipa Lowthorpe and producer Suzanne Mackie | BFI Q\u0026A",
        height: 270,
        provider_url: "https://www.youtube.com/",
        type: "video",
        version: "1.0",
        thumbnail_height: 360,
        thumbnail_url: "https://i.ytimg.com/vi/vpqYxK6mmSU/hqdefault.jpg",
        thumbnail_width: 480,
        provider_name: "YouTube",
        width: 480,
        author_name: "BFI",
        html: "\u003ciframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/vpqYxK6mmSU?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
    }
]

export const vimeo = () =>
    <Oembed isVideo oembedObject={vimeoExampleData[0]} />

export const youtube = () =>
    <Oembed isVideo oembedObject={youtubeExampleData[0]} />