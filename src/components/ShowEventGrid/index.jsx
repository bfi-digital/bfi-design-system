import React from "react"
import styled from "styled-components"
// import theme from "../_theme"
import { EventCard } from "./EventCard"
import { Scroller } from "../Scroller"

// const Outer = styled.div`
//     margin: 15px 0;
//     padding: 15px 0;
//     padding-top: 15px;
//     margin-top: ${theme.standardSpace}px;
//     position: relative; 

//     h2 {
//         margin-top: 0;
//         margin-bottom: ${theme.standardSpace}px;
//         text-align: center;
//     }

//     &:before {
//         display: none;
//         content: "";
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         left: -9998px;
//         right: 0;
//         box-shadow: 9999px 0 0 ${theme.grey};
//         border-left: 9999px solid ${theme.grey};
//         z-index: -1;
//     }
// `
const Events = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
`
export const ShowEventGrid = ({
    events,
    asScroller,
    pageWithSidebar,

    favouritable,
    onFavourite,
    onUnfavourite
}) => {
    const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
        condition ? wrapper(children) : wrapper2(children)
    
    return(
        <ConditionalWrapper
            condition={asScroller && events.length > 4}
            wrapper={children => <Scroller noOfChildren={events.length} classes="showevent_grid_block_scroller">{children}</Scroller>}
            wrapper2={children => <Events className="showevent_grid_block">{children}</Events>}
        >
            {events.map(event =>
                <EventCard 
                    inScroller={asScroller && events.length > 4} 
                    favouritable={favouritable} 
                    onFavourite={onFavourite} 
                    onUnfavourite={onUnfavourite} 
                    key={event.id} 
                    pageWithSidebar={pageWithSidebar}
                    {...event}
                />    
            )}
        </ConditionalWrapper>
    )
}
