import React from "react";
import { connect, styled, css } from "frontity";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { flex, font } from "../../base/functions";
import Title from "../../constant/Title";
import Container from "../../constant/Container";
import Link from "../../constant/Link";
import DecorativeLine from "../../constant/DecorativeLine";
import HeroDrop from "./HeroDrop";

import hero1 from "../../../assets/images/aerial-view-container-cargo-ship-sea.jpg";
import hero1_2x from "../../../assets/images/aerial-view-container-cargo-ship-sea@2x.jpg";
import hero3 from "../../../assets/images/aerial-view-container-cargo-ship.jpg";
import hero3_2x from "../../../assets/images/aerial-view-container-cargo-ship@2x.jpg";
import hero2 from "../../../assets/images/hero-image-2.jpg";
import hero2_2x from "../../../assets/images/hero-image-2@2x.jpg";

import youtube from "../../../assets/images/svg/YouTube-white.svg";
import linkedin from "../../../assets/images/svg/LinkedIn-white.svg";
import instagram from "../../../assets/images/svg/Instagram-white.svg";
import line from "../../../assets/images/svg/Line-white.svg";
import facebook from "../../../assets/images/svg/Facebook-white.svg";

const social = [
  {
    icon: youtube,
    link: "https://www.youtube.com/channel/UC14VTzFVjwvinLmT6ESRdlg",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/sino-logistics-corporation-pcl/",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/sinologisticscorp/",
  },
  {
    icon: line,
    link: "https://page.line.me/?accountId=sinologistics",
  },
  {
    icon: facebook,
    link: "https://www.facebook.com/sinologisticscorporation",
  },
];

const heroSlides = [
  {
    id: 1,
    title: "We Create Sustainable Supply Chains",
    subtitle:
      "Sino Logistics Corporation can provide your company with a competitive edge by evolving, improving, and simplifying its end-to-end supply chain.",
    images: [hero1, hero1_2x],
  },
  {
    id: 2,
    title: "Logistics Made Simple",
    subtitle:
      "From the factory to your wardrobe, or the farm to your refrigerator, Sino Logistics can develop solutions that meet customer needs from one end of the supply chain to the other.",
    images: [hero2, hero2_2x],
  },
  {
    id: 3,
    title: "Grow Your Business With Us",
    subtitle:
      "The worldwide logistics network is our number one asset, and our vision for sustainable growth within this network is at the core of our business ethos.",
    images: [hero3, hero3_2x],
  },
];

const Hero = ({ state }) => {
  const { swiperStylesLoading } = state.theme;

  return (
    <Wrapper>
      {!swiperStylesLoading && (
        <Swiper
          modules={[Pagination]}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {heroSlides.map((slide) => {
            const [img1x, img2x] = slide.images;

            return (
              <SwiperSlide key={slide.id}>
                <ImageWrapper>
                  <img
                    src={img1x}
                    srcSet={img2x ? `${img1x} 1x, ${img2x} 2x` : ""}
                    alt=""
                  />
                  {slide.id !== 1 && <div className="dark"></div>}
                </ImageWrapper>
                <SlideContent>
                  <div
                    css={css`
                      max-width: 674px;
                      @media screen and (max-width: 991px) {
                        max-width: 464px;
                      }
                    `}
                  >
                    <Title color="white" size="l">
                      {slide.title}
                    </Title>
                    <Subtitle>
                      <p>{slide.subtitle}</p>
                    </Subtitle>
                  </div>
                </SlideContent>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      <SocialBlock>
        {social.map(({ icon, link }) => {
          return (
            <SocialLink
              target="_blank"
              rel="noopener noreferrer"
              link={link}
              key={link}
            >
              <img width="24" height="24" src={icon} alt="social icon" />
            </SocialLink>
          );
        })}
        <DecorativeLine
          heightInPercent={56.185567}
          color="white"
          rotation="top"
        />
      </SocialBlock>
      <HeroDrop />
    </Wrapper>
  );
};

const SocialLink = styled(Link)`
  display: flex;
  width: 24px;
  height: 24px;
  margin-bottom: 24px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const SocialBlock = styled.div`
  position: absolute;
  ${flex("column", "center", "flex-end")};
  height: 100%;
  right: calc((100vw - 1372px) / 2 + 6px);
  z-index: 3;
  bottom: 0;
  @media screen and (max-width: 1400px) {
    right: calc((100vw - 950px) / 2 + 6px);
  }
  @media screen and (max-width: 991px) {
    right: calc((100vw - 730px) / 2 + 6px);
    display: none;
  }
`;

const Subtitle = styled.div`
  margin-top: 32px;
  & p {
    margin: 0;
    ${font(24, 32)};
    color: var(--white);
    letter-spacing: 0.04em;
    font-weight: 400;
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(24, 32)};
    }
  }
`;

const SlideContent = styled(Container)`
  position: absolute;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 152px;
  @media screen and (max-width: 991px) {
    padding-top: 48px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  & .dark {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    background: #3735354d;
    top: 0;
    left: 0;
  }
  & img {
    width: 100%;
    height: 100%;
    max-height: 776px;
    min-height: 629px;
    object-fit: cover;
  }
  /* TODO: Correct the image position in mobile (hero slider) */
  /* @media screen and (max-width: 576px) {
    & img {
      object-position: 50% 30%;
    }
  } */
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  & div.swiper-pagination {
    bottom: 70px;
    left: calc((100vw - 1372px) / 2);
    ${flex()};
    width: auto;
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
  @media screen and (max-width: 1400px) {
    & div.swiper-pagination {
      left: calc((100vw - 950px) / 2);
    }
  }
  @media screen and (max-width: 991px) {
    & div.swiper-pagination {
      left: 50%;
      transform: translateX(-50%);
      bottom: 58px;
    }
  }
`;

export default connect(Hero);
