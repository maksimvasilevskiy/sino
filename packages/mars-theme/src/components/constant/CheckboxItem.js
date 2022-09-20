import React from "react";
import P from "./Paragraph";
import { flex, font } from "../base/functions";
import { styled } from "frontity";

const CheckboxItem = ({ checked, setChecked, children }) => {
  return (
    <CheckboxWrapper onClick={setChecked}>
      <CheckboxInput />
      <Checkbox checked={checked}>
        {checked && (
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.65208 12C5.5089 12 5.37468 11.9774 5.2494 11.9323C5.12412 11.888 5.00779 11.8121 4.9004 11.7047L0.282955 7.08725C0.0860869 6.89038 -0.00805182 6.63517 0.000538783 6.32161C0.00984527 6.00877 0.112932 5.75391 0.3098 5.55705C0.506668 5.36018 0.757228 5.26174 1.06148 5.26174C1.36573 5.26174 1.61629 5.36018 1.81316 5.55705L5.65208 9.39597L14.7528 0.295302C14.9496 0.0984341 15.2048 0 15.5184 0C15.8312 0 16.0861 0.0984341 16.283 0.295302C16.4798 0.49217 16.5783 0.747024 16.5783 1.05987C16.5783 1.37342 16.4798 1.62864 16.283 1.8255L6.40376 11.7047C6.29638 11.8121 6.18005 11.888 6.05477 11.9323C5.92949 11.9774 5.79526 12 5.65208 12Z"
              fill="#FDFDFD"
            />
          </svg>
        )}
      </Checkbox>
      <P>{children}</P>
    </CheckboxWrapper>
  );
};

const CheckboxInput = styled.input`
  display: none;
`;

const Checkbox = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid var(--blue-600);
  border-radius: 4px;
  background: var(--white);
  display: grid;
  place-items: center;
  ${({ checked }) => checked && `background: var(--blue-600)`};
`;

const CheckboxWrapper = styled.div`
  padding-left: 32px;
  position: relative;
  ${flex()};
  && p {
    font-weight: 300;
  }
  @media screen and (max-width: 991px) {
    && p {
      ${font(14, 22)};
      letter-spacing: -0.01em;
    }
  }
`;

export default CheckboxItem;
