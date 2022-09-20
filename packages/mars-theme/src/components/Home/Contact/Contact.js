import React from "react";
import ImageSection from "../../constant/ImageSection";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import { connect, styled } from "frontity";

import askImage from "../../../assets/images/alex-starnes-PK_t0Lrh7MM-unsplash.png";
import askImage2x from "../../../assets/images/alex-starnes-PK_t0Lrh7MM-unsplash@2x.png";

const Contact = ({ state, post }) => {
  const { isMobile } = state.theme;

  return (
    <ImageSection
      imagePosition="right"
      image={post.acf.home_ask_image_1x.url}
      image2x={post.acf.home_ask_image_2x.url || post.acf.home_ask_image_1x.url}
    >
      <Title size="m" color="blue" marginBottom={isMobile ? 32 : 40}>
        {post.acf.home_ask_title}
      </Title>
      <ButtonWrapper>
        <PrimaryButton type="link" link={post.acf.home_ask_link_url} content={post.acf.home_ask_link_text} />
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
