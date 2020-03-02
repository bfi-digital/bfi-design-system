import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { TabList, Tab, TabPanel } from "../Tabs"
import { HighlightCard } from "./HighlightCard"

const Outer = styled.div``



export const Highlights = () => {
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
            <TabPanel i={1} openTab={openTab}>
                <HighlightCard
                    image480x320="https://placehold.it/480x320"
                    imageAltText=""
                    caption="Current season"
                    title="Fellini Season, Jan-Feb 2020"
                    description="The great Italian director’s centenary will be celebrated with a major two-month retrospective at BFI Southbank."
                    callToActionUrl="#"
                />
            </TabPanel>
            <TabPanel i={2} openTab={openTab}>
                Tab 2 content
            </TabPanel>
            <TabPanel  i={3} openTab={openTab}>
                Tab 3 content
            </TabPanel>
        </Outer>
    )
}