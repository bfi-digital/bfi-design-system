import React, { useState } from "react"
import { withA11y } from "@storybook/addon-a11y"
import { TabList, Tab, TabPanel } from "./index"

export default {
    title: "All Components/Tabs",
    decorators: [withA11y]
}

const Tabs = () => {
    const [openTab, setOpenTab ] = useState(1)
    return(
        <>
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
                Tab 1 content
            </TabPanel>
            <TabPanel i={2} openTab={openTab}>
                Tab 2 content
            </TabPanel>
            <TabPanel  i={3} openTab={openTab}>
                Tab 3 content
            </TabPanel>
        </>
    )
}

export const primary = () => 
    <div style={{padding: "20px", maxWidth: "650px"}}>
        <Tabs/>
    </div>
