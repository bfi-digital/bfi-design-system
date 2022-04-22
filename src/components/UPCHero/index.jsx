import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../_theme";

const Outer = styled.header`
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: ${theme.lightest};

  @media screen and (min-width: ${theme.m}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: ${theme.xl}) {
    padding-bottom: 150px;
  }

  .FormField-group,
  .FormField--group {
    margin-bottom: 0;
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

const Content = styled.div`

  @media screen and (min-width: ${theme.m}) {
    max-width: 560px;
  }

  @media screen and (min-width: ${theme.l}) {
    max-width: 70%;
  }

  @media screen and (min-width: ${theme.xl}) {
    max-width: 54%;
  }
`;

const Headline = styled.h1`
  margin: 0 0 25px;
  font-family: ${theme.headingFont};
  font-size: 26px;
  font-weight: ${theme.fontWeight_bold};
  line-height: normal;

  @media screen and (min-width: ${theme.l}) {
    font-size: 46px;
  }
`;

const Text = styled.div`
  font-size: 17px;
  line-height: 1.47;

  @media screen and (min-width: ${theme.l}) {
    font-size: 20px;
    line-height: 1.6;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const Additional = styled.div`
  margin-top: 25px;

  @media screen and (min-width: ${theme.l}) {
    margin-top: 32px;
  }
`;

export const UPCHero = ({ heading, text, children }) => (
  <Outer>
    <Container>
      <Content>
        {heading && <Headline>{heading}</Headline>}
        {text && <Text>{text}</Text>}

        {children && <Additional>{children}</Additional>}
      </Content>
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
