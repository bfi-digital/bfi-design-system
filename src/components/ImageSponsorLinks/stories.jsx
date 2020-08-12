import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ImageSponsorLinks } from "./index"

export default {
    title: "4 Components/All/Image Sponsor Links",
    decorators: [withA11y]
}

const demoData = [
    {
        url: "https://ugc.futurelearn.com/uploads/images/92/51/925182cd-662d-41c9-91d4-843a1f4bc0b9.svg",
        alt: "Example image",
        link: "http://bfi.org.uk"
    },
    {
        url: "https://www.bfi.org.uk/sites/all/themes/bfi2013/images/national-lottery-logo-color.png",
        alt: "Example image 2"
    },
    {
        url: "https://i.pinimg.com/originals/be/cb/8b/becb8b14b0f0be0037c5854cbe79b66f.jpg",
        alt: "Example image 3"
    },
    {
        url: "https://pbs.twimg.com/profile_images/1022403345955385345/5BTupdlq_400x400.jpg",
        alt: "Example image 4"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYyBCRuGWUtc_vZ7JpdM6IoOWCOHUk2fcko-yRHgkeKCggQ0Du&usqp=CAU",
        alt: "Example image 5",
        link: "https://www.bfi.org.uk/supporting-uk-film/distribution-exhibition-funding/film-audience-network"
    }
]

export const multiple = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>    
        
        <ImageSponsorLinks 
            images={demoData}
        />
    </div>


export const single = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>    
        
        <ImageSponsorLinks 
            images={demoData.slice(0, 1)}
        />
    </div>

