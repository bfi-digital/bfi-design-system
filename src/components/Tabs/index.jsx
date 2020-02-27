import React, { useState } from "react"
import styled from "styled-components"

const Tabs = styled.div``

const TabList = styled.ul``

const Tab = ({
    children,
    openTab,
    setOpenTab,
    i
}) =>
    <li role="presentation">
        <a 
            role="tab"
            id={`tab${i}`}
            href={`#section${i}`}
            aria-selected={openTab === i}
            onClick={() => setOpenTab(i)}
        >
            {children}
        </a>
    </li>

const TabPanel = ({
    children,
    i,
    openTab
}) =>
    <section 
        role="tabpanel"
        id={`section${i}`}
        aria-labelledby={`tab${1}`}
        hidden={openTab !== i}
    >
        {children}
    </section>


export const ShowingTabs = () => {
    const [openTab, setOpenTab ] = useState(1)
    return(
        <Tabs>

            <TabList role="tablist">
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
                Tab 1 content
            </TabPanel>
            <TabPanel i={2} openTab={openTab}>
                Tab 2 content
            </TabPanel>
            <TabPanel  i={3} openTab={openTab}>
                Tab 3 content
            </TabPanel>

        </Tabs>
    )
}