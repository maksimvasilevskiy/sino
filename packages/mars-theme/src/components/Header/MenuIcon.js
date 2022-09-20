import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Button from "../constant/Button";
import close from "../../assets/images/svg/Close.svg";
import { flex } from "../base/functions";

const MenuIcon = ({ state, actions }) => {
  const mobileMenuOpened = state.theme.isMobileMenuOpened;

  function toggleScroll() {
    const htmlElement = document.documentElement;
    //htmlElement.classList.add("scroll-hidden");
    htmlElement.classList.toggle("scroll-hidden");
  }

  return mobileMenuOpened ? (
    <BtnWrapper>
      <CloseButton
        onClick={() => {
          actions.theme.toggleMobileMenu();
          toggleScroll();
        }}
      >
        <img src={close} alt="close" />
      </CloseButton>
    </BtnWrapper>
  ) : (
    <BtnWrapper>
      <Hamburger
        label="Open menu"
        onClick={() => {
          actions.theme.toggleMobileMenu();
          toggleScroll();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    ${flex("row", "center", "flex-end")};
  }
`;

const CloseButton = styled(Button)`
  display: grid;
  place-items: center;
  position: relative;
  width: 40px;
  height: 40px;
`;

const Hamburger = styled(Button)`
  position: relative;
  width: 40px;
  height: 40px;
  & span {
    position: absolute;
    border-radius: 2px;
    background: var(--blue-600);
    height: 2px;
    width: 23px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:first-of-type {
      transform: translate(-50%, -50%) translateY(-8px);
    }
    &:last-child {
      transform: translate(-50%, -50%) translateY(8px);
    }
  }
`;

export default connect(MenuIcon);
