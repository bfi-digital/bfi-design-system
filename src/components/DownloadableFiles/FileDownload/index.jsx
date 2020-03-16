import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import icon from "./fileIcon.svg"
import PropTypes from "prop-types"

const Outer = styled.div`
    max-width: 75%;
    &:not(:first-child) {
        a {
            border-top: 1px solid ${theme.grey};
            padding-top: 15px;
        }
    }
`
const Link = styled.a`
    margin-bottom: 15px;
    display: block;
    width: fit-content;
`
const Img = styled.img`
    margin-right: 10px;
    vertical-align: top;
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
}) =>
    <Outer>
        <Link href={url} download>
            <Img src={icon} alt=""/>
            <FileDetails>
                <Title>{title}</Title>
                <Type>{type}</Type>
                <Size>{size}</Size>
            </FileDetails>
        </Link>
    </Outer>

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