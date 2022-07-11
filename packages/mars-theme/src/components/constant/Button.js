import React from "react";
import { styled } from "frontity";

const Button = ({ type, onClick, className, label, children }) => {
  return (
    <ButtonElement
      className={className}
      type={type ? type : "button"}
      aria-label={label ? label : ""}
      onClick={onClick}
    >
      {children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  display: grid;
  place-items: center;
  border: none;
  position: relative;
  background: var(--white);
  padding: 0;
  cursor: pointer;
  font-family: var(--font);
`;

export default Button;
