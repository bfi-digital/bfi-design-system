import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { LinkSwitch as Link } from "../LinkSwitch"


const Outer = styled.div`
    background: ${theme.lightest};
    margin: 0 auto;
    margin-bottom: ${theme.standardSpace*2}px;
    margin-top: ${theme.standardSpace}px;
    padding: 15px;
    display: block;
    text-align: left;

    p {
        margin-top: 0;
        margin-bottom: ${theme.standardSpace}px;
        @media screen and (min-width: ${theme.m}){
            margin-bottom: 25px;
            max-width: 75%;
        }
        @media screen and (min-width: ${theme.l}){
            max-width: 100%;
        }
    }

    @media screen and (min-width: ${theme.m}){
        padding: ${theme.standardSpace}px;
        padding: ${theme.standardSpace}px 125px;
    }
    @media screen and (min-width: ${theme.l}){
        text-align: center;
    }
`
const NewsletterForm = styled.form`
    @media screen and (min-width: ${theme.l}){
        display: flex;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-start;
    }

    @media screen and (min-width: ${theme.m}) {

    }
    @media screen and (min-width: ${theme.l}){
        justify-content: center;
    }


    label {
        text-align: left;
        flex: 1 0 auto;

        @media screen and (min-width: ${theme.l}) {
            flex: 0 0 auto;
        }

    }
    input {
        display: block;
        margin-top: 5px;
        padding: 13px 10px;
        padding-top: 12px;        
        font-size: ${theme.fontSize_s};
        border: 2px solid ${theme.black};
        
        border-bottom: 5px solid ${theme.primary};
        transition: border .3s;
        width: 100%;

        &:hover {
            border-bottom: 5px solid ${theme.lightFocus};
        }
        &:focus {
            border: 2px solid ${theme.lightFocus};
            border-bottom: 5px solid ${theme.focus};
            outline: none;
        }
        @media screen and (min-width: ${theme.l}){
            width: 300px;
            border-right: none;
        }
    }
`
const NewsletterLabel = styled.label`
    display: inline-block;
    font-weight: ${theme.fontWeight_semiBold};
    width: 100%;

    @media screen and (min-width: ${theme.l}){
        width: auto;
    }
`
const SubmitButton = styled.button`
    display: inline-block;
    position: relative;
    font-weight: ${theme.fontWeight_bold};
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    color: ${theme.white};
    background: ${theme.black};
    text-decoration: none;
    padding: 9.5px ${theme.standardSpace-1}px;
    z-index: 2;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border: none;
    width: 100%;
    border: 2px solid ${theme.black};
    margin-bottom: 4px;
    
    top: 1px;

    @media screen and (min-width: ${theme.l}){
        white-space: nowrap;
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
        box-shadow: 0px 0px 0px 4px ${theme.focus};
        :after {
            height: 5px;
        }
    }
    @media screen and (min-width: ${theme.l}){
        width: auto;
        left: -2px;
    }
`

const CallToAction = styled(Link)`
    color: ${theme.black};
    text-decoration: none;
    font-weight: ${theme.fontWeight_semiBold};
    position: relative;
    background-image: linear-gradient(120deg, ${theme.primary} 0%, ${theme.primary} 100%);
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 0 100%;
    transition: all 0.15s ease-in-out;

    &:hover{
        color: ${theme.white};
        background-size: 100% 100%;
    }
    &:focus{
        background-size: 100% 100%;
        color: ${theme.white};
        outline: none;
        background-image: linear-gradient(120deg, ${theme.focus} 0%, ${theme.focus} 100%);
    }
    &:active{
        outline: none;
        text-decoration: underline;
    }
`

const CallToActionGroup = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    p {
        margin-top: 0px;
        margin-bottom: 10px;
    }
`

export const NewsletterSignUpUserPreferenceCentre = ({title, desc, changePreferencesUrl, onSignUp}) => {
    const [email, setEmail] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if(typeof onSignUp === "function") {
            onSignUp(email)
        }

    }

    function onChangeEmail(e) { setEmail(e.target.value) }

    return(
        <Outer>
            <Headline level={6} text={title} />
            <p>{desc}</p>
            <NewsletterForm
                onSubmit={handleSubmit}
                id="newsletter-signup-form"
            >
                <NewsletterLabel>
                    Email 
                    <input
                        required
                        autoComplete="Email"
                        title="Your Email (required)"
                        aria-label="Email"
                        id="fieldEmail"
                        maxLength="200"
                        type="email"
                        placeholder="Your email..."
                        onChange={onChangeEmail}
                    />
                </NewsletterLabel>
                <SubmitButton type="submit">Sign up</SubmitButton>
            </NewsletterForm>

            <CallToActionGroup>
                <p>Already have an account?</p>
                <CallToAction to={changePreferencesUrl}>Change my mail preferences</CallToAction>
            </CallToActionGroup>
        </Outer>
    )
}

NewsletterSignUpUserPreferenceCentre.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    changePreferencesUrl: PropTypes.string.isRequired,
    onSignUp: PropTypes.func
}

NewsletterSignUpUserPreferenceCentre.defaultProps = {
    title: "",
    desc: "",
}
