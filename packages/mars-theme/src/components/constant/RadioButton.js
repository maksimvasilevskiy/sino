import React from "react";
import { styled, useConnect, connect } from "frontity";
import { flex, font } from "../base/functions";

const RadioButton = ({ name, text, value, onChange, className }) => {
  const { state } = useConnect();

  return (
    <Label className={className}>
      <Input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={state.theme.language === value}
      />
      <BtnWrapper>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            data-circle="big"
            cx="7"
            cy="7"
            r="6.75"
            stroke="#4279B8"
            strokeWidth="0.5"
          />
          <circle
            data-circle="small"
            cx="7"
            cy="7"
            r="2.75"
            stroke="#4279B8"
            strokeWidth="0.5"
          />
        </svg>
      </BtnWrapper>
      <span className="text">{text}</span>
    </Label>
  );
};

const BtnWrapper = styled.div`
  margin-right: 11px;
  display: flex;
  & circle[data-circle="small"] {
    display: none;
  }
`;

const Input = styled.input`
  display: none;
  &:checked + div {
    & circle[data-circle="small"] {
      display: inline-block;
      fill: #4279b8;
    }
  }
`;

const Label = styled.label`
  cursor: pointer;
  margin-bottom: 12px;
  ${flex("row", "center")};
  &:last-child {
    margin-bottom: 0;
  }
  & span {
    ${font(13, 15)};
    letter-spacing: -0.02em;
  }
  &:hover {
    & circle[data-circle="small"] {
      display: inline-block;
    }
  }
`;

export default connect(RadioButton, { injectProps: false });
