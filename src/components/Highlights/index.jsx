import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"
import { TabList, Tab, TabPanel } from "../Tabs"
import { HighlightCard } from "./HighlightCard"
import { PromoBanner } from "../PromoBanner"
import { FilmShowing } from "../FilmShowing"
import { Button } from "../Button"

const Outer = styled.div`
    margin-bottom: 55px;
`

const Grid = styled.div`
    @media screen and (min-width: ${theme.m}){
        display: flex;
        flex-direction: row;
    }
`

const Showings = styled.div`
    @media screen and (min-width: ${theme.m}){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        div{
            max-width: calc(50% - 12.5px);
            margin-right: ${theme.standardSpace};
            min-height: calc(50% - 18px);
        }
        div:nth-of-type(even){
            margin-right: 0px;
        }
    }
`

const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

export const Highlights = ({
    highlight,
    todayHighlight,
    todayShowings,
    weekHighlight,
    weekShowings,
    allShowingsUrl
}) => {
    const [openTab, setOpenTab ] = useState(1)

    return(
        <Outer>
            <TabList>
                <Tab i={1} openTab={openTab} setOpenTab={setOpenTab}>
                    Highlight
                </Tab>
                <Tab i={2} openTab={openTab} setOpenTab={setOpenTab}>
                    Showing today
                </Tab>
                <Tab i={3} openTab={openTab} setOpenTab={setOpenTab}>
                    Showing this week
                </Tab>
            </TabList>
            <TabPanel  i={1} openTab={openTab}>
                <PromoBanner 
                    colorScheme={1}
                    headline={highlight.title}
                    description={highlight.description}
                    image={highlight.image600x600}
                    callToActionTitle={highlight.callToActionTitle}
                    callToActionUrl={highlight.callToActionUrl}
                />
            </TabPanel>
            <TabPanel i={2} openTab={openTab}>
                <Grid>
                    <HighlightCard
                        image480x270={todayHighlight.image480x270}
                        imageAltText={todayHighlight.imageAltText}
                        caption={todayHighlight.caption}
                        title={todayHighlight.title}
                        description={todayHighlight.description}
                        callToActionUrl={todayHighlight.callToActionUrl}
                        callToActionTitle={todayHighlight.callToActionTitle}
                    />
                    <Showings>
                        {todayShowings.map(film =>
                            <FilmShowing key={film.uuid} {...film}/>
                        )}
                    </Showings>
                </Grid>
                <CentredButton url={allShowingsUrl}>All showings</CentredButton>
            </TabPanel>
            <TabPanel i={3} openTab={openTab}>
                <Grid>
                    <HighlightCard
                        image480x270={weekHighlight.image480x270}
                        imageAltText={weekHighlight.imageAltText}
                        caption={weekHighlight.caption}
                        title={weekHighlight.title}
                        description={weekHighlight.description}
                        callToActionUrl={weekHighlight.callToActionUrl}
                        callToActionTitle={weekHighlight.callToActionTitle}
                    />
                    <Showings>
                        {weekShowings.map(film =>
                            <FilmShowing key={film.uuid} {...film}/>
                        )}
                    </Showings>
                </Grid>
                <CentredButton url={allShowingsUrl}>All showings</CentredButton>
            </TabPanel>
        </Outer>
    )
}

Highlights.propTypes = {
    /** 
    * Object with keys for the full-width highlight on the first tab
    **/
    highlight: PropTypes.object,
    /** 
    * Object with keys for the tall highlight on the second tab
    **/
    todayHighlight: PropTypes.object,
    /** 
    * Array of objects with keys for each film, its date and an array of showtime objects
    **/
    todayShowings: PropTypes.array,
    /** 
    * Object with keys for the tall highlight on the third tab
    **/
    weekHighlight: PropTypes.object,
    /** 
    * Array of objects with keys for each film, its date and an array of showtime objects
    **/
    weekShowings: PropTypes.array
}