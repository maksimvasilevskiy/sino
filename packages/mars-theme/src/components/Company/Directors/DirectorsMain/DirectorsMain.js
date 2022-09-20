import React from "react";
import Title from "../../../constant/Title";
import ImageSection from "../../../constant/ImageSection";
import { styled, connect } from "frontity";
import { font } from "../../../base/functions";
import parse from "html-react-parser";

import directors from "../../../../assets/images/directors/directors.png";
import directors2x from "../../../../assets/images/directors/directors@2x.png";

const DirectorsMain = ({ state, post }) => {
  const { isMobile } = state.theme;

  return (
    <ImageSection
      image={post.acf.company_directors_top_image_1x.url}
      image2x={post.acf.company_directors_top_image_2x.url}
      imagePosition="right"
    >
      {isMobile ? (
        <>
          <Title size="m" color="blue" marginBottom={24}>
            {parse(post.acf.company_directors_top_title)}
          </Title>
          <Text>
            <p>
              {parse(post.acf.company_directors_top_text)}
            </p>
          </Text>
        </>
      ) : (
        <ContentWrapper>
          <Title size="m" color="blue" marginBottom={24}>
            {parse(post.acf.company_directors_top_title)}
          </Title>
          <Text>
            <p>
              {parse(post.acf.company_directors_top_text)}
            </p>
          </Text>
        </ContentWrapper>
      )}
    </ImageSection>
  );
};

const ContentWrapper = styled.div`
  max-width: 440px;
`;

const Text = styled.div`
  & p {
    margin: 0;
    font-weight: 300;
    ${font(18, 30)};
  }
  @media screen and (max-width: 991px) {
    order: 1;
    margin-top: 24px;
  }
`;

export default connect(DirectorsMain);
