import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import theme from "../_theme"

const VideoContainer = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    text-align: center;
    margin-bottom: ${theme.standardSpace*2}px;
    max-width: 100%;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
        border: 0;
    }
`
const Container = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: ${theme.standardSpace*2}px;

    iframe, twitter-widget, .twitter-tweet {
        margin: 10px auto !important;
    }
`

export const Oembed = ({
    oembedObject,
    isVideo
}) => {
    if (oembedObject.html.includes("youtube") && !oembedObject.html.includes("cc_load_policy=1")) {
        oembedObject.html = oembedObject.html.replace(
            "?feature=oembed",
            "?feature=oembed&cc_load_policy=1"
        )
    }
    if (oembedObject.html.includes("vimeo") && !oembedObject.html.includes("texttrack")) {
        const parts = oembedObject.html.split(" ")
        parts[1] = parts[1].replace(/"/g, "") + "?texttrack=en"
        parts[1] = "src="+ "\""+parts[1].slice(4)+"\""      
        oembedObject.html = parts.join(" ")
    }

    if (oembedObject.html.includes("youtube") || oembedObject.html.includes("vimeo")) {
        oembedObject.html = oembedObject.html.replace("frameborder=\"0\"", "")
    }

    return (
        isVideo ?
            <VideoContainer>
                {parse(oembedObject.html.replace("></iframe>", " title=\"" + (oembedObject.title ? (oembedObject.title + " video") : "Video player") + "\"></iframe>"))}          
            </VideoContainer>
            :
            <Container>
                {parse(oembedObject.html.replace("></iframe>", " title=\"" + (oembedObject.title ? (oembedObject.title + " embed") : "Iframe container") + "\"></iframe>"))}
            </Container>
    )
}

    
