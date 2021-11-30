import styled from "styled-components"
import {Headline} from "../Headline"
import { LeadParagraph } from "../LeadParagraph"
import React from "react"
import {CaptionedImage} from "../CaptionedImage"

/**
 * A component with a title, standfirst and image with caption.
 * For introducing readers to the article or topic
 */
const IntroBlockWrapper = styled.div/* less */ `
  & {
    display: flex;
    margin: 0 -25px;
    flex-wrap: wrap-reverse;
    align-items: center;

    & > * {
      flex: 1 0 50%;
      object-fit: contain;
      padding: 0 25px;
      min-width: 400px;
    }
  }
`

function IntroImage({ src, alt = "", caption, copyright }) {
    return (
        <CaptionedImage src={src} alt={alt}>
            {caption}
            {copyright && <cite>{copyright}</cite>}
        </CaptionedImage>
    )
}

export function IntroBlock({ title, standfirst, ...imgArgs }) {
    return (
        <IntroBlockWrapper>
            {imgArgs.src && <IntroImage {...imgArgs} />}
            <IntroText {...{ title, standfirst }} />
        </IntroBlockWrapper>
    )
}

function IntroText({ title, standfirst }) {
    return (
        <div>
            <Headline level={1} text={title} />
            <LeadParagraph text={standfirst || ""} />
        </div>
    )
}
