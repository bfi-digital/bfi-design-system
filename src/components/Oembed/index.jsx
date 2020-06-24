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
    max-width: ${theme.l};

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
    }
`
const Container = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: ${theme.standardSpace*2}px;

    iframe, twitter-widget {
        max-width: 100%;
        margin: 10px auto !important;
    }
`

export const Oembed = ({
    oembedObject,
    isVideo
}) =>
    isVideo ?
        <VideoContainer>
            {parse(oembedObject.html.replace("></iframe>", " title=\"" + (oembedObject.title ? (oembedObject.title + " video") : "Video player") + "\"></iframe>"))}
        </VideoContainer>
        :
        <Container>
            {parse(oembedObject.html.replace("></iframe>", " title=\"" + (oembedObject.title ? (oembedObject.title + " embed") : "Iframe container") + "\"></iframe>"))}
        </Container>
    
