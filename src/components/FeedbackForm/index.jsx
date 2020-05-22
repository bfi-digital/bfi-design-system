import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
// import Script from "react-load-script"

const Outer = styled.div`
    
`

const FeedbackBar = styled.button`
    background: ${theme.dark};
    padding: 15px ${theme.horizontalPadding};
    width: 100%;
    color: ${theme.white};
    cursor: pointer;
    font-size: 1rem;
    border: none;
    text-align: left;

    strong {
        font-weight: 600;
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 0px 4px ${theme.focus};
    }
    &:active {
        transform: translate(0, 4px);   
    }
`
const FeedbackContainer = styled.div`
    border-top: 8px solid ${theme.dark};
    border-bottom: 4px solid ${theme.dark};
`

export const FeedbackForm = ({
    formURL
}) => {
    const [openFeedback, setOpenFeedback] = useState(false)

    
    return(
        <Outer>
            {openFeedback ?
                <FeedbackContainer>
                    <p>feedback form here {formURL}</p>
                    {/* <Script
                        url="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
                        onCreate={console.log("create")}
                        onError={console.log("error")}
                        onLoad={console.log("load")}
                        /> */}
                </FeedbackContainer>
                :
                <FeedbackBar onClick={() => {setOpenFeedback(true)}} title="Give us some feedback">
                    This site is currently in <strong>BETA</strong>, help us improve with feedback - <strong>Is there anything wrong with this page?</strong>
                </FeedbackBar>
            }
        </Outer>
    )
}


FeedbackForm.propTypes = {
    /** 
	 * Url for the feedback form
    **/
    formURL: PropTypes.string
}

FeedbackForm.defaultProps = {
    formURL: "formurl"
}
