import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";
import parse from "html-react-parser";

const Advantages = ({ state, post }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Container>
        <ContentBlock>
          {!isMobile && (
            <Content>
              <TitleWrapper className="title-wrapper">
                <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 24}>
                  {parse(post.acf.service_advantages_offer_title)}
                </Title>
              </TitleWrapper>
              <Text className="text">
                {post.acf.service_advantages_offer_text && post.acf.service_advantages_offer_text.map((p, i) => (
                  <p key={`offer-paragraph-${i}`}>
                    {parse(p.service_advantages_paragraph)}
                  </p>
                ))}
              </Text>
            </Content>
          )}
          {isMobile && (
            <>
              <TitleWrapper className="title-wrapper">
                <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 24}>
                  {parse(post.acf.service_advantages_offer_title)}
                </Title>
              </TitleWrapper>
              <Text className="text">
                {post.acf.service_advantages_offer_text && post.acf.service_advantages_offer_text.map((p, i) => (
                  <p key={`offer-paragraph-${i}`}>
                    {parse(p.service_advantages_paragraph)}
                  </p>
                ))}
              </Text>
            </>
          )}
          <ImageWrapper className="img-wrapper">
            <img
              src={post.acf.service_advantages_offer_image_1x.url}
              srcSet={`${post.acf.service_advantages_offer_image_1x.url} 1x, ${post.acf.service_advantages_offer_image_2x.url} 2x`}
              alt=""
            />
          </ImageWrapper>
        </ContentBlock>
        {post.acf.service_advantages_has_info_block && (
          <ContentBlock data-image="left">
            {!isMobile && (
              <Content>
                <TitleWrapper className="title-wrapper">
                  <Title
                    size="xs"
                    color="blue"
                    marginBottom={isMobile ? 16 : 24}
                  >
                    {parse(post.acf.service_advantages_info_title)}
                  </Title>
                </TitleWrapper>
                <Text className="text">
                  {post.acf.service_advantages_info_text && post.acf.service_advantages_info_text.map((p, i) => (
                    <p key={`services-info-${i}`}>
                      {parse(p.service_advantages_info_paragraph)}
                    </p>
                  ))}
                </Text>
              </Content>
            )}
            {isMobile && (
              <>
                <TitleWrapper className="title-wrapper">
                  <Title
                    size="xs"
                    color="blue"
                    marginBottom={isMobile ? 16 : 24}
                  >
                    {parse(post.acf.service_advantages_info_title)}
                  </Title>
                </TitleWrapper>
                <Text className="text">
                  {post.acf.service_advantages_info_text && post.acf.service_advantages_info_text.map((p, i) => (
                    <p key={`services-info-${i}`}>
                      {parse(p.service_advantages_info_paragraph)}
                    </p>
                  ))}
                </Text>
              </>
            )}
            <ImageWrapper className="img-wrapper">
              <img
                src={post.acf.service_advantages_info_image_1x.url}
                srcSet={`${post.acf.service_advantages_info_image_1x.url} 1x, ${post.acf.service_advantages_info_image_2x.url} 2x`}
                alt=""
              />
            </ImageWrapper>
          </ContentBlock>
        )}
        {post.acf.service_advantages_has_options_block && (
          <OptionsBlock>
            <Title size="xs" color="blue" marginBottom={isMobile ? 32 : 64}>
              {parse(post.acf.service_advantages_options_title)}
            </Title>
            {post.acf.service_advantages_options_items && post.acf.service_advantages_options_items.map((option, idx) => {
              return (
                <ContentBlock
                  content="options"
                  key={`service-option-${idx}`}
                  data-image={idx % 2 ? "left" : "right"}
                  id={option.service_advantages_option_slug}
                >
                  {!isMobile && (
                    <Content>
                      <TitleWrapper className="title-wrapper">
                        <Title
                          size="xs"
                          color="blue"
                          marginBottom={isMobile ? 16 : 24}
                        >
                          {parse(option.service_advantages_option_title)}
                        </Title>
                      </TitleWrapper>
                      <Text className="text">
                        {option.service_advantages_option_text && option.service_advantages_option_text.map((p, i) => (
                          <p key={`service-option-text-${idx}-${i}`}>
                            {parse(p.service_advantages_option_paragraph)}
                          </p>
                        ))}
                      </Text>
                    </Content>
                  )}
                  {isMobile && (
                    <>
                      <TitleWrapper className="title-wrapper">
                        <Title
                          size="xs"
                          color="blue"
                          marginBottom={isMobile ? 16 : 24}
                        >
                          {parse(option.service_advantages_option_title)}
                        </Title>
                      </TitleWrapper>
                      <Text className="text">
                        {option.service_advantages_option_text && option.service_advantages_option_text.map((p, i) => (
                          <p key={`service-option-text-${idx}-${i}`}>
                            {parse(p.service_advantages_option_paragraph)}
                          </p>
                        ))}
                      </Text>
                    </>
                  )}
                  <ImageWrapper className="img-wrapper">
                    <img
                      src={option.service_advantages_option_image_1x.url}
                      srcSet={`${option.service_advantages_option_image_1x.url} 1x, ${option.service_advantages_option_image_2x.url} 2x`}
                      alt=""
                    />
                  </ImageWrapper>
                </ContentBlock>
              );
            })}
          </OptionsBlock>
        )}
      </Container>
    </Section>
  );
};

const Content = styled.div``;

const OptionsBlock = styled.div``;

const ImageWrapper = styled.div`
  & img {
    border-radius: 20px;
    max-width: 100%;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
    & img {
      width: 100%;
    }
  }
`;

const Text = styled.div`
  max-width: 634px;
  & p {
    ${font(18, 30)};
    font-weight: 300;
    margin: 0;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    order: 1;
    max-width: none;
  }
`;

const TitleWrapper = styled.div`
  grid-column: 1 / 3;
  & h4 {
    font-weight: 400;
    ${font(32, 40)};
    letter-spacing: -0.02em;
  }
  @media screen and (max-width: 991px) {
    grid-column: 1 / 2;
    order: -1;
    & h4 {
      font-weight: 400;
      ${font(24, 32)};
      letter-spacing: 0.04em;
    }
  }
`;

const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 52px) calc(50% - 12px);
  grid-column-gap: 64px;
  margin-bottom: ${({ content }) =>
    content === "options" ? "144px" : "192px"};
  &:last-of-type {
    margin-bottom: 0;
  }
  &[data-image="left"] {
    grid-template-columns: calc(50% - 12px) calc(50% - 52px);
    & .img-wrapper {
      order: -1;
    }
  }
  @media screen and (max-width: 1400px) {
    align-items: center;
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
    grid-column-gap: 24px;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    margin-bottom: 96px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &[data-image="left"] {
      grid-template-columns: 100%;
    }
  }
`;

const Section = styled.section`
  padding-top: 152px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(Advantages);
