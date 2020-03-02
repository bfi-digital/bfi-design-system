import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Headline } from "../Headline"

const Outer = styled.li`
    margin-bottom: 20px;
    position: relative;
    transition: box-shadow .3s;
    border-radius: 5px;
    
    &:last-child {
        border: none;
        margin-bottom: 0px;
    }
    h5 {
        margin: 0;
        display: inline-block;
        vertical-align: top;
        width: 60%;
    }
    &:hover, &:focus-within {
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 5px ${theme.dustyPink};
        outline: none;
    }
    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 1px;
        width: 100%;
        background: ${theme.grey};
    }
`
const PageImageContainer = styled.div`
    background: ${theme.dustyPink};
    display: inline-block;
    width: calc(40% - 10px);
    height: 100px;
    border-radius: 4px;
    margin-right: 10px;
`
const PageImage = styled.div`
    width: 100%;
    background: url(${props => props.imageSrc});
    height: 100%;
    background-position: center center;
    background-size: cover;
    display: block;
    border-radius: 4px;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
`

const CallToAction = styled(Link)`
    text-decoration: none;
    color: ${theme.charcoal};
    display: block;
    max-height: 100px;

    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &:focus{
        outline: none;
    }
`

export const PageLink = ({
    title,
    image,
    external,
    url
}) =>
    <Outer>
        <CallToAction external={external} to={url}>
            <PageImageContainer>
                <PageImage className="image" imageSrc={image} />
            </PageImageContainer>
            
            <Headline level={5} text={title} />
        </CallToAction>
    </Outer>

