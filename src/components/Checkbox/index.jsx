import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";

const Outer = styled.div`
  position: relative;
`;

const Checkmark = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  opacity: 0;
  left: 10px;
  top: 4px;
  z-index: 100;
  width: 10px;
  height: 17px;
  border: solid ${theme.white};
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg) scale(0);
  -ms-transform: rotate(45deg) scale(0);
  transform: rotate(45deg) scale(0);
  transition: transform 0.25s;
  transition-delay: 0s;
  pointer-events: none;

  @media screen and (min-width: ${theme.l}) {
    left: 13px;
    top: 6px;
    width: 10px;
    height: 20px;
  }
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;

  @media screen and (min-width: ${theme.l}) {
    width: 32px;
    height: 32px;
  }

  &:checked + .checkmark {
    opacity: 1;
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    transition-delay: 0.15s;
  }

  &:hover ~ label {

    &:before {
      background-color: ${theme.lightFocus};
    }
    
    span {
      &:after {
        opacity: 1;
      }
    }
  }

  &:checked ~ label::before {
      background-color: ${theme.primary} !important;
      height: 100%;
    }
  }

  &:focus ~ label {
    &:before {
      background-color: ${theme.focus};
    }

    &:after {
      border: 2px solid ${theme.lightFocus};
    }
    
    span {
      &:after {
        opacity: 1;
      }
    }
  }
`;

const Label = styled.label`
  display: block;
  padding: 0 0 0 43px;
  position: relative;
  min-height: 28px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  
  @media screen and (min-width: ${theme.l}) {
    min-height: 35px;
    padding: 0 0 0 50px;
    font-size: 18px;
    line-height: 24px;
  }

  &:before {
    content: "";
    display: block;
    width: 28px;
    height: 5px;
    position: absolute;
    top: auto;
    right: auto;
    /* bottom: -4px; */
    bottom: 0px;
    left: 0px;
    z-index: 1;
    background-color: ${theme.primary};
    transition: background-color 0.25s, height 0.25s;
    transform-origin: bottom;

    @media screen and (min-width: ${theme.l}) {
      width: 35px;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    display: flex;
    background-color: ${theme.white};
    border: 2px solid ${theme.black};

    @media screen and (min-width: ${theme.l}) {
      width: 31px;
      height: 31px;
    }
  }

  span {
    position: relative;
    font-weight: ${theme.fontWeight_semiBold};

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${theme.black};
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
`;

export const Checkbox = ({ id, name, label, value, onChange, checked }) => (
  <Outer>
    <Input
      id={`Checkbox-${id}`}
      name={name}
      type="checkbox"
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <Checkmark className="checkmark"></Checkmark>
    <Label htmlFor={`Checkbox-${id}`}>
      <span>{label}</span>
    </Label>
  </Outer>
);

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.boolean,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  id: "",
  name: "",
  label: "",
  value: "",
};
