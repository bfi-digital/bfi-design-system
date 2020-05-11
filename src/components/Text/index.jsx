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
        background-image: linear-gradient(120deg, ${theme.primary} 0%, ${theme.primary} 100%);
        background-repeat: no-repeat;
        background-size: 100% 2px;
        background-position: 0 100%;
        transition: all 0.15s ease-in-out;

        &:hover{
            color: ${theme.white};
            background-size: 100% 100%;
        }
        &:focus{
            background-size: 100% 100%;
            color: ${theme.white};
            outline: none;
            background-image: linear-gradient(120deg, ${theme.focus} 0%, ${theme.focus} 100%);
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
        padding-left: 15px;
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
        padding-left: 15px;
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
