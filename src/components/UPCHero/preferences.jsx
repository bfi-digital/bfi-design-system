import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";
import { UPCHero } from "./index";
import { Input } from "./input";

export const UPCHeroPreferences = ({ heading, text, email }) => (
  <UPCHero heading={heading} text={text}>
    <Input
      label="Your email address"
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
      placeholder="Your email..."></Input>
  </UPCHero>
);

UPCHeroPreferences.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  email: PropTypes.string
};

UPCHeroPreferences.defaultProps = {
  heading: "",
  text: "",
  email: ""
};
