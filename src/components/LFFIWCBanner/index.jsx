import React, { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Button } from "../Button"
import { LeadParagraph } from "../LeadParagraph"

const calculateTimeLeft = (festivalDate) => {
    let difference = +new Date(festivalDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    return timeLeft
}

const Outer = styled.div`
    margin-bottom: ${theme.standardSpace*1.5}px;
    margin-top: ${theme.standardSpace*1.5}px;

    @media screen and (min-width: ${theme.m}) {
        display: flex;
        justify-content: center;
        margin-bottom: ${theme.standardSpace*2}px;
        margin-top: ${theme.standardSpace*2}px;
    }

    @media screen and (min-width: ${theme.l}){
        margin-bottom: ${theme.standardSpace*2.5}px;
        margin-top: ${theme.standardSpace*2.5}px;
    }
`

const Content = styled.div`
    background: ${theme.lightest};
    padding: ${theme.standardSpace}px;

    p {
        margin-top: 0;
    }
    @media screen and (min-width: ${theme.m}) {
        margin-right: 15px;
        flex: 1.8;
    }
    @media screen and (min-width: ${theme.l}) {
        flex: 2;
    }
`
const IWC = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    background: ${theme.lightGrey};
    padding: ${theme.standardSpace}px;
    @media screen and (min-width: ${theme.m}) {
        flex: 1.2;
    }
    @media screen and (min-width: ${theme.l}) {
        flex: 1;
    }
`

const CountdownContainer = styled.div`
    flex: 1.25;
    text-align: center;
    display: flex;
    align-items: center;
    @media screen and (min-width: ${theme.m}) {
        flex: 1.25;
    }
    @media screen and (min-width: ${theme.l}) {
        flex: 1.1;
    }
`
const CountdownContainerInner = styled.div`
    height: fit-content;

    a {
        &:hover {
            opacity: 0.8;
        }
    }
`
const LogoImg = styled.img`
    width: 75%;
`
const TimeContainer = styled.div`
    display: inline-block;
    font-weight: bold;
    margin-right: 10px;
    margin-bottom: ${theme.standardSpace}px;

    &:last-of-type {
        margin-right: 0;
    }
`
const Time = styled.p`
    margin: 0;
`
const TimeTitle = styled(Time)`
    text-transform: uppercase;
`

const WatchContainer = styled.div`
    position: relative;
    flex: 0.75;
    height: 100%;
    margin-left: -25px;
    img {
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transition: transform ease 0.2s;
        -moz-transition: transform ease 0.2s;
        -o-transition: transform ease 0.2s;
        transition: transform ease 0.2s;
    }

    @media screen and (min-width: ${theme.m}) {
        flex: 0.75;
    }
    @media screen and (min-width: ${theme.l}) {
        flex: 0.9;
    }
`
const Watch = styled.img`
    @media screen and (min-width: ${theme.m}) {
        transform: translateY(-50%);
    }
`
const SecondHand = styled.img`
    transform: rotate(${props => props.deg}deg);
    @media screen and (min-width: ${theme.m}) {
        transform: translateY(-50%) rotate(${props => props.deg}deg);
    }
`
const MinHand = styled.img`
    transform: rotate(${props => props.deg}deg);
    @media screen and (min-width: ${theme.m}) {
        transform: translateY(-50%) rotate(${props => props.deg}deg);
    }
`
const HourHand = styled.img`
    transform: rotate(${props => props.deg}deg);
    @media screen and (min-width: ${theme.m}) {
        transform: translateY(-50%) rotate(${props => props.deg}deg);
    }
`

export const LFFIWCBanner = ({
    content,
    festivalDate,
    ctaLink,
    ctaText,
    watchImg,
    hourImg,
    minImg,
    secondImg,
    iwcLogo
}) => {
    const [dateInPast, setDateInPast] = useState(false)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(festivalDate, setDateInPast))
    const [degHour, setDegHour] = useState(0)
    const [degMin, setDegMin] = useState(0)
    const [degSec, setDegSec] = useState(0)

    useEffect(() => {
        const timer=setTimeout(() => {
            let time = new Date()
            setTimeLeft(calculateTimeLeft(festivalDate))
            setDegHour(time.getHours()*30+(30/(60/time.getMinutes())))
            setDegMin(time.getMinutes()*6+(60/(3600/time.getSeconds())))
            setDegSec(time.getSeconds()*6)
        }, 1000)
        return () => clearTimeout(timer)
    })

    useEffect(() => {
        if(!timeLeft.days && !timeLeft.hours && !timeLeft.minutes) {
            setDateInPast(true)
        }
    }, [timeLeft])

    return(
        <Outer>
            <Content>
                <LeadParagraph text={content} />
                {ctaLink && 
                    <Button to={ctaLink}>
                        {ctaText}
                    </Button>
                }
            </Content>
            <IWC>
                <WatchContainer>
                    <Watch src={watchImg} alt="" />
                    <HourHand src={hourImg} alt="" deg={degHour} />
                    <MinHand src={minImg} alt="" deg={degMin} />
                    <SecondHand src={secondImg} alt="" deg={degSec} />
                </WatchContainer>
                <CountdownContainer>
                    <CountdownContainerInner>
                        {!dateInPast &&
                            <>
                                <TimeContainer>
                                    <Time>{timeLeft.days}</Time>
                                    <TimeTitle>Days</TimeTitle>
                                </TimeContainer>
                                <TimeContainer>
                                    <Time>{timeLeft.hours}</Time>
                                    <TimeTitle>Hours</TimeTitle>
                                </TimeContainer>
                                <TimeContainer>
                                    <Time>{timeLeft.minutes}</Time>
                                    <TimeTitle>Mins</TimeTitle>
                                </TimeContainer>
                            </>
                        }
                        <a href="https://www.iwc.com/gb/en/home.html" title="Go to IWC's website">
                            <LogoImg src={iwcLogo} alt="IWC Schaffhausen" />
                        </a>
                    </CountdownContainerInner>
                </CountdownContainer>
            </IWC>
        </Outer>
    )
}

LFFIWCBanner.propTypes = {
    /** 
	 * Content for the top section of information
	 **/
    content: PropTypes.string,
}

LFFIWCBanner.defaultProps = {
    content: "The 2020 BFI London Film Festival will be the first ever edition of the Festival to be widely accessible across the UK, with 50 Virtual Festival Premieres to be enjoyed at home.",
    festivalDate: "10/07/2020",
    ctaLink: "http://bfi.org",
    ctaText: "Your guide to the festival"
}