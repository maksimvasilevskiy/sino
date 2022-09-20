import React from "react";
import { styled } from "frontity";
import { font } from "../../base/functions";

const TextBlock = ({ title, marginBottom, children }) => {
  return (
    <Wrapper data-element="wrapper">
      <Title marginBottom={marginBottom}>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Content = styled.div`
  & p {
    font-weight: 300;
    ${font(18, 30)};
    color: var(--black);
    margin: 0;
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Title = styled.h5`
  margin: 0;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "16px"};
  ${font(24, 32)};
  letter-spacing: 0.04em;
  font-weight: 400;
  color: var(--black);
  @media screen and (max-width: 991px) {
    font-weight: 500;
    letter-spacing: 0;
    margin-bottom: 16px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 40px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default TextBlock;
