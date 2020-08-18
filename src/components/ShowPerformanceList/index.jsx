import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Moment from "react-moment"
import { Headline } from "../Headline"
import { Button } from "../Button"
import { PlayButton } from "../PageContainer"
import { ShowAddToCalendar } from "../ShowAddToCalendar"

const Outer = styled.div`
    h2:first-child {
        margin-block-start: 0;
        margin-block-end: ${theme.standardSpace}px;
    }
`
const PerformanceList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`
const Performance = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.standardSpace}px;
    margin-bottom: ${theme.standardSpace}px;
    background: ${theme.lightGrey};

    p {
        margin-bottom: 0;
        margin-top: ${theme.standardSpace/4}px;

        &:first-of-type {
            margin-top: 0;
        }
    }
    strong {
        font-weight: ${theme.fontWeight_semiBold};
    }
`

const PerformanceDetails = styled.div`

`
const PerformanceCTA = styled.div`

`

export const ShowPerformanceList = ({
    showTitle,
    performances,
    showDescription
}) => {
    const datesAreOnSameDayCheck = (first, second) => 
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()

    return( 
        <Outer>
            <Headline
                level={2} 
                text={`See ${showTitle} in London Film Festival`}
            />
            <PerformanceList id="performance-list">
                {performances.map((performance) =>
                    <Performance key={performance.id}>
                        <PerformanceDetails>
                            <p>
                                {performance.performanceInfo}
                                {performance.screen && 
                                    <>
                                        &nbsp;&ndash;&nbsp;
                                        {performance.screen}
                                    </>
                                }
                            </p>

                            {datesAreOnSameDayCheck(new Date(performance.dateTimeStart), new Date(performance.dateTimeEnd)) ? 
                                <>
                                    <p>
                                        <strong>
                                            <Moment format="dddd Do MMMM YYYY">{performance.dateTimeStart}</Moment><br />
                                            <Moment local format="HH:mm">{performance.dateTimeStart}</Moment>
                                            &nbsp;&ndash;&nbsp;
                                            <Moment local format="HH:mm">{performance.dateTimeEnd}</Moment>
                                            &nbsp;BST
                                        </strong>
                                    </p>
                                    <ShowAddToCalendar 
                                        title={showTitle} 
                                        description={showDescription} 
                                        location={performance.platform == "southbank" ? "BFI Southbank, Belvedere Rd, Bishop's, London SE1 8XT" : performance.ctaURL} 
                                        dateTimeStart={performance.dateTimeStart} 
                                        dateTimeEnd={performance.dateTimeEnd} 
                                    />
                                </>
                                :
                                <p>
                                    <strong>From: </strong>
                                    &nbsp;&nbsp;
                                    <span><Moment local format="dddd Do MMMM YYYY - HH:mm">{performance.dateTimeStart}</Moment> BST</span>
                                    <br />
                                    <strong>To: </strong>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span><Moment local format="dddd Do MMMM YYYY - HH:mm">{performance.dateTimeEnd}</Moment> BST</span>
                                </p>
                            }
                        </PerformanceDetails>
                        <PerformanceCTA>
                            {performance.availability === "Available" ? 
                                performance.platform == "southbank" ? 
                                    <Button level={1} url={performance.ctaURL}  external={true}>Watch it at BFI Southbank</Button>
                                    : 
                                    performance.platform == "player" ? 
                                        <PlayButton playerPillar="blackSubscription" url={performance.ctaURL} external={true} level={1} colorScheme={1}>Pre-book to watch on BFI Player</PlayButton>
                                        : 
                                        <Button level={1} url={performance.ctaURL}  external={true}>other button text needed</Button>
                                :
                                <Button level={1} disabled>{performance.availability}</Button>
                            }
                        </PerformanceCTA>
                    </Performance>
                )}
            </PerformanceList>
        </Outer>
    )
}