import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import Script from "react-load-script"

const Outer = styled.div`
    .smcx-embed, .smcx-iframe-container {
        max-width: none !important;
    }
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
const SurveyMonkeyContainer = styled.div`
`

export const FeedbackForm = ({
    formURL
}) => {
    const [openFeedback, setOpenFeedback] = useState(false)
    
    return(
        <Outer>
            {openFeedback ?
                <FeedbackContainer>
                    <SurveyMonkeyContainer id="smcx-sdk"></SurveyMonkeyContainer>
                    <Script
                        url={formURL}
                    />
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
    formURL: "https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd9hxa3V5_2FlYXPg9kCnB6_2FG142i_2BHxbMOKeBcVzphTEcm.js"
}
