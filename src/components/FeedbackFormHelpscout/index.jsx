import React, {useRef, useState} from "react"
import styled from "styled-components"
import theme from "../_theme"
// import PropTypes from "prop-types"
import { Text } from "../Text"

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
        font-weight: ${theme.fontWeight_semiBold};
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

const CloseButton = styled.button`
    width: 100%;
    padding: 10px 15px;
    cursor: pointer;
    background: ${theme.darkPink};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    border: solid 4px ${theme.darkPink};
    text-align: right;
    border: 3px solid ${theme.darkPink};

    &:hover {
        background: ${theme.primary};
    }
    &:focus {
        outline: none;
        border: solid 4px ${theme.dark};
    }
`
const FeedbackInner = styled.div`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: ${theme.standardSpace}px 0;
`

const FeedbackInnerComplete = styled(FeedbackInner)`
    div {
        margin-bottom: 0;
    }
`

const FeedbackFormContainer = styled.form`
    label {
        font-weight: ${theme.fontWeight_semiBold};
    }
    textarea {
        display: block;
        margin-top: 5px;
        padding: 13px 10px;
        padding-top: 12px;        
        font-size: ${theme.fontSize_s};
        border: 2px solid ${theme.black};
        border-bottom: 5px solid ${theme.primary};
        transition: border .3s;
        width: 100%;
        max-width: 600px;
        margin-bottom: 15px;

        &:hover {
            border-bottom: 5px solid ${theme.lightFocus};
        }
        &:focus {
            border: 2px solid ${theme.lightFocus};
            border-bottom: 5px solid ${theme.focus};
            outline: none;
        }
    }
    button[type=submit] {
        position: relative;
        font-weight: ${theme.fontWeight_bold};
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
        color: ${theme.white};
        background: ${theme.black};
        text-decoration: none;
        padding: 10px ${theme.standardSpace}px;
        z-index: 2;
        width: 100%;
        text-align: center;
        cursor: pointer;
        border: none;
        width: 100%;
        border: 1px solid ${theme.black};
        margin-bottom: ${theme.standardSpace}px;
        
        @media screen and (min-width: ${theme.s}){
            width: auto;
        }

        :after {
            content: "";
            width: calc(100% + 4px);
            height: 5px;
            transition: height .3s;
            position: absolute;
            bottom: -5px;
            left: -2px;
            background: ${theme.primary};
            z-index: -1;
        }

        &:hover, &:focus{
            color: ${theme.white};
            
            :after {
                height: calc(100% + 7px);
            }
        }
        &:focus{
            box-shadow: 0px 0px 0px 4px ${theme.focus};
            outline: none;
            height: auto;

            :after {
                bottom: 0;
                height: 100%;
            }
        }
        &:active{
            background: ${theme.black};
            box-shadow: none;
            transform: translate(0, 5px);   
            :after {
                height: 1px;
                bottom: -1px;
            }
        }
        @media screen and (min-width: ${theme.m}){
            width: auto;
        }
    }
`

export const FeedbackForm = ({
    submissionFunction, // (feedback, url) => Promise<Response>
}) => {
    const [openFeedback, setOpenFeedback] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const closeButtonRef = useRef()

    const useInput = initialValue => {
        const [value, setValue] = useState(initialValue)

        return {
            value,
            setValue,
            reset: () => setIsComplete(true),
            bind: {
                value,
                onChange: event => {
                    setValue(event.target.value)
                }
            }
        }
    }
    const { value, bind, reset } = useInput("")

    const handleSubmit = (evt) => {
        submissionFunction(value, window.location.href).then(function(response) {
            console.log(response)
            reset()
            return response.json()
        })
        closeButtonRef.current && closeButtonRef.current.focus()
        evt.preventDefault()
    }

    return(
        <>
            {!isClosed &&
                <Outer>
                    {openFeedback ?
                        <FeedbackContainer>
                            <CloseButton ref={closeButtonRef} onClick={() => {setIsClosed(true)}}>Close x</CloseButton>
                            {!isComplete ?
                                <FeedbackInner>
                                    <Text><p>We’d like to hear your thoughts as we’re always trying to improve our services.
                                    Please do not share any personal information.</p></Text>
                                    <FeedbackFormContainer onSubmit={handleSubmit}>
                                        <label htmlFor="feedback">Your feedback</label>
                                        <textarea name="feedback" id="feedback" required {...bind} />
                                        <button type="submit">Send feedback</button>
                                        <Text><p>You can read our <a href="https://www.bfi.org.uk/bfi-privacy-policy">Privacy Policy here</a>.</p></Text>
                                    </FeedbackFormContainer>
                                </FeedbackInner>
                                :
                                <FeedbackInnerComplete>
                                    <Text><p role="alert">Thank you for your feedback.</p></Text>
                                </FeedbackInnerComplete>
                            }
                        </FeedbackContainer>
                        :
                        <FeedbackBar onClick={() => {setOpenFeedback(true)}} title="Give us some feedback">
                            <strong>Is something missing from this page?</strong> Your feedback helps us.
                        </FeedbackBar>

                    }
                </Outer>
            }
        </>
    )
}
