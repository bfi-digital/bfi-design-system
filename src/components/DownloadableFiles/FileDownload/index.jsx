import React, { useState } from "react"
import styled from "styled-components"
import theme from "../../_theme"
import DownloadFileIcon from "./downloadFileIcon.jsx"
import PropTypes from "prop-types"

const Outer = styled.div`
    max-width: 75%;
    &:not(:first-child) {
        a {
            margin-top: 30px;
            &:after {
                content: "";
                height: 1px;
                width: 100%;
                position: absolute;
                left: 0;
                top: -15px;
                background: ${theme.grey};
        }
    }
`
const Link = styled.a`
    margin-bottom: 15px;
    display: block;
    width: fit-content;
    transition: box-shadow .3s;
    position: relative;

    svg {
        margin-right: 10px;
        vertical-align: top;
    }

    &:hover {
        background: ${theme.lightGrey};
        .file-title {
            color: ${theme.dark};
        }
    }

    &:focus {
        outline: none;
        background: ${theme.lightGrey};
        box-shadow: 0px 0px 0px 5px white, 0px 0px 0px 9px ${theme.highlight};
    }
`

const FileDetails= styled.div`
    display: inline-block;
    max-width: calc(100% - 40px);
`
const Title = styled.span`
    display: block;
    color: ${theme.primary};
    font-weight: 800;
`
const Type = styled.span`
    color: ${theme.darkGrey};
    margin-right: 5px;
    font-weight: 600;
`
const Size = styled.span`
    color: ${theme.darkGrey};
`

export const FileDownload = ({
    title,
    type,
    url,
    size
}) => {
    const [isHovered, setIsHovered] = useState(false)

    return(
        <Outer>
            <Link 
                href={url} 
                download
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <DownloadFileIcon colourFill={isHovered ? theme.dark : theme.primary} />
                <FileDetails>
                    <Title className="file-title">{title}</Title>
                    <Type>{type}</Type>
                    <Size>{size}</Size>
                </FileDetails>
            </Link>
        </Outer>
    )
}

FileDownload.propTypes = {
    /** 
	 * The title of the file, not including the file extension 
	 **/
    title: PropTypes.string,
    /** 
	 * The type of file 
	 **/
    type: PropTypes.string,
    /** 
	 * A URL to download the file
	 **/
    url: PropTypes.string,
    /** 
	 * The size of the file in KB or MB 
	 **/
    size: PropTypes.string
}