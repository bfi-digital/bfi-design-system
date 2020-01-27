import * as React from "react"
import theme from "../../_theme"
import styled from "styled-components"

const Wrapper = styled.div`
    background: ${theme.dustyPink};
    font-weight: 600;
    padding: 5px 0;
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0px 15px;
    @media screen and (min-width: ${theme.xl}){
        max-width: 1440px;
    }
`

const List = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    width: 33%;
    text-align: center;

    a {
        padding: 0;
        color: ${theme.charcoal};
        font-weight: 600;
        
        &:focus {
            box-shadow: 
                inset ${theme.darkPink} 0px 0px 0px 2px,
                inset ${theme.white} 0px 0px 0px 4px !important;
            outline: none !important;
        }
    }

    @media screen and (min-width: ${theme.m}){
        width: auto;
        
        a {
            padding: 5px 20px;
            text-align: left;
        }
    }
`

const QuickLinks = () =>
    <Wrapper>
        <Inner>
            <List>
                <Item><a href="https://whatson.bfi.org.uk/Online/" target="_blank" rel="noopener noreferrer">Buy tickets</a></Item>
                <Item><a href="https://player.bfi.org.uk/" target="_blank" rel="noopener noreferrer">BFI Player</a></Item>
                <Item><a href="/" rel="noopener noreferrer">Become a member</a></Item>
            </List>
        </Inner>
    </Wrapper>

export default QuickLinks