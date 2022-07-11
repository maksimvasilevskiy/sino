import React from "react";
import { styled } from "frontity";
import { flex } from "../base/functions";

const DecorativeLineElement = ({ heightInPercent, color, rotation }) => {
  return (
    <DecorativeLine heightInPercent={heightInPercent}>
      <Circle color={color} rotation={rotation}></Circle>
      <Line color={color}></Line>
    </DecorativeLine>
  );
};

const Line = styled.div`
  width: 2px;
  height: calc(100% - 14px);
  background: ${({ color }) =>
    color === "white"
      ? "var(--white)"
      : color === "blue"
      ? "var(--blue-600)"
      : "var(--blue-600)"};
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  transform: ${({ rotation }) =>
    rotation === "bottom" ? " translateY(-2px)" : "translateY(2px)"};
  ${({ rotation }) => rotation === "bottom" && "order: 1"};
  border-radius: 50%;
  border: 2px solid
    ${({ color }) =>
      color === "white"
        ? "var(--white)"
        : color === "blue"
        ? "var(--blue-600)"
        : "var(--blue-600)"};
`;

const DecorativeLine = styled.div`
  ${flex("column", "center")};
  height: ${({ heightInPercent }) => `${heightInPercent}%`};

  @media screen and (max-width: 1400px) {
    height: ${({ heightInPercent }) => `${heightInPercent / 1.35}%`};
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export default DecorativeLineElement;
