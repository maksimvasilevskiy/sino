import React from "react";
import { styled, connect } from "frontity";
import { font } from "../../base/functions";

const InfoBlock = ({ title, children }) => {
  return (
    <Block data-element="block">
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Block>
  );
};

const Title = styled.h3`
  margin: 0;
  margin-bottom: 24px;
  color: var(--white);
  ${font(34, 42)};
  letter-spacing: -0.04em;
  font-weight: 500;
  @media screen and (max-width: 991px) {
    margin-bottom: 8px;
    ${font(24, 32)}
    font-weight: 400;
  }
`;

const Block = styled.div`
  padding: 48px;
  background: rgba(196, 196, 196, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  height: 100%;
  @media screen and (max-width: 991px) {
    padding: 16px;
  }
`;

const Content = styled.div`
  & p {
    margin: 0;
    margin-bottom: 8px;
    ${font(24, 36)};
    color: var(--white);
    letter-spacing: 0.04em;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(18, 30)};
      letter-spacing: 0;
    }
  }
`;

export default connect(InfoBlock, { injectProps: false });
