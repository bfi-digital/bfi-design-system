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
    color: ${theme.charcoal};
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`

const MenuButton = ({
    handleClick,
    open
}) =>
    <Button 
        onClick={handleClick}
        aria-controls="menu-panel"
        aria-expanded={open ? "true" : "false"}
    >
        {open ? "Close" : "Menu"}
        <Icon open={open}/>
    </Button>    

export default MenuButton