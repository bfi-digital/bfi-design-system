import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import Script from "react-load-script"
import { Headline } from "../Headline"

const Outer = styled.div`
    background: ${theme.lightest};
    margin: 0 auto;
    margin-bottom: 25px;
    padding: 15px;
    display: block;

    h3 {   
        margin-top: 0;
        margin-bottom: 15px;
    }
    p {
        margin-top: 0;
    }

    @media screen and (min-width: ${theme.m}){
        padding: 25px;
    }
`
const NewsletterForm = styled.form`
    input {
        display: block;
        margin-top: 5px;
        padding: 10px 10px;
        padding-top: 12px;        
        font-size: 1rem;
        border: none;
        border-bottom: 5px solid ${theme.grey};
        transition: border .3s;
        width: 100%;

        &:hover {
            border-bottom: 5px solid ${theme.darkGrey};
        }
        &:focus {
            border-bottom: 5px solid ${theme.focus};
            outline: none;
        }
        @media screen and (min-width: ${theme.m}){
            width: 300px;
        }
    }
`
const NewsletterLabel = styled.label`
    display: inline-block;
    font-weight: 600;
    width: 60%;
    @media screen and (min-width: ${theme.m}){
        width: auto;
    }
`
const SubmitButton = styled.button`
    display: inline-block;
    position: relative;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${theme.white};
    background: ${theme.black};
    text-decoration: none;
    padding: 10px 25px;
    z-index: 2;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border: none;
    width: 40%;
    @media screen and (min-width: ${theme.m}){
        width: auto;
    }

    :after {
        content: "";
        width: 100%;
        height: 5px;
        transition: height .3s;
        position: absolute;
        bottom: -5px;
        left: 0;
        background: ${theme.primary};
        z-index: -1;
    }

    &:hover, &:focus{
        color: ${theme.white};
        
        :after {
            height: calc(100% + 5px);
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
`

export const NewsletterSignUp = ({
    title,
    description,
    callToActionTitle,
    newsletterID
}) => {
    return(
        <Outer>
            {title && <Headline level={3} text={title} />}
            {description && <p>{description}</p> }
            <NewsletterForm className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id={newsletterID}>
                {/* <NewsletterLabel>
                    Name 
                    <input aria-label="Name" id="fieldName" maxLength="200" name="cm-name" />
                </NewsletterLabel>                */}
                <NewsletterLabel>
                    Email 
                    <input autoComplete="Email" aria-label="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxLength="200" name="cm-zyuiii-zyuiii" required type="email" placeholder="Your email..." />
                </NewsletterLabel>
                <SubmitButton type="submit">{callToActionTitle}</SubmitButton>
            </NewsletterForm>
            <Script
                url="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
                // onCreate={console.log("create")}
                // onError={console.log("error")}
                // onLoad={console.log("load")}
            />
        </Outer>
    )
}


NewsletterSignUp.propTypes = {
    /** 
	 * The title of the newsletter section
    **/
    title: PropTypes.string,
    /** 
	 * The description for the neswletter sign up
    **/
    description: PropTypes.string,
    /** 
     * The button text
    **/
    callToActionTitle: PropTypes.string,
    /** 
     * The unique ID to define which form this connects to
    **/
    newsletterID: PropTypes.string
}

NewsletterSignUp.defaultProps = {
    title: "Sign up to our newsletter",
    callToActionTitle: "Subscribe",
    newsletterID: "191722FC90141D02184CB1B62AB3DC265D39BA39753E45C7A8F631C18C2D9EAB3F100B5CD60F795E8807A6639DDD564AC68BA5CA501EA9C4FF9B1A55DE11F1D0"
}
