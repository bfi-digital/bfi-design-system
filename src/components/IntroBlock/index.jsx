import React from "react"
import styled from "styled-components"
import { Headline } from "../Headline"
import { LeadParagraph } from "../LeadParagraph"
import { CaptionedImage, CaptionToggle } from "../CaptionedImage"
import theme from "../_theme"

/**
 * A component with a title, standfirst and image with caption.
 * For introducing readers to the article or topic
 */
const IntroBlockWrapper = styled.div`
    display: grid;
    gap: 25px;
    align-items: center;

    article {
        grid-row: 1;
    }

    @media screen and (min-width: ${theme.s}) {
        grid-template-columns: minmax(min-content,max-content) 50%;

        article {
            grid-row: auto;
        }
    }
`

function IntroImage({ src, alt = "", caption, copyright }) {
    return (
        <CaptionedImage src={src} alt={alt}>
            <>
                {(caption || copyright) && (
                    <CaptionToggle>
                        { caption }
                        { (caption && copyright) && <br /> }
                        { copyright && <cite>{`\u00A9 ${copyright}`}</cite> }
                    </CaptionToggle>
                )}
            </>
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

function IntroText({ title, standfirst = "" }) {
    return (
        <article>
            <Headline level={1} text={title} />
            <LeadParagraph text={standfirst} />
        </article>
    )
}
