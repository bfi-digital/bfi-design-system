import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import parse from "html-react-parser"
import PropTypes from "prop-types"

const Outer = styled.section`
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

    a {
        color: ${theme.black};
        text-decoration: none;
        font-weight: 600;
        position: relative;
        &:after {
            content: "";
            background: ${theme.lightest};
            height: 40%;
            width: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            z-index: -1;
            transition: height .3s; 
        }

        &:hover{
            color: ${theme.dark};
            &:after {
                height: 100%;
            }
        }
        &:focus{
            outline: 2px solid ${theme.highlight};
            &:after {
                height: 100%;
            }
        }
        &:active{
            outline: none;
            text-decoration: underline;
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
            margin-bottom: 10px;
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
            margin-bottom: 10px;
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
