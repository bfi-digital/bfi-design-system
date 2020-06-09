import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import Script from "react-load-script"

const Outer = styled.div`
    overflow: hidden;
    
    .smcx-embed, .smcx-iframe-container {
        max-width: none !important;
        border: none !important;
        height: 400px !important;

        iframe {
            margin-top: -80px;
            height: calc(100% + 80px);
        }
    }
`

const FeedbackBar = styled.button`
    background: ${theme.darkPink};
    border: solid 4px ${theme.darkPink};
    padding: 10px;
    width: 100%;
    color: ${theme.black};
    cursor: pointer;
    font-size: ${theme.small_fontSize_m}; 
    text-align: left;

    strong {
        font-weight: 600;
    }
    &:hover {
        opacity: 0.9;
    }
    &:focus {
        outline: none;
        border: solid 4px ${theme.dark};
    }
    &:active {
        transform: translate(0, 4px);   
    }

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_s};
        padding: 15px ${theme.horizontalPadding};
    }
`
const FeedbackContainer = styled.div`
    border-bottom: 4px solid ${theme.darkPink};
`
const SurveyMonkeyContainer = styled.div`
`

const Loading = styled.div`
    height: 400px;
    width: 100%;
    text-align: center;
    position: relative;

    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
        position: absolute;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid ${theme.darkPink};
        border-color: ${theme.darkPink} transparent ${theme.darkPink} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }      
`

const CloseButton = styled.button`
    width: 100%;
    padding: 10px 15px;
    cursor: pointer;
    background: ${theme.darkPink};
    color: ${theme.white};
    font-weight: 600;
    border: none;
    text-align: right;
    border: 3px solid ${theme.darkPink};

    &:hover {
        background: ${theme.primary};
    }
    &:focus {
        background: ${theme.primary};
        outline: none;
        border: 3px solid ${theme.focus};
    }
`

export const FeedbackForm = ({
    formURL
}) => {
    const [openFeedback, setOpenFeedback] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    
    return(
        <>
            {!isClosed &&
                <Outer>
                    {openFeedback ?
                        <FeedbackContainer>
                            <CloseButton onClick={() => {setIsClosed(true)}}>Close x</CloseButton>
                            {!isLoaded && <Loading><div className="lds-dual-ring"></div></Loading>}
                            <SurveyMonkeyContainer id="smcx-sdk"></SurveyMonkeyContainer>
                            <Script
                                url={formURL}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </FeedbackContainer>
                        :
                        <FeedbackBar onClick={() => {setOpenFeedback(true)}} title="Give us some feedback">
                            This site is currently in <strong>BETA</strong>, help us improve - <strong>Click here to submit feedback</strong>
                        </FeedbackBar>

                    }
                </Outer>
            }
        </>
    )
}


FeedbackForm.propTypes = {
    /** 
	 * Url for the feedback form
    **/
    formURL: PropTypes.string
}

FeedbackForm.defaultProps = {
    formURL: "https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2FEynar573M_2BgVsgqpCxWRtU7vI_2BLEj_2BZgoiKcho8DN8.js"
}
