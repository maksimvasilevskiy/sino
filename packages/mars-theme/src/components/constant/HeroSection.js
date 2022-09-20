import React from "react";
import Container from "../constant/Container";
import Title from "../constant/Title";
import HeroDrop from "../constant/HeroDrop";
import parse from "html-react-parser";

import { connect, styled } from "frontity";

const Hero = ({ image, title }) => {
  return (
    <HeroSection>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <HeroContainer className="hero-container">
        <TitleWrapper>
          <Title size="l" color="white">
            {parse(title)}
          </Title>
        </TitleWrapper>
      </HeroContainer>
      <HeroDrop />
    </HeroSection>
  );
};

const ImageContainer = styled.div`
  max-height: 582px;
  background: var(--black);
  overflow: hidden;
  display: flex;
  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
    & img {
      width: 118%;
    }
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 32px;
  @media screen and (max-width: 576px) {
    left: 24px;
    bottom: 8px;
  }
`;

const HeroContainer = styled(Container)`
  position: relative;
`;

const HeroSection = styled.section`
  height: 100%;
  max-height: 582px;
  position: relative;
`;

export default connect(Hero, { injectProps: false });
