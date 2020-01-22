import * as React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import * as menuIcon from "./menu-black.svg"
import * as closeIcon from "./close-black.svg"

export const Button = styled.button`
    border: none;
    cursor: pointer;
    background: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${theme.charcoal};
    img{
        height: 12px;
        margin-right: 5px;
    }
`

const MenuButton = ({
    handleClick,
    open
}) =>
    <Button onClick={handleClick}>
        {open ? 
            <>
                <img src={closeIcon} alt=""/> Close
            </>
            :
            <>
                <img src={menuIcon} alt=""/> Menu
            </>
        }
    </Button>    

export default MenuButton