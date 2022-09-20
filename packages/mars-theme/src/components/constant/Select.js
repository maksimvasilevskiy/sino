import React, { useState } from "react";
import Input from "./Input";
import { styled } from "frontity";
import { font } from "../base/functions";

import SimpleBarReact from "simplebar-react";

import drop from "../../assets/images/svg/drop-blue.svg";

const SelectElement = ({
  isOpened,
  setIsOpened,
  name,
  value,
  placeholder,
  options,
  changeHandler,
}) => {
  return (
    <Select isOpened={isOpened} onClick={() => setIsOpened((prev) => !prev)}>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={true}
      />
      {isOpened && (
        <Dropdown>
          <SimpleBarReact
            forceVisible="y"
            autoHide={false}
            style={{ maxHeight: 287 }}
          >
            {options.map((option) => (
              <DropdownItem key={option} onClick={() => changeHandler(option)}>
                {option}
              </DropdownItem>
            ))}
          </SimpleBarReact>
        </Dropdown>
      )}
    </Select>
  );
};

const DropdownItem = styled.li`
  padding: 0;
  width: 100%;
  padding: 4px 8px;
  border-radius: 8px;
  ${font(18, 24)};
  color: var(--black);
  background: var(--white);
  &:hover {
    color: var(--white);
    background: var(--blue-600);
  }
  &:active {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Dropdown = styled.ul`
  list-style: none;
  position: absolute;
  margin: 0;
  z-index: 1;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: var(--white);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 8px;
  background: var(--white);
  & .simplebar {
    &-scrollbar {
      &::before {
        width: 4px;
        border-radius: 4px;
        background: var(--gray-900);
        opacity: 0.5;
      }
      &:hover {
        &::before {
          opacity: 0.7;
        }
      }
      &:active {
        &::before {
          opacity: 1;
        }
      }
    }
    &-vertical {
      right: -8px;
    }
  }
`;

const Select = styled.div`
  cursor: pointer;
  position: relative;
  & input {
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    width: 12px;
    height: 6px;
    background: url(${drop}) no-repeat 50% / cover;
    transform: ${({ isOpened }) =>
      isOpened ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)"};
  }
`;

export default SelectElement;
