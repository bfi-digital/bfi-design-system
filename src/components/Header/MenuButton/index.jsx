import * as React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import Icon from "./Icon"

const Button = styled.button`
    border: none;
    margin-top: 1px;
    cursor: pointer;
    background: none;
    padding: 10px 10px;
    font-size: ${theme.fontSize_s};
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: -10px;
    // color: ${props => props.isWhite ? theme.white : theme.black};
    color: ${theme.black};
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`

const MenuButton = ({
    handleClick,
    open,
    isWhite
}) =>
    <Button 
        onClick={handleClick}
        aria-controls="menu-panel"
        aria-expanded={open ? "true" : "false"}
        isWhite={isWhite}
    >
        <Icon open={open} isWhite={isWhite} />
        {open ? "Close" : "Menu"}
    </Button>    

export default MenuButton