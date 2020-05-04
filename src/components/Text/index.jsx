import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Outer = styled.div`
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

    
    table { 
        width: 750px; 
        border-collapse: collapse; 
        margin: 50px auto;
    }
    
    tr:nth-of-type(odd) { 
        background: ${theme.lightGrey}; 
    }
    
    td, th { 
        padding: 10px; 
        border: 1px solid ${theme.grey}; 
        text-align: left; 
        font-size: 18px;
    }
    

    @media only screen and (max-width: ${theme.l}){
        table { 
            width: 100%; 
        }
    
        table, thead, tbody, th, td, tr { 
            display: block; 
        }
        
        thead tr { 
            position: absolute;
            top: -9999px;
            left: -9999px;
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
    <Outer>
        {children}
    </Outer>

Text.propTypes = {
    /** 
	 * Block of html from the WYSIWYG
	 **/
    children: PropTypes.string
}
