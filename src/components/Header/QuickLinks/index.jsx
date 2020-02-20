import * as React from "react"
import theme from "../../_theme"
import styled from "styled-components"

const Wrapper = styled.div`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
        background: ${theme.dustyPink};
        font-weight: 600;
        padding: 5px 0;
    }
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width:  ${theme.l};
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    @media screen and (min-width: ${theme.xl}){
        max-width: ${theme.xl};
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
        font-weight: 700;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        
        &:focus {
            border-radius: 7px;
            box-shadow: inset ${theme.darkPink} 0px 0px 0px 4px;
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