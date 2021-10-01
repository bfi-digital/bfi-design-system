import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"

const Outer = styled.legend`
    position: relative;
    display: flex;
    margin-bottom: 25px;
    color: ${theme.black};
    font-size: ${theme.large_fontSize_xl};
    font-weight: ${theme.fontWeight_semiBold};

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${theme.primary};
    }

    span {
        position: relative;
        padding: 16px 15px;
        background-color: ${theme.lightGrey};
    }
`

export const Legend = ({
    title
}) => 
    <Outer><span>{ title }</span></Outer>

Legend.propTypes = {
    title: PropTypes.string
}

Legend.defaultProps = {
    title: "",
}