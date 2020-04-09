import * as React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import Icon from "./Icon"

const Button = styled.button`
    border: none;
    cursor: pointer;
    background: none;
    padding: 20px 10px;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
        {open ? "Close" : "Menu"}
        <Icon open={open} isWhite={isWhite} />
    </Button>    

export default MenuButton