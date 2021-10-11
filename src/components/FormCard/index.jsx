import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";
import { Checkbox } from "../Checkbox";

const Outer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* align-items: flex-start; */
  height: 100%;
  padding: 15px 25px 25px 25px;
  background-color: ${theme.lightGrey};
`;

const Badge = styled.div`
  display: inline-block;
  padding: 6px 15px 6px 25px;
  margin-left: -25px;
  margin-bottom: 15px;
  background-color: ${theme.primary};
  color: ${theme.white};
  font-size: 14px;
  font-weight: ${theme.fontWeight_semiBold};
  color: ${theme.white};
  align-self: flex-start;

  @media screen and (min-width: ${theme.l}) {
    font-size: 17px;
  }
`;

const Heading = styled.h3`
  flex-basis: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 17px;
  font-weight: ${theme.fontWeight_semiBold};

  @media screen and (min-width: ${theme.l}) {
    font-size: 25px;
  }
`;

const Text = styled.p`
  flex-basis: 100%;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: ${theme.fontWeight_semiBold};

  @media screen and (min-width: ${theme.l}) {
    margin-bottom: 25px;
  }
`;

const Additional = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: flex-end;
`;

export const FormCard = ({ id, frequency, heading, description, children }) => (
  <Outer>
    {frequency && <Badge>{frequency}</Badge>}
    {heading && <Heading>{heading}</Heading>}
    {description && <Text>{description}</Text>}
    {children && <Additional>{children}</Additional>}
  </Outer>
);

FormCard.propTypes = {
  id: PropTypes.string,
  frequency: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

FormCard.defaultProps = {
  id: "",
  frequency: "",
  heading: "",
  description: "",
};
