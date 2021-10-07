import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";

const Outer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: ${theme.lightest};

  @media screen and (min-width: ${theme.m}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Container = styled.div`
  max-width: ${theme.l};
  width: 100%;
  margin: 0 auto;
  padding: 0px ${theme.horizontalPadding};
  z-index: 1;
  position: relative;

  @media screen and (min-width: ${theme.xl}) {
    max-width: calc(${theme.xl} - 100px);
  }
`;

const Headline = styled.h1`
  margin: 0 0 25px;
  font-family: ${theme.headingFont};
  font-size: 26px;
  font-weight: ${theme.fontWeight_bold};
  line-height: normal;

  @media screen and (min-width: ${theme.m}) {
    font-size: 46px;
  }
`;

const Content = styled.div`
  font-size: 17px;
  line-height: 1.47;

  @media screen and (min-width: ${theme.m}) {
    font-size: 20px;
    line-height: 1.6;
  }
`;

const Additional = styled.div`
  margin-top: 25px;
`;

export const UPCHero = ({ heading, text, children }) => (
  <Outer>
    <Container>
      {heading && <Headline>{heading}</Headline>}
      {text && <Content>{text}</Content>}

      {children && <Additional>{children}</Additional>}
    </Container>
  </Outer>
);

UPCHero.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};

UPCHero.defaultProps = {
  heading: "",
  text: "",
};
