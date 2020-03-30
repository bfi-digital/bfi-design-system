import React from "react"
import styled from "styled-components"
import { FileDownload } from "./FileDownload"

const Container = styled.div`
    
`

export const DownloadableFiles = ({
    files
}) =>
    <Container>
        {files.length > 0 ?
            files.map(file => <FileDownload key={file.title} {...file}/>)
            :
            <p>No file to show</p>
        }
    </Container>
