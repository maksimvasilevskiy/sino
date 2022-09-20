import React from "react";
import { styled } from "frontity";
import { font } from "../base/functions";

const Title = ({ size, color, marginBottom, children, style, maxWidth }) => {
  return size === "l" ? (
    <H1
      style={style}
      color={color}
      marginBottom={marginBottom}
      maxWidth={maxWidth}
    >
      {children}
    </H1>
  ) : size === "m" ? (
    <H2
      style={style}
      color={color}
      marginBottom={marginBottom}
      maxWidth={maxWidth}
    >
      {children}
    </H2>
  ) : size === "s" ? (
    <H3
      style={style}
      color={color}
      marginBottom={marginBottom}
      maxWidth={maxWidth}
    >
      {children}
    </H3>
  ) : (
    <H4
      style={style}
      color={color}
      marginBottom={marginBottom}
      maxWidth={maxWidth}
    >
      {children}
    </H4>
  );
};

const H1 = styled.h1`
  margin: 0;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "0"};
  font-weight: 500;
  color: ${({ color }) =>
    color === "white"
      ? "var(--white)"
      : color === "black"
      ? "var(--black)"
      : "var(--blue-600)"};
  ${font(64, 72)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  @media screen and (max-width: 991px) {
    ${font(40, 48)};
  }
`;

const H2 = styled.h2`
  margin: 0;
  font-weight: 500;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  color: ${({ color }) =>
    color === "white"
      ? "var(--white)"
      : color === "black"
      ? "var(--black)"
      : "var(--blue-600)"};
  ${font(48, 56)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  @media screen and (max-width: 991px) {
    ${font(32, 40)};
    letter-spacing: -0.02em;
  }
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 500;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  color: ${({ color }) =>
    color === "white"
      ? "var(--white)"
      : color === "black"
      ? "var(--black)"
      : "var(--blue-600)"};
  ${font(36, 41)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  @media screen and (max-width: 991px) {
    ${font(32, 40)};
    letter-spacing: -0.02em;
  }
`;

const H4 = styled.h4`
  margin: 0;
  font-weight: 500;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  color: ${({ color }) =>
    color === "white"
      ? "var(--white)"
      : color === "black"
      ? "var(--black)"
      : "var(--blue-600)"};
  ${font(34, 42)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  letter-spacing: -0.02em;
  @media screen and (max-width: 991px) {
    ${font(32, 40)};
    letter-spacing: -0.02em;
  }
`;

export default Title;
