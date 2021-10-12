import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";

const ButtonInputEl = styled.button`
  display: inline-block;
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
  border: 0;

  svg {
    fill: ${theme.white};
  }

  :after {
    content: "";
    width: 100%;
    height: 5px;
    transition: height 0.3s;
    position: absolute;
    bottom: -5px;
    left: 0;
    background: ${theme.primary};
    z-index: -1;
  }

  &:hover,
  &:focus {
    color: ${theme.white};

    svg {
      fill: ${theme.white};
    }

    :after {
      height: calc(100% + 5px);
    }
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px ${theme.focus};
    outline: none;
    height: auto;

    :after {
      bottom: 0;
      height: 100%;
    }
  }
  &:active {
    background: ${theme.dark} !important;
    box-shadow: none;
    transform: translate(0, 5px);
    :after {
      height: 1px;
      bottom: -1px;
    }
  }
  @media screen and (min-width: ${theme.m}) {
    width: auto;
  }
`;

const DisabledButtonInput = styled.div`
  background: ${theme.darkGrey};
  color: ${theme.white};
  cursor: not-allowed;
  display: inline-block;
  position: relative;
  font-weight: ${theme.fontWeight_bold};
  font-size: ${theme.fontSize_m};
  line-height: ${theme.lineHeight_m};
  text-decoration: none;
  padding: 10px ${theme.standardSpace}px;
  z-index: 2;
  width: 100%;
  text-align: center;
  @media screen and (min-width: ${theme.m}) {
    width: auto;
  }
`;

export const ButtonInput = ({
  children,
  title,
  disabled,
  buttonType,
  onClick,
  ...props
}) => {
  if (disabled)
    return (
      <DisabledButtonInput
        title={title ? title : ''}
        disabled={disabled}
        type={buttonType}
        onClick={onClick}
        {...props}
      >
        {children}
      </DisabledButtonInput>
    );
  return (
    <ButtonInputEl
      title={title ? title : ''}
      disabled={disabled}
      type={buttonType}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonInputEl>
  );
};

ButtonInput.propTypes = {
  title: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonInput.defaultProps = {
  colorScheme: 0,
  disabled: false,
};
