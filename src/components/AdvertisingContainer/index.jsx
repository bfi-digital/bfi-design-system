import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Outer = styled.div`
    background: ${theme.lightGrey};
    margin-bottom: ${theme.standardSpace}px;
    padding: 10px;
    overflow: hidden;
    p {
        margin-top: 0;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`
const AdvertisingNotice = styled.p`
    color: ${theme.darkGrey};
    margin-top: 0;
    margin-bottom: 5px !important;
    font-size: ${theme.small_fontSize_m};
`

export const AdvertisingContainer = ({
    children,
    withCaption
}) =>
    <Outer>
        {withCaption && 
            <AdvertisingNotice>Advertisement</AdvertisingNotice>
        }
        { children ?
            <>{children}</>
            :
            <p>Advertisement failed to load</p>
        }
    </Outer>

AdvertisingContainer.propTypes = {
    /** 
	 * Optionally, adds an advertising caption to the top of the frame. Should always be set as true, accept when there is a seperate title being used.
	 **/
    withCaption: PropTypes.bool
}

AdvertisingContainer.defaultProps = {
    withCaption: true
}