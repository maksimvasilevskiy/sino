import React, { useState, useEffect } from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import SwiperButtons from "../../constant/SwiperButtons";
import DecorativeLine from "../../constant/DecorativeLine";
import { connect, styled } from "frontity";
import { font, flex } from "../../base/functions";
import parse from "html-react-parser";

// import bg from "../../../assets/images/subsidaries-img.png";
// import bg2x from "../../../assets/images/subsidaries-img@2x.png";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Pagination, Controller } from "swiper";

const Subsidiaries = ({ state, post }) => {
  const { isMobile } = state.theme;
  const slides = post.acf.company_subsidiaries_slides;

  const [swiper, updateSwiper] = useState(null);
  const [swiperThumbs, updateSwiperThumbs] = useState(null);

  // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);

  return (
    <Section>
      <Swiper
        className="bg-swiper"
        loop={true}
        modules={[Pagination, Navigation, Controller]}
        onSwiper={(swiper) => updateSwiper(swiper)}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={`subsidiaries-bg-${index}`}>
              <SlideBgWrapper>
                <img
                  // TODO:
                  // src={slide.companyImg}
                  src={post.acf.company_subsidiaries_background.url}
                  alt={`slide-${index}`}
                />
              </SlideBgWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Container>
        <Content>
          <TopLineWrapper>
            <DecorativeLine
              heightInPercent={10.36168133}
              rotation="bottom"
              color="white"
            />
          </TopLineWrapper>
          <BottomLineWrapper>
            <DecorativeLine
              heightInPercent={10.36168133}
              rotation="bottom"
              color="blue"
            />
          </BottomLineWrapper>
          <Title size="m" color="white" marginBottom={isMobile ? 24 : 32}>
            {parse(post.acf.company_subsidiaries_title)}
          </Title>
          <ContentBlock>
            <Swiper
              loop={true}
              modules={[Pagination, Navigation, Controller]}
              navigation={{
                prevEl: ".subsidiaries-prev",
                nextEl: ".subsidiaries-next",
              }}
              spaceBetween={24}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => updateSwiperThumbs(swiper)}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={`subsidiaries-${index}`}>
                    <Title
                      size="xs"
                      color="white"
                      marginBottom={isMobile ? 16 : 24}
                    >
                      {parse(slide.company_subsidiaries_slide_title)}
                    </Title>
                    <Text>
                      <p>{parse(slide.company_subsidiaries_slide_text)}</p>
                    </Text>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <VisitBlock>
              {!isMobile && (
                <SwiperButtons
                  prevClassName={"subsidiaries-prev"}
                  nextClassName={"subsidiaries-next"}
                  spaceBetween={24}
                  color="white"
                />
              )}
              <VisitButton
                // href={slide.link}
                href={post.acf.company_subsidiaries_button_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {parse(post.acf.company_subsidiaries_button_text)}
              </VisitButton>
            </VisitBlock>
          </ContentBlock>
        </Content>
      </Container>
    </Section>
  );
};

const SlideBgWrapper = styled.div`
  width: 100%;
  height: 100%;
  & img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

const TopLineWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

const BottomLineWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  height: 100%;
`;

const VisitButton = styled.a`
  margin-left: auto;
  ${font(24, 30)};
  color: var(--white);
  padding: 0.83333em 1.25em;
  background: var(--lightblue-250);
  border-radius: 8px;
  &:hover {
    background: var(--lightblue-300);
  }
  &:active {
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 991px) {
    z-index: 1;
    margin: 0 auto;
    width: calc(100% - 32px);
    text-align: center;
  }
`;

const VisitBlock = styled.div`
  margin-top: 32px;
  ${flex("row", "center")};
  @media screen and (max-width: 991px) {
    position: absolute;
    bottom: 64px;
    left: 0;
    width: 100%;
  }
`;

const Text = styled.div`
  & p {
    ${font(24, 36)};
    color: var(--white);
    margin: 0;
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    & p {
      font-weight: 300;
      ${font(18, 30)};
    }
  }
`;

const ContentBlock = styled.div`
  border-radius: 20px;
  backdrop-filter: blur(20px);
  background: rgba(169, 169, 169, 0.5);
  padding: 48px;
  max-width: 674px;
  position: relative;
  & div.swiper-pagination {
    display: none;
    z-index: 1;
    bottom: 0;
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
  @media screen and (max-width: 991px) {
    padding: 24px 16px;
    & h4 {
      font-weight: 400;
      ${font(24, 32)};
      letter-spacing: 0.04em;
    }
    & .swiper {
      padding-bottom: 134px;
    }
    & div.swiper-pagination {
      display: block;
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 195px;
  padding-bottom: 152px;
  @media screen and (max-width: 991px) {
    padding: 48px 0;
  }
`;

const Section = styled.section`
  margin-top: 192px;
  position: relative;
  & .bg-swiper {
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export default connect(Subsidiaries);
