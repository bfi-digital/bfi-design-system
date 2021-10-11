import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";
import { UPCHero } from "./index";
import { Input } from "../Input";

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
        box-shadow: 0px 0px 0px 4px ${theme.focus};
        :after {
            height: 5px;
        }
    }
    @media screen and (min-width: ${theme.m}){
        width: auto;
        left: -2px;
    }
`

export const UPCHeroConfirm = ({ heading, text, email }) => (
  <UPCHero heading={heading} text={text}>
    <Input
        label="Enter your email address"
        required
        autoComplete="Email"
        title="Your Email (required)"
        aria-label="Email"
        className="js-cm-email-input qa-input-email"
        id="fieldEmail"
        maxLength="200"
        name="Email"
        type="email"
        value={email}
        placeholder="Your email..."
        style={{borderRight: '0'}}></Input>
    <SubmitButton type="submit">Submit</SubmitButton>
  </UPCHero>
);

UPCHeroConfirm.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  email: PropTypes.string
};

UPCHeroConfirm.defaultProps = {
  heading: "",
  text: "",
  email: ""
};
