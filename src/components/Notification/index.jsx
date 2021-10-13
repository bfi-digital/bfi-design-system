import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";

const themes = {
  primary: {
    background: theme.primary,
  },
  dark: {
    background: theme.black,
  },
};

const Outer = styled.div`
  width: 100%;
  display: block;
  padding: 10px;
  background-color: ${(props) => themes[props.theme].background};
  color: ${theme.white};
  font-size: 16px;

  @media screen and (min-width: ${theme.m}) {
  }
`;

const Icon = styled.div``;

const Message = styled.div``;

export const Notification = ({
  message,
  icon,
  theme = "primary",
  ...props
}) => (
  <Outer theme={theme} {...props}>
    <Icon>
    </Icon>
    <Message>{message}</Message>
  </Outer>
);

Notification.propTypes = {
  message: PropTypes.string,
  theme: PropTypes.string,
};

Notification.defaultProps = {
  message: "",
  theme: "primary",
};
