import React from "react";
import ImageSection from "../../constant/ImageSection";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import { connect, styled } from "frontity";

import askImage from "../../../assets/images/alex-starnes-PK_t0Lrh7MM-unsplash.png";
import askImage2x from "../../../assets/images/alex-starnes-PK_t0Lrh7MM-unsplash@2x.png";

const Contact = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <ImageSection
      imagePosition="right"
      image={askImage}
      image2x={askImage2x || askImage}
    >
      <Title size="m" color="blue" marginBottom={isMobile ? 32 : 40}>
        Ask Us Anything
      </Title>
      <ButtonWrapper>
        <PrimaryButton type="link" link="/contact" content="Continue" />
      </ButtonWrapper>
    </ImageSection>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 991px) {
    order: 2;
    margin-top: 24px;
  }
`;

export default connect(Contact);
