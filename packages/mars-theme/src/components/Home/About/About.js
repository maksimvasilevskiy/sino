import React from "react";
import ImageSection from "../../constant/ImageSection";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import { font } from "../../base/functions";
import { connect, styled } from "frontity";

import aboutImage from "../../../assets/images/about.png";
import aboutImage2x from "../../../assets/images/about@2x.png";

const About = ({ state }) => {
  return (
    <ImageSection
      imagePosition="left"
      image={aboutImage}
      image2x={aboutImage2x}
      hideImageInMobile={true}
    >
      <Title marginBottom={24}>About Us</Title>
      <TextWrapper>
        <p>
          Our people are our product. This means we&nbsp;don’t own any shipping
          vessels or&nbsp;aircraft but instead, constantly invest
          in&nbsp;best-in-class experts who will help your business grow.
        </p>
        <p>
          Learn more about our philosophy and how we&nbsp;continue
          to&nbsp;deliver on&nbsp;our mission of&nbsp;providing unmatched
          transportation and/or contract logistics services.
        </p>
      </TextWrapper>
      <PrimaryButton type="link" content="Learn More" link={"/company"} />
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
