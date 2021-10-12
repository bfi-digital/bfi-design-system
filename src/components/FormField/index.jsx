import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";
import { Checkbox } from "../Checkbox";

const Outer = styled.div`
  width: 100%;
  margin-bottom: 25px;

  &.FormField--inline {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    
    @media screen and (min-width: ${theme.m}) {
      flex-wrap: nowrap;
    }

    button {
      /* bottom: 5px; */
      /* left: -2px;

      &:active {
        box-shadow: none;
        transform: translate(0, 0);

        :after {
          bottom: 0;
        }
      } */
    }
  }
`;
export const FormField = ({ classes, children }) => (
  <Outer className={classes}>{children}</Outer>
);
