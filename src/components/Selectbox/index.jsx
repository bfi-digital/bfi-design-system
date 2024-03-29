import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"

const Label = styled.label`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

const LabelText = styled.span`
  flex-basis: 100%;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: ${theme.fontWeight_semiBold};
`

const Control = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  
  @media screen and (min-width: ${theme.l}) {
    max-width: 416px;
  }

  &:focus-within {
    &:before {
      background-color: ${theme.focus};
    }
  }

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    position: absolute;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0px;
    z-index: 1;
    background-color: ${theme.primary};
    transition: background-color 0.25s, height 0.25s;
    transform-origin: bottom;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    bottom: auto;
    left: auto;
    display: block;
    width: 0;
    height: 0;
    transform: translateY(-50%);
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-top: 15px solid ${theme.black};
    pointer-events: none;
  }
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex-basis: 100%;
  padding: 14px 12px 18px;
  background-color: ${theme.white};
  border: 2px solid ${theme.black};
  border-radius: 0;
  padding-right: 62px;
  font-size: 17px;
  font-weight: ${theme.fontWeight_semiBold};

  &:hover {
    border: 2px solid ${theme.lightFocus};
  }

  &:active,
  &:focus {
    outline: 0;
    border-radius: 0;
    border: 2px solid ${theme.lightFocus};
  }
`

const Option = styled.option``

export const SelectWrapper = ({ label, children, ...params }) => (
    <Label {...params}>
        <LabelText>{label}</LabelText>
        <Control>
            {children}
        </Control>
    </Label>
)

export const Selectbox = ({ id, placeholder, items, label, value, onChange }) => (
    <SelectWrapper label={label}>
        <Select id={id} onChange={onChange} value={value}>
            {placeholder && <Option value="">{placeholder}</Option>}
            {items.map((item) => (
                <Option key={item.value} value={item.value}>{item.label}</Option>
            ))}
        </Select>
    </SelectWrapper>
)


Selectbox.propTypes = {
    items: PropTypes.array,
    label: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}

Selectbox.defaultProps = {
    items: [],
    label: "",
}
