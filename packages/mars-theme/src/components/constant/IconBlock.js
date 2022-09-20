import React from "react";
import { font } from "../base/functions";
import { styled } from "frontity";

const IconBlock = ({ icon, marginBottom, children }) => {
  return (
    <IconWrapper marginBottom={marginBottom}>
      <Icon src={icon} alt="" />
      <p>{children}</p>
    </IconWrapper>
  );
};

const Icon = styled.img`
  position: absolute;
  left: 0;
  top: 4px;
  width: 24px;
  height: 24px;
`;

const IconWrapper = styled.div`
  padding-left: 32px;
  position: relative;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "16px"};
  display: inline-block;
  & p {
    display: inline-block;
    ${font(18, 30)};
    margin: 0;
    color: var(--black);
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? `${marginBottom}px` : "24px"};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default IconBlock;
