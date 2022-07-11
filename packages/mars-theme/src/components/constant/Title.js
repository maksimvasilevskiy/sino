import React from "react";
import { styled } from "frontity";
import { font } from "../base/functions";

const Title = ({ size, color, marginBottom, children, style }) => {
  return size === "l" ? (
    <H1 style={style} color={color} marginBottom={marginBottom}>
      {children}
    </H1>
  ) : size === "m" ? (
    <H2 style={style} color={color} marginBottom={marginBottom}>
      {children}
    </H2>
  ) : (
    <H3 style={style} color={color} marginBottom={marginBottom}>
      {children}
    </H3>
  );
};

const H1 = styled.h1`
  margin: 0;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "0"};
  font-weight: 500;
  color: ${({ color }) =>
    color === "white" ? "var(--white)" : "var(--blue-600)"};
  ${font(64, 72)};
  @media screen and (max-width: 991px) {
    ${font(32, 32)};
  }
`;

const H2 = styled.h2`
  margin: 0;
  font-weight: 500;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  color: ${({ color }) =>
    color === "white" ? "var(--white)" : "var(--blue-600)"};
  ${font(48, 56)};
  @media screen and (max-width: 991px) {
    ${font(32, 40)};
  }
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 500;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  color: ${({ color }) =>
    color === "white" ? "var(--white)" : "var(--blue-600)"};
  ${font(36, 41)};
  @media screen and (max-width: 991px) {
    ${font(32, 40)};
    letter-spacing: -0.02em;
  }
`;

export default Title;
