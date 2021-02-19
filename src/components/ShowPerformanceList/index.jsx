import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Moment from "react-moment"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"
dayjs.extend(isBetween)
import "moment-timezone"
import { Headline } from "../Headline"
import { Button } from "../Button"
import { ShowAddToCalendar } from "../ShowAddToCalendar"

const Outer = styled.div`
    font-size: ${theme.fontSize_s};

    h2:first-child {
        margin-block-start: 0;
        margin-block-end: ${theme.standardSpace}px;
    }

    @media screen and (min-width: ${theme.l}){
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.fontSize_xl};
    }
`
const PerformanceList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`
const Performance = styled.li`
    width: 100%;
    padding: ${theme.standardSpace}px;
    margin-bottom: ${theme.standardSpace}px;
    background: ${theme.lightGrey};

    p {
        margin-bottom: 7px;
        margin-top: ${theme.standardSpace/4}px;

        &:first-of-type {
            margin-top: 0;
        }
    }
    strong {
        font-weight: ${theme.fontWeight_semiBold};
    }

    @media screen and (min-width: ${theme.m}){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const PerformanceDetails = styled.div`
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.m}){
        margin-bottom: 0px;
    }
`

const PerformanceCTADateWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const PerformanceCTA = styled.div`
    @media screen and (min-width: ${theme.s}){
        align-self: flex-end;
    }
`

const StyledDates = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10px;
    time {
        font-size: 1.05rem;
    }
    time + time {
        margin-top: 5px;
    }
`

const DetailsContainer = styled.div`
    display: flex;
    p {
        margin-top: 0;
        &:first-of-type {
            margin-right: 20px;
        }
    }
`
const StyledButton = styled(Button)`
    min-width: 180px;
    &::first-letter {
        text-transform: uppercase;
    }
`

export const ShowPerformanceList = ({
    showTitle,
    performances,
    showType,
    showDescription
}) => {
    const datesAreOnSameDayCheck = (first, second) => 
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    console.log('show performances', performances);
    const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
        condition ? wrapper(children) : wrapper2(children)
    return( 
        <Outer>
            <Headline
                level={2} 
                text={`${showTitle} ${showType === "event" ? "dates and times" : "screenings"}`}
            />
            <PerformanceList id="performance-list">
                {performances.map((performance) => {
                    let performanceTimeCheck = (new Date(performance.dateTimeStart).getHours() === 0) && (new Date(performance.dateTimeStart).getMinutes() === 0) ? false : true
                    return(
                        <Performance key={performance.id}>
                            <PerformanceDetails>
                                {getPerformanceInfo(performance)}

                                {datesAreOnSameDayCheck(new Date(performance.dateTimeStart), new Date(performance.dateTimeEnd)) ? 
                                    <>
                                        <p>
                                            <strong>
                                                <Moment format="dddd D MMMM">{performance.dateTimeStart}</Moment><br />
                                                {performanceTimeCheck && 
                                                    <>
                                                        <Moment tz="Europe/London" format="HH:mm">{performance.dateTimeStart}</Moment>
                                                        {performance.dateTimeEnd &&
                                                            <>
                                                                &nbsp;&ndash;&nbsp;
                                                                <Moment tz="Europe/London" format="HH:mm">{performance.dateTimeEnd}</Moment>
                                                            </>
                                                        }
                                                        
                                                    </>
                                                }
                                            </strong>
                                        </p>
                                        <ShowAddToCalendar 
                                            title={showTitle} 
                                            description={showDescription} 
                                            location={performance.platform === "southbank" ? "BFI Southbank, Belvedere Rd, Bishop's, London SE1 8XT" : performance.ctaURL} 
                                            dateTimeStart={performance.dateTimeStart} 
                                            dateTimeEnd={performance.dateTimeEnd ? performance.dateTimeEnd : new Date(performance.dateTimeEnd).setHours(new Date(performance.dateTimeEnd).getHours() + 2)} 
                                        />
                                    </>
                                    :
                                    <DetailsContainer>
                                        {performance.dateTimeEnd &&
                                            <p>
                                                <strong>From: </strong>
                                                <br/>
                                                <strong>Until: </strong>
                                            </p>
                                        }
                                        <p>
                                            <ConditionalWrapper
                                                condition={performance.dateTimeEnd}
                                                wrapper={children => <span>{children}</span>}
                                                wrapper2={children => <strong>{children}</strong>}
                                            >
                                                {performanceTimeCheck ?
                                                    <Moment tz="Europe/London" format="dddd D MMMM - HH:mm">{performance.dateTimeStart}</Moment> 
                                                    :
                                                    <Moment tz="Europe/London" format="dddd D MMMM">{performance.dateTimeStart}</Moment> 
                                                }
                                            </ConditionalWrapper>
                                            {performance.dateTimeEnd &&
                                                <>
                                                    <br />
                                                    <span>
                                                        {performanceTimeCheck ?
                                                            <Moment tz="Europe/London" format="dddd D MMMM - HH:mm">{performance.dateTimeEnd}</Moment>
                                                            :
                                                            <Moment tz="Europe/London" format="dddd D MMMM">{performance.dateTimeEnd}</Moment>
                                                        }
                                                    </span>
                                                </>
                                            }
                                        </p>
                                    </DetailsContainer>
                                }
                            </PerformanceDetails>
                            <PerformanceCTADateWrapper>
                                <PerformanceCTA>
                                    {getPerformanceButton(performance)}
                                </PerformanceCTA>
                                {getPerformanceOnSaleDates(performance)}
                            </PerformanceCTADateWrapper>
                        </Performance>
                    )
                })}
            </PerformanceList>
        </Outer>
    )

    function getPerformanceInfo(performance) {
        let info
        performance.performanceInfo ? 
            info = <span>{performance.performanceInfo}</span>
            :
            performance.platform === "southbank" ? 
                info = <span>{performance.paywall === "free" || performance.paywall === "Free" ? "Screening for free " : "Screening" } at {performance.screen? performance.screen: "BFI Southbank"}</span>
                :
                performance.platform === "player" ?
                    info = <span>{performance.paywall === "free" || performance.paywall === "Free"? "Available for free " : "Available" } on {performance.screen? performance.screen: "BFI Player"} </span>
                    :
                    performance.platform === "youtube" ?
                        info = <span>Watch on YouTube</span>     
                        : 
                        null
        return <p>{info}</p>
    }

    function getPerformanceOnSaleDates(performance) {        
        let priorityDate
        let publicDate
        if (performance.on_sale_dates) {
            performance.on_sale_dates.map(date => {
                if (date.type === "priority") {
                    return priorityDate = date.on_sale
                } 
                if (date.type === "public") {
                    return publicDate = date.on_sale    
                }
                return date.on_sale
            })
        }

        let showDate = false
        if (performance.on_sale_dates && (dayjs().isBefore(dayjs(priorityDate), dayjs(publicDate)))) {
            showDate = true
        }

        return (
            showDate ?
                <StyledDates>
                    {priorityDate && <time dateTime={dayjs(priorityDate).unix()}>Priority booking opens <Moment tz="Europe/London" format="dddd D MMMM - HH:mm">{priorityDate}</Moment></time>}
                    {publicDate && <time dateTime={dayjs(publicDate).unix()}>General booking opens <Moment tz="Europe/London" format="dddd D MMMM - HH:mm">{publicDate}</Moment></time>}
                </StyledDates>
                :
                <></>
        )
    }

    function getPerformanceButton(performance) {        
        const betweenTimes = dayjs().isBetween(dayjs(performance.dateTimeStart), dayjs(performance.dateTimeEnd))
        const performanceStarted = dayjs().isAfter(dayjs(performance.dateTimeStart))
        const performanceEnded = dayjs().isAfter(dayjs(performance.dateTimeEnd))

        let button = null

        if (performanceEnded) {
            button = null
        } else if (performance.availability === "On sale now") {
            button = <StyledButton level={1} url={performance.ctaURL} external={true}>Book now</StyledButton>
        } else if (performance.availability === "Sold out") {
            button = <StyledButton level={1} external={false} disabled>Sold out</StyledButton> 
        } else if (performance.availability === "Available soon") {
            button = <StyledButton level={1} external={false} disabled>Check back for tickets</StyledButton>
        } else if (performance.ctaURL && (performance.bookingRequired === "paid" || performance.bookingRequired === "Paid")) {
            if (performanceStarted) {
                button = null
            } else {
                button = <StyledButton level={1} url={performance.ctaURL} external={true}>Book now</StyledButton>
            }
        } else if (performance.ctaURL && (performance.bookingRequired === "free" || performance.bookingRequired === "Free")) {
            if (!performanceStarted) {
                button = <StyledButton level={1} url={performance.ctaURL} external={true} disabled>Coming soon</StyledButton>
            } else if (betweenTimes) {
                button = <StyledButton level={1} url={performance.ctaURL} external={true}>Watch now</StyledButton>
            } else {
                button = null
            }
        }
        return button 
    }
}
