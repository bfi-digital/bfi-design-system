import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.div`
    margin-left: 10px;
    width: 15px;
    &:after, 
    &:before, 
    div {
        background-color: ${theme.charcoal};
        // border-radius: 3px;
        content: '';
        display: block;
        height: 2px;
        margin: 3px 0;
        transition: all .2s ease-in-out;
        transform: ${props => props.open ? "scale(0)" : ""}
    }
    &:before{
        transform: ${props => props.open ? "translateY(5px) rotate(135deg)" : ""}
    }
    &:after{
        transform: ${props => props.open ? "translateY(-5px) rotate(-135deg)" : ""}
    }
`

const Icon = ({
    open
}) =>
    <Outer open={open}>
        <div></div>
    </Outer>

export default Icon