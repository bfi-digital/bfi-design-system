import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FormGroup } from "./index"

export default {
    title: "4 Components/All/FormGroup",
    decorators: [withA11y]
}

const title =  'Watch and discover';
const group = 
{
    title: 'Watch and discover',
    items: [
        {
            id: '9459f381-cf0b-4b7b-8929-408b5dd77163',
            heading: 'BFI Southbank',
            badge: 'Weekly',
            description: 'The best classic and new cinema, TV, live events and Q&As at the home of cinema in London',
            initialValue: '',
        },
        {
            id: '0616d110-399e-4e5d-8927-426debe83eda',
            heading: '25 & Under',
            badge: 'Monthly',
            description: 'Are you 25 or under? Sign up to hear about our... about programme',
            initialValue: ''
        },
        {
            id: 'aacf0a7c-a7b3-42e9-8a80-51218505bcf9',
            heading: 'BFI Flare',
            badge: 'Quarterly',
            description: 'The latest news and ticket release updates from the ... LGBTIQ+ Film Festival',
            initialValue: '',
        },
        {
            id: 'd3df04df-b899-4467-85cf-1e556e268203',
            heading: 'BFI London Film Festival',
            badge: 'Yearly',
            description: '#LFF news, competitions and ticket release updates ...',
            initialValue: '',
        }
    ]
};
// const data = [
//     {
//         groupName: '',
//         items: [
//             {
//                 id: '',
//                 title: '',
//                 frequency: '',
//                 description: '',
//                 initialValue
//             }
//         ]
//     },
//     {
//         groupName: '',
//         items: [
//             {
//                 id: '',
//                 title: '',
//                 frequency: '',
//                 description: '',
//                 initialValue
//             }
//         ]
//     },
//     {
//         groupName: '',
//         items: [
//             {
//                 id: '',
//                 title: '',
//                 frequency: '',
//                 description: '',
//                 initialValue
//             }
//         ]
//     },
// ]
    
// location
// frequency
// title
// description
// id
// InitialValue

export const normal = () =>
    <div style={{padding: "20px"}}>
        <FormGroup title={group.title} items={group.items}></FormGroup>
    </div>