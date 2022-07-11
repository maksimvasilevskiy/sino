import React from "react";
import { connect, styled } from "frontity";
import { font } from "../base/functions";

const PrimaryInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  minWidth,
}) => {
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
  ${font(18, 24)}
  color: var(--black);
  outline: none;
  width: 100%;
  max-width: ${({ minWidth }) => `${minWidth}`};
  border-radius: 8px;
  border: 1px solid var(--blue-600);
  padding: 0.444em 0.889em;
  background: var(--white);
  position: relative;
  &::placeholder {
    color: var(--gray-900);
  }
`;

export default connect(PrimaryInput, { injectProps: false });
