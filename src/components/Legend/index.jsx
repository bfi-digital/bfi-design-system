import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"

const LegendEl = styled.legend`
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 25px;
    color: ${theme.black};
    font-size: 17px;
    font-weight: ${theme.fontWeight_semiBold};
    line-height: 1.29;
    
    @media screen and (min-width: ${theme.l}){
        font-size: ${theme.large_fontSize_xl};
        line-height: 1.3;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 4px;
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
    <LegendEl><span>{ title }</span></LegendEl>

Legend.propTypes = {
    title: PropTypes.string.isRequired
}

Legend.defaultProps = {
    title: "",
}