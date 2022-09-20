import React from "react";
import { font } from "../base/functions";
import { styled } from "frontity";

const LoadMore = ({ disabled, onClick, text }) => {
  return (
    <Load disabled={disabled} onClick={onClick}>
      {text}
    </Load>
  );
};

const Load = styled.button`
  ${font(24, 30)};
  cursor: pointer;
  padding: 0.833em 1em;
  border-radius: 8px;
  border: none;
  background: var(--white);
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  &:hover {
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
  }
  &:active {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    /* opacity: 0.5; */
  }
`;

export default LoadMore;
