import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Outer = styled.div`
    color: ${theme.black};
    line-height: ${theme.lineHeight_s};
    font-size: ${theme.fontSize_s};
    margin-bottom: 20px;

    h2 {
        font-family: ${theme.bodyFont};
        color: ${theme.black};
        font-weight: bold;
        font-size: 1.4375rem;
        margin-block-start: 1.75em;
        margin-block-end: 0.5em;
        line-height: 1.3;
        @media screen and (min-width: ${theme.l}) {
            font-size: 1.6875rem;
            margin-block-start: 2em;
        }
        @media screen and (min-width: ${theme.xl}) {
            margin-block-start: 2.25em;
            font-size: 2rem;
        }
    }

    h3 {
        color: ${theme.black};
        font-weight: bold;
        font-size: 1.25rem;
        margin-block-start: 1.5em;
        margin-block-end: 0.5em;
        line-height: 1.3;
        @media screen and (min-width: ${theme.xl}) {
            font-size: 1.6875rem;
        }
    }

    h4 {
        font-family: ${theme.bodyFont};
        color: ${theme.black};
        font-weight: ${theme.fontWeight_semiBold};
        font-size: ${theme.fontSize_s};
        margin-bottom: 10px;
        line-height: 1.3;
        @media screen and (min-width: ${theme.m}) {
            font-size: ${theme.fontSize_m};
        }
        @media screen and (min-width: ${theme.xl}) {
            font-size: 1.563rem;
        }
    }

    h5 {
        font-family: ${theme.bodyFont};
        color: ${theme.black};
        font-weight: ${theme.fontWeight_semiBold};
        font-size: 0.875rem;
        line-height: 1.3;
        @media screen and (min-width: ${theme.m}) {
            font-size: ${theme.fontSize_s};
        }
        @media screen and (min-width: ${theme.xl}) {
            font-size: ${theme.fontSize_m};
        }
    }


    p:first-of-type {
        margin-top: 0px;
    }

    ol, ul {
        margin-bottom: 20px;
    }

    a:link {
        color: ${theme.black};
        text-decoration: none;
        font-weight: ${theme.fontWeight_semiBold};
        position: relative;
        background-image: linear-gradient(120deg, ${theme.primary} 0%, ${theme.primary} 100%);
        background-repeat: no-repeat;
        background-size: 100% 2px;
        background-position: 0 100%;
        transition: all 0.15s ease-in-out;

        &:hover {
            color: ${theme.white};
            background-size: 100% 100%;
        }
        &:focus {
            background-size: 100% 100%;
            color: ${theme.white};
            outline: none;
            background-image: linear-gradient(120deg, ${theme.focus} 0%, ${theme.focus} 100%);
        }
        &:active {
            outline: none;
            text-decoration: underline;
        }
    }

    a[name]::before {
        content: "\\00a0";
        position: relative;
        top: -70px;
        margin-left: -5px;
        width: 0;
        height: 0;
        color: transparent;
        overflow: hidden;
        pointer-events: none;

        @media screen and (min-width: ${theme.m}) {
            top: -90px;
        }
    }

    p + ul, p + ol {
        margin-top: -5px;
    }

    ul {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 10px;
        list-style: none;
        li {
            margin-left: -5px;
            margin-bottom: 10px;
            &:before {
                content: "•";
                color: ${theme.dark};
                margin-right: 15px;
            }
        }
        ul {
            margin-left: 20px;
            margin-top: 10px;
        }
    }

    ol {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 25px;
        li {
            padding-left: 10px;
            margin-bottom: 10px;
        }
        ol {
            margin-top: 10px
        }
    }

    abbr {
        speak: spell-out;
        cursor: help;
        position: relative;
        text-decoration-line: underline;
        text-decoration-style: dotted;

        &:hover::after {
            position: absolute;
            top: calc(100% + 5px);
            left: 50%;
            display: block;
            padding: 10px 15px;
            width: max-content;
            background: ${theme.lightest}F2;
            content: attr(title);
            -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
            -moz-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
            box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
        }
    }


    @media screen and (min-width: ${theme.m}) {
        max-width: calc(${theme.l} - 200px);
    }
    @media screen and (min-width: ${theme.l}) {
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
    }
    @media screen and (min-width: ${theme.xl}) {
        font-size: ${theme.fontSize_xl};
        max-width: calc(${theme.xl} - 400px);
    }





    // TABLE STYLES


    table {
        width: 750px;
        border-collapse: collapse;
        margin: 50px auto;
        max-width: 100%;
        overflow: scroll;

        caption {
            color: ${theme.darkGrey};
            margin-bottom: 5px;
        }
        @media only screen and (max-width: ${theme.m}) {
            caption {
                width: 100%;
                display: block;
            }
        }
    }

    tr:nth-of-type(even) {
        background: ${theme.lightGrey};
    }

    td, th {
        padding: 10px;
        border: 1px solid ${theme.grey};
        text-align: left;
        font-size: 18px;
    }
    th {
        background: ${theme.lightest};
    }


    @media only screen and (max-width: ${theme.m}) {
        table {
            width: 100%;
        }

        table, thead, tbody, th, td, tr {
            display: block;
        }

        thead tr {
            position: absolute;
            top: -9998px;
            left: -9998px;
        }

        tr { border: 1px solid ${theme.grey}; }

        td, th {
            border: none;
            position: relative;
        }
    }
`

export const Text = ({
    children
}) =>
    <Outer className="text_block">
        {children}
    </Outer>

Text.propTypes = {
    /**
	 * Block of html from the WYSIWYG.
	 **/
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
}
