import React from "react"
import styled from "styled-components"
import { FileDownload } from "./FileDownload"

const Container = styled.div`
    
`

export const DownloadableFiles = ({
    files
}) =>
    <Container>
        {files.length > 1 ?
            files.map(file => <FileDownload key={file.title} {...file}/>)
            : 
            <FileDownload title={files.title} url={files.url} type={files.type} size={files.size}/>
        }
    </Container>
