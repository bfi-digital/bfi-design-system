import React from "react"
import styled from "styled-components"
import { FileDownload } from "./FileDownload"

const Container = styled.div`
    margin: 25px 0;
`

export const DownloadableFiles = ({
    files
}) =>
    <Container>
        {files.length > 0 ?
            files.map(file => <FileDownload key={file.title} {...file}/>)
            :
            <i>No file to show</i>
        }
    </Container>
