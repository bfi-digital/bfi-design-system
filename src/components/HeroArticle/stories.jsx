import * as React from "react"
import { HeroArticle } from "./index"
 
export default {
    title: "4 Components/All/HeroArticle"
}

export const normal = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1400px"
    }}>
        <HeroArticle 
            image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/2020-03/Hero.jpg/1920x1080-cropped/Hero.jpg"
            imageAltText="Alt text for the image"
            imageCaption="BFI Southbank"
            imageCopyright="HELP MUSICIANS, directed by Thomas Guthrie"
            title="Britain on Lockdown: How online videos have shaped the crisis"
            standfirst="As the BFI National Archive calls on the British public to help map the digital video response to coronavirus across the UK, our curators begin a regular new series highlighting the online videos that have made an impact during the lockdown period."
            category="Article category"
            type="Feature"
            date="28 April 2020"
            authors={[
                {
                    name: "Ros Cranston",
                    url: "#"
                },
                // {
                //     name: "Ros Cranston2",
                //     url: "#"
                // }
            ]}
        />
    </div>
