import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
// import { ReactTypeformEmbed } from "react-typeform-embed"

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
    typeFormURL
}) => {
    const [openFeedback, setOpenFeedback] = useState(false)
    const embed = "<div><h1 color='#000'>Get the latest from Marketing</h1><form class='js-cm-form' id='subForm' action='https://www.createsend.com/t/subscribeerror?description=' method='post' data-id='191722FC90141D02184CB1B62AB3DC265D39BA39753E45C7A8F631C18C2D9EAB3F100B5CD60F795E8807A6639DDD564AC68BA5CA501EA9C4FF9B1A55DE11F1D0'><div><div><label>Name </label><input aria-label='Name' id='fieldName' maxlength='200' name='cm-name'></div><div><label>Email </label><input autocomplete='Email' aria-label='Email' class='js-cm-email-input qa-input-email' id='fieldEmail' maxlength='200' name='cm-zyuiii-zyuiii' required=' type='email'></div></div><button type='submit'>Subscribe</button></form></div><script type='text/javascript' src='https://js.createsend1.com/javascript/copypastesubscribeformlogic.js'></script>"
    
    return(
        <Outer>
            {openFeedback ?
                <FeedbackContainer>
                    {/* <ReactTypeformEmbed 
                        popup={false} 
                        url={typeFormURL + "?currenturl=" + window.location.pathname + window.location.search}
                        hideHeaders
                        hideFooter
                        buttonText="Give Feedback"
                        style={{ height: "300px", width: "100%", position: "relative" }}
                    /> */}
                    <div dangerouslySetInnerHTML={{__html: embed}}></div>
                </FeedbackContainer>
                :
                <FeedbackBar onClick={() => {setOpenFeedback(true)}} title="Give us some feedback">
                    This site is currently in <strong>BETA</strong>, help us improve with feedback - <strong>Is there anything wrong with this page? {typeFormURL}</strong>
                </FeedbackBar>
            }
        </Outer>
    )
}


FeedbackForm.propTypes = {
    /** 
	 * Url for the feedback form - e.g. https://deesondesign.typeform.com/to/cK12uT
    **/
    typeFormURL: PropTypes.string
}

FeedbackForm.defaultProps = {
    typeFormURL: "formurl"
}
