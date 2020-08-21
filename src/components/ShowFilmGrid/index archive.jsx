import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { FilmCard } from "./FilmCard"
import { Button } from "../Button"
import arrow from "./arrow.svg"

const Outer = styled.section`
    @media screen and (min-width: ${theme.m}){
        display: flex;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        flex-wrap: wrap;
    }
`
const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

const Scroller = styled.div`
    position: relative;
`
const ScrollerInner = styled.div`
    width: 100%;
    overflow: scroll;
`
const ScrollerFade = styled.div`
    width: 45px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */
`

const ArrowRight = styled.img`
    position: absolute;
    top: calc(50% - 28px);
    right: -50px;
    cursor: pointer;
`
const ArrowLeft = styled.img`
    transform: rotate(180deg);
    position: absolute;
    top: calc(50% - 28px);
    left: -50px;
    cursor: pointer;
`

const ScrollerTrack = styled.div`
    width: ${props => props.num*265}px;
    margin: 0;
    padding: 0px;
    padding-top: 9px;
    list-style: none;
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (min-width: ${theme.m}){
        width: ${props => props.num*315}px;
    }

    a {
        display: inline-block;
        margin-right: 15px;
        width: 250px;

        &:nth-of-type(3n) {
            margin-right: 15px;
        }

        &:last-of-type {
            margin-right: 0px;
        }

        @media screen and (min-width: ${theme.m}){
            width: 300px;
        }

    }
`

export const FilmGrid = ({
    films,
    allFilmsUrl
}) =>
    <>
        {films.length === 4 || films.length === 5 || films.length > 6 ?
            <>
                <Scroller>
                    <ScrollerInner>
                        <ArrowLeft src={arrow} alt="Move left"/>
                        <ScrollerTrack num={films.length}>
                            {films.map(film =>
                                <FilmCard key={film.uuid} {...film}/>    
                            )}
                        </ScrollerTrack>
                        <ArrowRight src={arrow} alt="Move right"/>
                    </ScrollerInner>
                    <ScrollerFade />
                </Scroller>
                { allFilmsUrl &&
                    <CentredButton to={allFilmsUrl}>See more films</CentredButton>
                }
            </>
            :
            <Outer>
                {films.map(film =>
                    <FilmCard key={film.uuid} {...film}/>    
                )}
                { allFilmsUrl &&
                    <CentredButton to={allFilmsUrl}>See more films</CentredButton>
                }
            </Outer>
        }
    </>