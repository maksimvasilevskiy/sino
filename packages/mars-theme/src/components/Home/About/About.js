import React from "react";
import ImageSection from "../../constant/ImageSection";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import { font } from "../../base/functions";
import { connect, styled } from "frontity";

import aboutImage from "../../../assets/images/about.png";
import aboutImage2x from "../../../assets/images/about@2x.png";

const About = ({ state, post }) => {
  return (
    <ImageSection
      imagePosition="left"
      image={post.acf.home_about_us_image_1x.url}
      image2x={post.acf.home_about_us_image_2x.url}
      hideImageInMobile={true}
    >
      <Title marginBottom={24}>{post.acf.home_about_us_title}</Title>
      <TextWrapper>
        {post.acf.home_about_us_text.map((paragraph, i) => {
          return <p key={'about_us_paragraph' + i}>{paragraph.home_about_us_paragraph}</p>;
        })}
      </TextWrapper>
      <PrimaryButton type="link" content={post.acf.home_about_us_link_text} link={post.acf.home_about_us_link_url} />
    </ImageSection>
  );
};

const TextWrapper = styled.div`
  margin-bottom: 32px;
  & p {
    margin: 0;
    ${font(18, 30)};
    font-weight: 300;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
  }
`;

export default connect(About);
