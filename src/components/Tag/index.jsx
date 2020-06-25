import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"

const Outer = styled.div`
    display: inline-block;
    margin-right: 10px;
    padding: 5px 10px;
    font-weight: ${theme.fontWeight_semiBold};
    background: ${props => props.withLink ? theme.primary : theme.light};
    color: ${theme.black};
    position: relative;
    margin-bottom: 5px;

    &:hover {
        background: ${props => props.withLink ? theme.dark : theme.light};
    }
    &:active {
        a {
            text-decoration: underline;
        }
    }
    &:focus-within {
        box-shadow: 0px 0px 0px 3px ${theme.focus};
        transition: box-shadow .3s;
        a {
            outline: none;
        }
    }
    
    a {
        text-decoration: none;
        color: ${theme.white};
        &:after{
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`

export const Tag = ({ link, children }) =>
    <Outer withLink={link ? true : false}>
        {link ? 
            <Link to={link}>{children}</Link>
            :
            <>{children}</>
        }
    </Outer>