import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";
import { Checkbox } from "../Checkbox";

const Outer = styled.div`
  width: 100%;
  margin-bottom: 25px;

  &.FormField--group {
    @media screen and (min-width: ${theme.m}) {
      max-width: 420px;
    }
  }

  .FormField-group {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-bottom: 10px;
    
    @media screen and (min-width: ${theme.m}) {
      flex-wrap: nowrap;
    }
  }
`;
export const FormField = ({ classes, children }) => (
  <Outer className={classes}>{children}</Outer>
);
