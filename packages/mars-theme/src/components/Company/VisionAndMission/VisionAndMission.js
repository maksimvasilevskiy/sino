import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import InfoBlock from "./InfoBlock";
import DecorativeLine from "../../constant/DecorativeLine";
import { css, connect, styled } from "frontity";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import bg from "../../../assets/images/tangchi-lee-C4agU0uKw08-unsplash.jpg";

const VisionAndMission = ({ state, post }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Background
        css={css`
          background: url(${post.acf.company_vision_and_mission_background.url})
            no-repeat 50% / cover;
        `}
      >
        <VisionContainer id="vision-and-mission">
          <LineWrapper>
            <DecorativeLine
              heightInPercent={10.29126}
              color="white"
              rotation="bottom"
            />
          </LineWrapper>
          <BottomLineWrapper>
            <DecorativeLine
              heightInPercent={13.98058252}
              color="blue"
              rotation="bottom"
            />
          </BottomLineWrapper>
          {isMobile ? (
            <ContentWrapper>
              <Title size="m" color="white" marginBottom={24}>
                {post.acf.company_vision_and_mission_title}
              </Title>
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <InfoBlock title={post.acf.company_vision_title}>
                    {post.acf.company_vision_text.map((paragraph, i) => {
                      return (
                        <p key={"company_vision_text_" + i}>
                          {paragraph.company_vision_paragraph}
                        </p>
                      );
                    })}
                  </InfoBlock>
                </SwiperSlide>
                <SwiperSlide>
                  <InfoBlock title={post.acf.company_mission_title}>
                    {post.acf.company_mission_text.map((paragraph, i) => {
                      return (
                        <p key={"company_mission_text_" + i}>
                          {paragraph.company_mission_paragraph}
                        </p>
                      );
                    })}
                  </InfoBlock>
                </SwiperSlide>
              </Swiper>
            </ContentWrapper>
          ) : (
            <ContentWrapper>
              <Title size="m" color="white" marginBottom={32}>
                {post.acf.company_vision_and_mission_title}
              </Title>
              <Content>
                <InfoBlock title={post.acf.company_vision_title}>
                  {post.acf.company_vision_text.map((paragraph, i) => {
                    return (
                      <p key={"company_vision_text_" + i}>
                        {paragraph.company_vision_paragraph}
                      </p>
                    );
                  })}
                </InfoBlock>
                <InfoBlock title={post.acf.company_mission_title}>
                  {post.acf.company_mission_text.map((paragraph, i) => {
                    return (
                      <p key={"company_mission_text_" + i}>
                        {paragraph.company_mission_paragraph}
                      </p>
                    );
                  })}
                </InfoBlock>
              </Content>
            </ContentWrapper>
          )}
        </VisionContainer>
      </Background>
    </Section>
  );
};

const VisionContainer = styled(Container)`
  position: relative;
`;

const BottomLineWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
`;

const LineWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding-top: 205px;
  padding-bottom: 243px;
  @media screen and (max-width: 991px) {
    padding: 48px 0;
    & .swiper {
      border-radius: 20px;
      &-slide {
        height: auto;
      }
    }
    & div.swiper-pagination {
      bottom: 40px;
      & .swiper-pagination-bullet {
        margin: 0;
        margin-right: 32px;
        width: 16px;
        height: 16px;
        background: transparent;
        border: 2px solid var(--white);
        border-radius: 50%;
        position: relative;
        opacity: 1;
        &-active::before {
          content: "";
          position: absolute;
          border-radius: 50%;
          width: 6px;
          height: 6px;
          background: var(--white);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    & h3 {
      letter-spacing: 0.04em;
    }
    & div[data-element="block"] {
      padding-bottom: 80px;
    }
  }
`;

const Background = styled.div`
  position: relative;
  /* background: url(${bg}) no-repeat 50% / cover; */
  @media screen and (max-width: 576px) {
    background-position: 55% 45%;
  }
`;

const Section = styled.section`
  padding-top: 192px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
  }
`;

export default connect(VisionAndMission);
