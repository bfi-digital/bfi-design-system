import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";

const themes = {
  success: {
    background: theme.primary,
  },
  error: {
    background: theme.black,
  },
};

const Outer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: ${(props) => themes[props.type].background};
  color: ${theme.white};
  font-size: 16px;
`;

const Icon = styled.div`
  display: block;
  width: 22px;
  height: 22px;
  margin-right: 15px;
`;

const Message = styled.div``;

export const Notification = ({
  message,
  type = "success",
  ...props
}) => (
  <Outer type={type} {...props}>
    {type === 'success' && <Icon>
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 0a11 11 0 1 0 0 21.999A11 11 0 0 0 11 0zm7.58 7.373L8.973 17a.337.337 0 0 1-.474 0L3.42 11.903a.337.337 0 0 1-.087-.236c.001-.09.037-.175.1-.237l1.884-1.886a.335.335 0 0 1 .236-.1c.09 0 .174.037.237.1l2.96 2.963 7.473-7.49a.335.335 0 0 1 .474 0l1.883 1.886c.13.13.13.34 0 .47z"
          fill="#FFF"
          fill-rule="nonzero"
        />
      </svg>
    </Icon>}
    <Message>{message}</Message>
  </Outer>
);

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

Notification.defaultProps = {
  message: "",
  type: "success",
};
