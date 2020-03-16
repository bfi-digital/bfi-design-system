import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

const Outer = styled.div`

`

export const VideoEmbed = ({
    oembedObject
}) =>
    <Outer>
        {parse(oembedObject.html)}
    </Outer>