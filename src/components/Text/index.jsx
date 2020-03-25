import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import parse from "html-react-parser"
import PropTypes from "prop-types"

const Outer = styled.article`
    color: ${theme.black};
    line-height: 1.5;
    font-size: 1rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1.125rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.25rem;
    }

    p:first-of-type{
        margin-top: 0px;
    }

    p, ol, ul{
        margin-bottom: 20px;
    }

    a{
        color: ${theme.primary};
        text-decoration: none;
        box-shadow:
            inset 0 -0.0em white,
            inset 0 -0.125em ${theme.primary};
        &:hover{
            box-shadow: none;
            color: ${theme.dark};
        }
        &:focus{
            background: ${theme.lightest};
            box-shadow:
                inset 0 -0em white,
                inset 0 -0.17em ${theme.dark};
            outline: none;
        }
        &:active{
            background: ${theme.lightest};
            box-shadow:
                inset 0 -0em white,
                inset 0 -0.125em ${theme.dark};
            outline: none;
        }
    }
    p + ul {
        margin-top: -10px;
    }

    ul{
        margin-top: 0;
        margin-bottom: 0;
        display: inline-block;
        list-style: none;
        li{
            margin-left: -15px;
            margin-bottom: 3px;
            &:before{
                content: "•";
                color: ${theme.dark};
                margin-right: 20px;
            }
        }
    }

    ol{
        margin-top: 0;
        margin-bottom: 0;
        display: inline-block;
        li{
            padding-left: 10px;
            margin-bottom: 3px;
        }
    }

`

export const Text = ({
    html
}) =>
    <Outer>
        {parse(html)}
    </Outer>

Text.propTypes = {
    /** 
	 * Block of html from the WYSIWYG that will be parsed into the correct styles.
	 **/
    html: PropTypes.string
}
