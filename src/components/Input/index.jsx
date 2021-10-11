import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";

const Control = styled.div`
  max-width: 416px;
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  font-weight: ${theme.fontWeight_semiBold};
  width: 100%;
`;

const InputEl = styled.input`
  display: block;
  margin-top: 5px;
  padding: 13px 10px;
  padding-top: 12px;
  font-size: ${theme.fontSize_s};
  border: 2px solid ${theme.black};

  border-bottom: 5px solid ${theme.primary};
  transition: border 0.3s;
  width: 100%;

  &:hover {
    border-bottom: 5px solid ${theme.lightFocus};
  }

  &:focus {
    border: 2px solid ${theme.lightFocus};
    border-bottom: 5px solid ${theme.focus};
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: ${theme.fontSize_s};
    font-weight: ${theme.fontWeight_semiBold};
    color: ${theme.black};
  }

  :-ms-input-placeholder {
    font-size: ${theme.fontSize_s};
    font-weight: ${theme.fontWeight_semiBold};
    color: ${theme.black};
  }
`;

export const Input = ({
  label,
  required,
  autoComplete,
  title,
  ariaLabel,
  id,
  maxLength,
  name,
  type,
  value,
  placeholder,
  style,
  onChange,
}) => (
  <Control>
    <Label>
      {label}
      <InputEl
        required={required}
        autoComplete={autoComplete}
        title={title}
        aria-label={ariaLabel}
        id={id}
        maxLength={maxLength}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        style={style}
        onChange={onChange}
      ></InputEl>
    </Label>
  </Control>
);

Input.propTypes = {
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: "",
  id: "",
  name: "",
  heading: "",
  text: "",
  email: "",
  value: "",
};
