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
  padding: 13px ${theme.standardSpace}px 13px;
  z-index: 2;
  width: 100%;
  text-align: center;
  border: 0;
  flex-grow: 0;

  @media screen and (min-width: ${theme.l}) {
    width: auto;
  }

  svg {
    fill: ${theme.white};
  }

  :after {
    content: "";
    width: 100%;
    height: 5px;
    transition: height 0.3s;
    position: absolute;
    /* bottom: -5px; */
    bottom: 0;
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
      height: 100%;
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
      height: 5px;
      bottom: -1px;
    }
  }

  .FormField-group & {
    
    @media screen and (min-width: ${theme.m}) {
      /* left: -2px; */
    }

    &:active {
      box-shadow: none;
      transform: translate(0, 0);

      :after {
        bottom: 0;
      }
    }
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
  padding: 13px ${theme.standardSpace}px 13px;
  z-index: 2;
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${theme.l}) {
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
