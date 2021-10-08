import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Selectbox } from "./index"

export default {
    title: "4 Components/All/Selectbox",
    decorators: [withA11y]
}

const items = [
    {
        label: 'International – Rest of world',
        value: '29bcb9c3-7429-4c08-bb8f-0123490a0193',
    },
    {
        label: 'North West England',
        value: '8a14ff70-1260-41f4-a9c8-039520c7fec7',
    },
    {
        label: 'East of England',
        value: '2695374d-2652-4df0-89b8-197f09d7dc46',
    },
    {
        label: 'South West England',
        value: 'd79b9900-33fc-40ef-9587-3151846497fe',
    },
    {
        label: 'West Midlands',
        value: '40c18eb6-38a9-4887-86fd-33609df537b3',
    },
    {
        label: 'Wales',
        value: '1f0a91e1-763a-498b-a077-3bfd513f11f3',
    },
    {
        label: 'East Midlands',
        value: 'eb6428ef-4ff7-43ff-9402-47f5321caf29',
    },
    {
        label: 'International – United States',
        value: '168e7ba5-9b80-4f90-983a-52f5921080c8',
    },
    {
        label: 'Scotland',
        value: '1c883305-4dff-49eb-ac8e-5d53132fe221',
    },
    {
        label: 'Yorkshire',
        value: '5ccee442-d67b-4ebc-bc25-7a2912bf6782',
    },
    {
        label: 'Northern Ireland',
        value: '28eeba0e-aeb4-4c26-bcd2-a1d143c96e46',
    },
    {
        label: 'South East England',
        value: '7ca9eada-7677-447b-86da-bcd20e69b2f9',
    },
    {
        label: 'North East England',
        value: 'ff2f825d-50e8-4c31-9a06-ddbeff5f521e',
    },
    {
        label: 'London',
        value: '8342fde3-050e-4325-b0fe-f2ceedc5566a',
    },
]



export const normal = () =>
    <div style={{padding: "20px"}}>
        <Selectbox label="What is your location? (Optional)" items={ items } placeholder="Please select one"></Selectbox>
    </div>