import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import parse from "html-react-parser"
import PropTypes from "prop-types"

const Outer = styled.article`
    color: ${theme.charcoal};
    line-height: 1.5;
    font-size: 1rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1.125rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.25rem;
    }

    p, ol, ul{
        margin-bottom: 20px;
    }

    a{
        color: ${theme.darkPink};
        text-decoration: none;
        box-shadow:
            inset 0 -0.0em white,
            inset 0 -0.125em ${theme.darkPink};
        &:hover{
            box-shadow: none;
        }
        &:focus{
            background: ${theme.lightPink};
            box-shadow:
                inset 0 -0em white,
                inset 0 -0.17em ${theme.darkPink};
            outline: none;
        }
        &:active{
            background: ${theme.lightPink};
            box-shadow:
                inset 0 -0em white,
                inset 0 -0.125em ${theme.darkPink};
            outline: none;
        }
    }

    ul{
        list-style: none;
        li{
            margin-left: -15px;
            margin-bottom: 5px;
            &:before{
                content: "•";
                color: ${theme.darkPink};
                margin-right: 20px;
            }
        }
    }

    ol{
        li{
            padding-left: 10px;
            margin-bottom: 5px;
        }
    }

`

export const Wysiwyg = ({
    html
}) =>
    <Outer>
        {parse(html)}
    </Outer>

Wysiwyg.propTypes = {
    /** 
	 * Block of html from the WYSIWYG that will be parsed into the correct styles.
	 **/
    html: PropTypes.string
}
