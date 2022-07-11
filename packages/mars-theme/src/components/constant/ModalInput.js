import React from "react";
import { styled } from "frontity";
import { font } from "../base/functions";

const ModalInput = ({ type, placeholder, value, onChange, name, minWidth }) => {
  return (
    <Input
      type={type ? type : "text"}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      minWidth={minWidth}
    />
  );
};

const Input = styled.input`
  width: auto;
  box-sizing: border-box;
  ${font(18, 30)}
  color: var(--black);
  padding: 0.444em 0.889em;
  border: none;
  border-radius: 8px;
  min-width: ${({ minWidth }) => `${minWidth}`};
  outline: none;
  background: var(--white);
  position: relative;
  z-index: 2;
  &::placeholder {
    color: var(--gray-900);
  }
`;

export default ModalInput;
