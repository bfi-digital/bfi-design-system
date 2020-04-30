import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

const Outer = styled.div`
    width: 100%;
    text-align: center;
    iframe {
        max-width: 100%;
    }
`

export const Oembed = ({
    oembedObject
}) =>
    <Outer>
        {parse(oembedObject.html)}
    </Outer>