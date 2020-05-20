import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import parse from "html-react-parser"

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
    formEmbed
}) => {
    const [openFeedback, setOpenFeedback] = useState(false)

    return(
        <Outer>
            {openFeedback ?
                <FeedbackContainer>
                    {parse('<script>(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd9hxa3V5_2FlYXPg9kCnB6_2FG142i_2BHxbMOKeBcVzphTEcm.js"].join(""),a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");</script><a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href=https://www.surveymonkey.com> Create your own user feedback survey </a>')}
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
	 * The embed code
    **/
   formEmbed: PropTypes.string
}

FeedbackForm.defaultProps = {
    typeFormURL: '<script>(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd9hxa3V5_2FlYXPg9kCnB6_2FG142i_2BHxbMOKeBcVzphTEcm.js"].join(""),a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");</script><a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href=https://www.surveymonkey.com> Create your own user feedback survey </a>'
}
