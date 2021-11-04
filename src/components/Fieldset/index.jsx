import React from "react";
import styled from "styled-components";
import theme from "../_theme";

const Outer = styled.fieldset`
  width: 100%;
  padding: 0;
  margin: 0 0 10px 0;
  border: 0;

  @media screen and (min-width: ${theme.l}) {
    margin: 0 0 25px;
  }
`;

export const Fieldset = ({ children }) => <Outer>{children}</Outer>;
